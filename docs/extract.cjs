const fs = require('fs');
const xml = fs.readFileSync('docs/document.xml', 'utf8');

// A simple regex parser for docx XML paragraphs
const pRegex = /<w:p(?:\s+[^>]*)?>([\s\S]*?)<\/w:p>/g;
let match;
let output = [];

while ((match = pRegex.exec(xml)) !== null) {
  const pContent = match[1];
  
  // check style
  let styleMatch = pContent.match(/<w:pStyle\s+w:val="([^"]+)"/);
  let style = styleMatch ? styleMatch[1] : '';
  
  // check bullet / num
  let isBullet = /<w:numPr>/.test(pContent);

  // extract text from w:t
  let texts = [];
  const tRegex = /<w:t(?:\s+[^>]*)?>([^<]*)<\/w:t>/g;
  let tMatch;
  while ((tMatch = tRegex.exec(pContent)) !== null) {
    texts.push(tMatch[1]);
  }
  let line = texts.join('').trim();
  if (!line) continue;

  if (style.startsWith('Heading1') || style === 'Title') {
    output.push('\n# ' + line + '\n');
  } else if (style.startsWith('Heading2')) {
    output.push('\n## ' + line + '\n');
  } else if (style.startsWith('Heading3')) {
    output.push('\n### ' + line + '\n');
  } else if (style.startsWith('Heading4')) {
    output.push('\n#### ' + line + '\n');
  } else if (isBullet) {
    output.push('- ' + line);
  } else {
    output.push(line);
  }
}

fs.writeFileSync('docs/content_extracted.md', output.join('\n\n'), 'utf8');
console.log('Extracted ' + output.length + ' lines/paragraphs.');
