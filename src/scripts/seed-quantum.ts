import config from '../payload.config'
import { getPayload } from 'payload'

function createRichText(heading: string, paragraphs: string[] = []): any {
  const children: any[] = [
    {
      type: 'heading',
      tag: 'h1',
      children: [
        {
          type: 'text',
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          text: heading,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  ]

  for (const p of paragraphs) {
    children.push({
      type: 'paragraph',
      children: [
        {
          type: 'text',
          detail: 0,
          format: 0,
          mode: 'normal',
          style: '',
          text: p,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    })
  }

  return {
    root: {
      type: 'root',
      children,
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

function createParagraphRichText(heading: string, description: string): any {
  return {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          tag: 'h2',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: heading,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
        {
          type: 'paragraph',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: description,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  }
}

async function seed() {
  console.log('--- Initializing Payload for Seeding Quantum IT Website ---')
  const payload = await getPayload({ config })

  // 1. UPDATE SITE SETTINGS GLOBAL
  console.log('Seeding Site Settings...')
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      siteName: 'Quantum IT & Security Solutions PLC',
      brandLine: 'Powering Digital Transformation. Securing Enterprise. Enabling Sustainable Growth.',
      siteDescription:
        'Quantum IT & Security Solutions PLC helps Ethiopian organizations digitize operations, defend critical systems and power their future, from one accountable technology partner.',
      contactEmail: 'henok@quantumitss.com',
      secondaryEmail: 'marketing@quantumitss.com',
      contactPhone: '+251-982-31-32-33',
      secondaryPhone: '+251-980-11-61-87',
      address: 'Addis Ababa, Ethiopia',
      businessHours: 'Mon - Fri: 8:30 AM - 5:30 PM, Sat: 8:30 AM - 1:00 PM',
    },
    context: { disableRevalidate: true },
    overrideAccess: true,
  })

  // 2. UPDATE HEADER GLOBAL
  console.log('Seeding Header Navigation...')
  await payload.updateGlobal({
    slug: 'header',
    context: { disableRevalidate: true },
    data: {
      navItems: [
        {
          link: {
            type: 'custom',
            url: '/',
            label: 'Home',
          },
          enableDropdown: false,
          dropdownItems: [],
        },
        {
          link: {
            type: 'custom',
            url: '/solutions',
            label: 'Solutions',
          },
          enableDropdown: true,
          dropdownItems: [
            {
              link: {
                type: 'custom',
                url: '/solutions',
                label: 'Overview & Solutions Hub',
              },
              description: 'Four capability pillars under one accountable partner',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/software',
                label: 'Digital Business Solutions (ERP · Biometrics · Invoicing)',
              },
              description: 'ERP, biometric workforce management and MOR-compliant tax software',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/web-and-digital-marketing',
                label: 'Website Development & Digital Marketing',
              },
              description: 'Corporate websites, portals, SEO and performance marketing',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/enterprise-networks',
                label: 'Enterprise Network Solutions',
              },
              description: 'LAN/WAN, structured cabling, Wi-Fi and unified communications',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/systems-and-cloud',
                label: 'System & Cloud Solutions',
              },
              description: 'Server infrastructure, private/public cloud, backup & DR',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/cybersecurity',
                label: 'Cybersecurity Solutions',
              },
              description: 'Security assessments, firewalls, endpoint security & CCTV',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/solar-energy',
                label: 'Solar Energy Solutions',
              },
              description: 'Commercial, hybrid, off-grid and solar-powered ICT',
            },
            {
              link: {
                type: 'custom',
                url: '/solutions/ev-charging',
                label: 'EV Charging Supply & Installation',
              },
              description: 'AC & DC fast charging, fleet and commercial charging',
            },
          ],
        },
        {
          link: {
            type: 'custom',
            url: '/training',
            label: 'Training & Certification',
          },
          enableDropdown: true,
          dropdownItems: [
            {
              link: {
                type: 'custom',
                url: '/training',
                label: 'Professional Training',
              },
              description: 'Oracle, Microsoft, cybersecurity and PMP certification tracks',
            },
            {
              link: {
                type: 'custom',
                url: '/exam-center',
                label: 'Professional Exam Center',
              },
              description: 'Secure testing environment for globally recognized certifications',
            },
          ],
        },
        {
          link: {
            type: 'custom',
            url: '/projects',
            label: 'Projects',
          },
          enableDropdown: false,
          dropdownItems: [],
        },
        {
          link: {
            type: 'custom',
            url: '/about',
            label: 'Company',
          },
          enableDropdown: true,
          dropdownItems: [
            {
              link: {
                type: 'custom',
                url: '/about',
                label: 'About Us',
              },
              description: 'Who we are, vision, mission and company background',
            },
            {
              link: {
                type: 'custom',
                url: '/about/values',
                label: 'Our Values',
              },
              description: 'The six principles guiding every project',
            },
            {
              link: {
                type: 'custom',
                url: '/why-quantum',
                label: 'Why Quantum',
              },
              description: 'Six integrated capabilities and what it means for your business',
            },
            {
              link: {
                type: 'custom',
                url: '/delivery-approach',
                label: 'Our Delivery Approach',
              },
              description: 'A structured 7-step method from need to working solution',
            },
          ],
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Contact',
          },
          enableDropdown: false,
          dropdownItems: [],
        },
      ],
      ctaButtons: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Book a Consultation',
            appearance: 'default',
          },
        },
      ],
    },
    overrideAccess: true,
  })

  // 3. UPDATE FOOTER GLOBAL
  console.log('Seeding Footer Global...')
  await payload.updateGlobal({
    slug: 'footer',
    data: {
      columns: [
        {
          heading: 'Solutions',
          links: [
            { link: { type: 'custom', url: '/solutions/software#erp', label: 'ERP Systems' } },
            { link: { type: 'custom', url: '/solutions/software#biometric-attendance', label: 'Biometric Attendance' } },
            { link: { type: 'custom', url: '/solutions/software#e-invoicing', label: 'Electronic Invoicing' } },
            { link: { type: 'custom', url: '/solutions/web-and-digital-marketing', label: 'Website Development' } },
            { link: { type: 'custom', url: '/solutions/web-and-digital-marketing', label: 'Digital Marketing' } },
            { link: { type: 'custom', url: '/solutions/enterprise-networks', label: 'Enterprise Networking' } },
            { link: { type: 'custom', url: '/solutions/systems-and-cloud', label: 'Cloud & Systems' } },
            { link: { type: 'custom', url: '/solutions/cybersecurity', label: 'Cybersecurity' } },
            { link: { type: 'custom', url: '/solutions/solar-energy', label: 'Solar Systems' } },
            { link: { type: 'custom', url: '/solutions/ev-charging', label: 'EV Charging' } },
          ],
        },
        {
          heading: 'Professional Services',
          links: [
            { link: { type: 'custom', url: '/solutions', label: 'Technology Consulting' } },
            { link: { type: 'custom', url: '/training', label: 'Professional Training' } },
            { link: { type: 'custom', url: '/exam-center', label: 'Certification Preparation' } },
            { link: { type: 'custom', url: '/exam-center', label: 'Examination Services' } },
            { link: { type: 'custom', url: '/delivery-approach', label: 'Technical Support & Maintenance' } },
          ],
        },
        {
          heading: 'Company',
          links: [
            { link: { type: 'custom', url: '/about', label: 'About Us' } },
            { link: { type: 'custom', url: '/about/values', label: 'Our Values' } },
            { link: { type: 'custom', url: '/why-quantum', label: 'Why Quantum' } },
            { link: { type: 'custom', url: '/delivery-approach', label: 'Our Delivery Approach' } },
            { link: { type: 'custom', url: '/projects', label: 'Featured Projects' } },
            { link: { type: 'custom', url: '/contact', label: 'Contact Us' } },
          ],
        },
      ],
      legalLine: '© 2026 Quantum IT & Security Solutions PLC. All Rights Reserved.',
    },
    context: { disableRevalidate: true },
    overrideAccess: true,
  })

  // 4. SEED PROJECTS
  console.log('Seeding Projects...')
  const existingProjects = await payload.find({ collection: 'projects', limit: 100, overrideAccess: true })
  for (const doc of existingProjects.docs) {
    await payload.delete({ collection: 'projects', id: doc.id, context: { disableRevalidate: true }, overrideAccess: true })
  }

  const projectsToSeed = [
    {
      title: 'Customs: Multi-Branch Biometric Attendance System',
      slug: 'customs-biometric-attendance',
      client: 'Customs',
      category: 'government' as const,
      solution: 'Biometric Attendance & Workforce Management',
      summary: 'Centralized workforce management and biometric verification deployed across Ethiopian Customs branch locations, eliminating manual registers and payroll disputes.',
      focus: 'Centralized workforce attendance and multi-branch management [250 IP Phone / terminals]',
      result: 'Multi-branch deployment across Ethiopian Customs locations',
      featured: true,
      sortOrder: 1,
    },
    {
      title: 'Ethiopian Electric Utility: Kotebe Site',
      slug: 'eeu-ev-charging-kotebe',
      client: 'Ethiopian Electric Utility',
      category: 'energy' as const,
      solution: 'EV Charging Infrastructure',
      summary: 'Supply and installation of cutting-edge EV charging infrastructure at the Kotebe site supporting Ethiopia’s national electric mobility initiatives.',
      focus: 'EV infrastructure and sustainable transportation',
      result: '24 EV charging stations supplied and installed at Kotebe site',
      featured: true,
      sortOrder: 2,
    },
    {
      title: 'Awach SACCO: ERP System',
      slug: 'awach-sacco-erp',
      client: 'Awach SACCO',
      category: 'financial' as const,
      solution: 'SACCO ERP',
      summary: 'An integrated ERP environment supporting comprehensive SACCO operations including finance, member management, loan processing and business reporting.',
      focus: 'Finance · Member management · Loan operations · Accounting · Business reporting',
      result: 'Complete automation of SACCO member services and financial reporting',
      featured: true,
      sortOrder: 3,
    },
    {
      title: 'HOPR: Unified Communication Project',
      slug: 'hopr-unified-communication',
      client: 'House of Peoples Representatives (HOPR)',
      category: 'enterprise' as const,
      solution: 'Enterprise Unified Communications',
      summary: 'Deployment of enterprise unified communication infrastructure supporting high-reliability organizational collaboration and communication.',
      focus: 'Enterprise communication and collaboration',
      result: 'Enterprise-wide unified communication network deployed',
      featured: false,
      sortOrder: 4,
    },
    {
      title: 'ICWC: CCTV Project',
      slug: 'icwc-cctv-surveillance',
      client: 'ICWC',
      category: 'security' as const,
      solution: 'CCTV & Video Surveillance Infrastructure',
      summary: 'High-definition CCTV surveillance and central monitoring system that improves facility security, perimeter defense and centralized oversight.',
      focus: 'Physical security and centralized surveillance',
      result: '56 Cameras installed, 2 NVR, 10 PoE switches',
      featured: false,
      sortOrder: 5,
    },
    {
      title: 'Ministry of Revenue (MOR)',
      slug: 'mor-digital-systems',
      client: 'Ministry of Revenue',
      category: 'government' as const,
      solution: 'ICT / Digital Systems Infrastructure',
      summary: 'Technology implementation and ongoing support for operational and digital service requirements, supporting fiscal compliance and transaction workflows.',
      focus: 'Technology infrastructure and operational efficiency',
      result: 'Mission-critical digital tax infrastructure support',
      featured: false,
      sortOrder: 6,
    },
    {
      title: 'Dashen Bank',
      slug: 'dashen-bank-biometrics',
      client: 'Dashen Bank',
      category: 'financial' as const,
      solution: 'Enterprise Technology & Infrastructure',
      summary: 'Technology integration and infrastructure support for enterprise and financial-service operations, including branch biometric workforce management.',
      focus: 'Reliable, highly available technology infrastructure',
      result: '36 Biometric Attendance systems deployed',
      featured: false,
      sortOrder: 7,
    },
    {
      title: 'ETTE: ERP System',
      slug: 'ette-custom-erp',
      client: 'ETTE',
      category: 'enterprise' as const,
      solution: 'Customized ERP Platform',
      summary: 'A tailored ERP environment supporting organizational operational workflows, procurement, inventory control and management analytics.',
      focus: 'Business process automation · Centralized information · Resource planning',
      result: 'Unified operational dashboard across all enterprise departments',
      featured: false,
      sortOrder: 8,
    },
  ]

  for (const proj of projectsToSeed) {
    await payload.create({
      collection: 'projects',
      data: proj,
      context: { disableRevalidate: true },
      overrideAccess: true,
    })
  }

  // 5. SEED ALL 18 PAGES
  console.log('Seeding Pages...')
  const existingPages = await payload.find({ collection: 'pages', limit: 100, overrideAccess: true })
  for (const doc of existingPages.docs) {
    await payload.delete({ collection: 'pages', id: doc.id, context: { disableRevalidate: true }, overrideAccess: true })
  }

  // Helper to publish a page
  async function createPage(pageData: any) {
    await payload.create({
      collection: 'pages',
      data: {
        ...pageData,
        _status: 'published',
        publishedAt: new Date().toISOString(),
      },
      context: { disableRevalidate: true },
      overrideAccess: true,
    })
  }

  // PAGE 1: HOME (slug: 'home')
  await createPage({
    title: 'Home',
    slug: 'home',
    meta: {
      title: 'Quantum IT & Security | ICT, Cybersecurity & Solar Ethiopia',
      description:
        'Quantum IT & Security Solutions delivers enterprise software, networks, cybersecurity, cloud, solar and EV charging for organizations across Ethiopia. Book a consultation.',
    },
    hero: {
      type: 'highImpact',
      richText: createRichText(
        'Integrated Technology. Secured Infrastructure. Sustainable Power.',
        [
          'Quantum IT & Security Solutions PLC helps Ethiopian organizations digitize operations, defend critical systems and power their future, from one accountable technology partner.',
          'Enterprise software, networks, cybersecurity, cloud, solar and EV charging, designed around how your organization actually works.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/solutions',
            label: 'Explore Our Solutions',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Book an Expert Consultation',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'logoBanner',
        heading: 'Trusted by government institutions, financial organizations and enterprises across Ethiopia',
        displayType: 'customers',
      },
      {
        blockType: 'pillars',
        tagline: 'FOUR CAPABILITY PILLARS',
        heading: 'One Partner Across Your Entire Technology Environment',
        description:
          'Most organizations juggle separate vendors for software, networks, security and energy. Quantum brings them together under one team, one standard of delivery and one point of accountability.',
        pillars: [
          {
            title: 'Digital Business Solutions',
            description:
              'ERP, biometric attendance, e-invoicing, websites and digital marketing that automate operations and sharpen visibility.',
            icon: 'software',
            items: [
              { text: 'ERP Systems for Enterprises & SACCOs' },
              { text: 'Biometric Attendance & Workforce Management' },
              { text: 'Electronic Invoicing (MOR System Integrated)' },
              { text: 'Corporate Web Portals & Digital Marketing' },
            ],
            cta: {
              type: 'custom',
              url: '/solutions/software',
              label: 'Explore Digital Solutions',
            },
          },
          {
            title: 'Enterprise IT & Cybersecurity',
            description:
              'Resilient networks, data center and cloud infrastructure, protected by a security-first design approach.',
            icon: 'network',
            items: [
              { text: 'Enterprise LAN/WAN & Structured Cabling' },
              { text: 'Servers, Virtualization & High Availability' },
              { text: 'Private, Public & Hybrid Cloud Migration' },
              { text: 'Firewalls, Endpoint Security & CCTV Surveillance' },
            ],
            cta: {
              type: 'custom',
              url: '/solutions/enterprise-networks',
              label: 'Explore IT & Security',
            },
          },
          {
            title: 'Green & Smart Infrastructure',
            description:
              'Commercial solar, solar-powered ICT and EV charging that reduce energy costs and improve resilience.',
            icon: 'energy',
            items: [
              { text: 'Commercial, Hybrid & Off-Grid Solar Systems' },
              { text: 'Solar-Powered ICT & Office Infrastructure' },
              { text: 'AC & DC Fast EV Charging Stations' },
              { text: 'Fleet Charging Infrastructure & Load Management' },
            ],
            cta: {
              type: 'custom',
              url: '/solutions/solar-energy',
              label: 'Explore Energy Solutions',
            },
          },
          {
            title: 'Professional Development',
            description:
              'Oracle, Microsoft, cybersecurity and PMP training, plus an upcoming professional examination center.',
            icon: 'training',
            items: [
              { text: 'Oracle Database & Enterprise Systems' },
              { text: 'Microsoft Server, Cloud & Infrastructure' },
              { text: 'Cybersecurity Operations & Defense' },
              { text: 'PMP Certification Preparation & Exam Center' },
            ],
            cta: {
              type: 'custom',
              url: '/training',
              label: 'Explore Training',
            },
          },
        ],
      },
      {
        blockType: 'whyQuantum',
        tagline: 'WHY QUANTUM',
        heading: 'Why Organizations Choose Quantum',
        description: 'Delivering end-to-end technology capability with uncompromising engineering standards.',
        items: [
          {
            title: 'Integrated capability',
            description: 'Software, infrastructure, security and energy delivered as one coordinated solution.',
            icon: 'layers',
          },
          {
            title: 'Local expertise, global standards',
            description: 'Deep Ethiopian market knowledge applied through internationally recognized practices.',
            icon: 'globe',
          },
          {
            title: 'Security by design',
            description: 'Protection built into every solution from the first design decision, not added afterward.',
            icon: 'shield',
          },
          {
            title: 'Full lifecycle delivery',
            description: 'From assessment and design to implementation, training and ongoing support.',
            icon: 'lifecycle',
          },
        ],
      },
      {
        blockType: 'stats',
        items: [
          { label: 'Projects Delivered', value: '20+' },
          { label: 'Institutions Served', value: '30+' },
          { label: 'Years of Experience', value: '10+' },
        ],
      },
      {
        blockType: 'featuredProjects',
        tagline: 'FEATURED PROJECTS',
        heading: 'Proven in Complex Environments',
        description: 'Our portfolio spans government, financial institutions, enterprises and specialized technology environments across Ethiopia.',
        showCategoryFilter: true,
        featuredOnly: true,
        limit: 6,
        cta: {
          type: 'custom',
          url: '/projects',
          label: 'View All Projects',
          appearance: 'outline',
        },
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Ready to Modernize, Secure or Power Your Operations?',
          'Tell us your challenge. Our specialists will recommend the right approach, with no obligation.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Consultation',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: 'Request a Proposal',
              appearance: 'outline',
            },
          },
        ],
      },
    ],
  })

  // PAGE 2: SOLUTIONS HUB (/solutions)
  await createPage({
    title: 'Solutions Hub',
    slug: 'solutions',
    meta: {
      title: 'ICT & Technology Solutions in Ethiopia | Quantum IT & Security',
      description: "Explore Quantum's integrated solutions: business software, networks, cloud, cybersecurity, solar and EV charging for Ethiopian organizations.",
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Four Capability Pillars. One Accountable Partner.',
        [
          'Your software, network, security and energy systems should work as one. Quantum designs, delivers and supports them together.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Talk to a Solutions Expert',
            appearance: 'default',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'pillars',
        tagline: 'CAPABILITY ARCHITECTURE',
        heading: 'Integrated Systems for Resilient Enterprise',
        description: 'Discover how our four pillars interconnect to support every layer of modern business.',
        pillars: [
          {
            title: 'Digital Business Solutions',
            description: 'Software and digital services that automate operations, improve visibility and grow your reach.',
            icon: 'software',
            items: [
              { text: 'ERP Solutions (Finance, Procurement, HR, SACCO)' },
              { text: 'Biometric Attendance & Workforce Management' },
              { text: 'Electronic Invoicing (MOR System Integration)' },
              { text: 'Corporate Websites, Portals & Digital Marketing' },
            ],
            cta: {
              type: 'custom',
              url: '/solutions/software',
              label: 'Explore Digital Business',
            },
          },
          {
            title: 'Enterprise IT & Cybersecurity',
            description: 'Infrastructure and protection that keep your organization connected, available and secure.',
            icon: 'network',
            items: [
              { text: 'Enterprise Network Solutions (LAN/WAN/Wi-Fi)' },
              { text: 'System & Cloud (Servers, Virtualization, DR)' },
              { text: 'Cybersecurity Assessments & Hardening' },
              { text: 'CCTV Surveillance & Physical Security' },
            ],
            cta: {
              type: 'custom',
              url: '/solutions/enterprise-networks',
              label: 'Explore IT & Security',
            },
          },
          {
            title: 'Green & Smart Infrastructure',
            description: 'Reliable, sustainable energy for modern operations.',
            icon: 'energy',
            items: [
              { text: 'Commercial Solar & Hybrid Power Systems' },
              { text: 'Solar-Powered ICT Infrastructure' },
              { text: 'EV Charging Station Supply & Installation' },
              { text: 'Fleet Charging & Electrical Load Management' },
            ],
            cta: {
              type: 'custom',
              url: '/solutions/solar-energy',
              label: 'Explore Green Infrastructure',
            },
          },
          {
            title: 'Professional Development',
            description: 'People capability that makes technology succeed.',
            icon: 'training',
            items: [
              { text: 'Oracle Database & Enterprise Systems' },
              { text: 'Microsoft Server, Cloud & Infrastructure' },
              { text: 'Cybersecurity Fundamentals & Operations' },
              { text: 'PMP Preparation & Professional Exam Center' },
            ],
            cta: {
              type: 'custom',
              url: '/training',
              label: 'Explore Professional Training',
            },
          },
        ],
      },
      {
        blockType: 'whyQuantum',
        tagline: 'NOT SURE WHERE TO START?',
        heading: 'Start With Your Business Goal',
        description: 'Choose the challenge your organization is facing today:',
        items: [
          {
            title: '“We need to digitize our operations.”',
            description: 'Automate manual registers, finance and member services with our ERP, Biometric Attendance, and E-Invoicing platforms.',
            icon: 'innovation',
          },
          {
            title: '“We need a faster, safer, more resilient IT environment.”',
            description: 'Upgrade your LAN/WAN, servers, cloud backup and defend against ransomware and data breaches with our IT & Security team.',
            icon: 'shield',
          },
          {
            title: '“We need dependable, lower-cost power.”',
            description: 'Eliminate downtime and generator dependency with commercial solar and prepare for electric mobility with EV charging.',
            icon: 'sustainability',
          },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Not Sure Which Solution Fits?',
          'Describe your challenge and we will recommend the right approach.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Consultation',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 3: SOFTWARE SOLUTIONS (/solutions/software)
  await createPage({
    title: 'Software Solutions',
    slug: 'solutions/software',
    meta: {
      title: 'ERP & Biometric Attendance Software in Ethiopia | Quantum',
      description: 'ERP, biometric attendance and e-invoicing software for Ethiopian enterprises, SACCOs and institutions. Request a demo from Quantum IT & Security Solutions.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Business Software Built Around How You Operate',
        [
          'ERP, workforce management and e-invoicing platforms that replace manual processes with accurate, real-time visibility, built for Ethiopian organizations and their regulatory realities.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Request a Demo',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Talk to a Solutions Expert',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'serviceModules',
        sectionId: 'erp',
        badge: 'SUBCATEGORY 1 · ERP',
        title: 'Enterprise Resource Planning (ERP)',
        subtitle: 'One platform. Every critical function. Complete visibility.',
        description: 'Stop reconciling spreadsheets across departments. Our ERP unifies your operations on a single source of truth, with workflows and dashboards leadership can act on.',
        targetAudience: 'Built for: enterprises, SMEs, SACCOs and institutions with complex operations.',
        modules: [
          { title: 'Finance & Accounting', description: 'Accurate books, multi-currency ledger, faster fiscal closes' },
          { title: 'Procurement & Inventory', description: 'Control spend, supplier evaluation, live stock tracking' },
          { title: 'Sales & Operations', description: 'From quotation and order to fulfillment and delivery' },
          { title: 'HR & Payroll', description: 'Single employee record, Ethiopian tax deductions, error-free pay' },
          { title: 'Customer & Member Management', description: 'Specialized SACCO member accounts, savings, and loan operations' },
          { title: 'Reporting, BI & Dashboards', description: 'Executive decisions backed by real-time automated data' },
          { title: 'Workflow Automation', description: 'Multi-level approval chains that run seamlessly' },
        ],
        cta: {
          type: 'custom',
          url: '/request-consultation',
          label: 'Request an ERP Demo',
          appearance: 'default',
        },
      },
      {
        blockType: 'serviceModules',
        sectionId: 'biometric-attendance',
        badge: 'SUBCATEGORY 2 · BIOMETRIC ATTENDANCE',
        title: 'Biometric Attendance & Workforce Management',
        subtitle: 'Accurate attendance. Every branch. One dashboard.',
        description: 'Eliminate time theft, manual registers and payroll disputes with secure biometric verification managed centrally across single or multi-branch organizations.',
        proofPoint: 'Deployed across multiple Customs branch locations and Dashen Bank branches.',
        modules: [
          { title: 'Biometric Verification', description: 'Fingerprint and facial recognition for verified identity' },
          { title: 'Schedule & Shift Management', description: 'Flexible shifts, schedules, leave and overtime in one system' },
          { title: 'Direct Payroll Integration', description: 'Automated timesheets feeding HR and payroll calculations directly' },
          { title: 'Centralized Multi-Branch Reporting', description: 'Live attendance sync across all regional branch locations' },
        ],
        cta: {
          type: 'custom',
          url: '/request-consultation',
          label: 'Book a Biometric Demo',
          appearance: 'default',
        },
      },
      {
        blockType: 'serviceModules',
        sectionId: 'e-invoicing',
        badge: 'SUBCATEGORY 3 · E-INVOICING',
        title: 'Electronic Invoicing & Digital Tax Solutions',
        subtitle: 'Digital invoicing that keeps you compliant and in control.',
        description: 'Generate, manage and report invoices digitally, reducing manual effort and errors while supporting Ethiopian tax and digital-transaction requirements.',
        proofPoint: 'Fully integrated with Ministry of Revenues System (MOR).',
        modules: [
          { title: 'Digital Invoice Generation', description: 'Compliant digital invoice creation and centralized management' },
          { title: 'Automated Audit-Ready Records', description: 'Instant audit trail and tax authority reporting' },
          { title: 'System Integration', description: 'Connects directly with existing accounting software and ERPs' },
          { title: 'Error & Risk Reduction', description: 'Automates tax calculation, eliminating manual data-entry errors' },
        ],
        cta: {
          type: 'custom',
          url: '/request-consultation',
          label: 'Talk to Us About E-Invoicing',
          appearance: 'default',
        },
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Not Sure Which Solution Fits?',
          'Describe your process and we will recommend the right approach.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Consultation',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 4: WEB DEVELOPMENT & DIGITAL MARKETING (/solutions/web-and-digital-marketing)
  await createPage({
    title: 'Website Development & Digital Marketing',
    slug: 'solutions/web-and-digital-marketing',
    meta: {
      title: 'Website Development & Digital Marketing in Ethiopia | Quantum',
      description: 'Corporate websites, portals, e-commerce and digital marketing that turn visitors into customers. Start your website project with Quantum IT & Security Solutions.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Build Your Digital Presence. Grow Your Business.',
        [
          'Your website is often the first interaction customers have with your organization. We build secure, responsive websites and run digital campaigns that communicate your brand and turn visitors into customers.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Start Your Website Project',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Request a Quote',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'serviceModules',
        sectionId: 'web-dev',
        badge: 'SUBCATEGORY 1 · WEB DEVELOPMENT',
        title: 'Websites and Web Applications That Perform',
        subtitle: 'Engineered for speed, security, and exceptional user experience.',
        modules: [
          { title: 'Corporate Websites', description: 'A credible, modern brand presence that builds trust' },
          { title: 'Customer & Business Portals', description: 'Secure self-service access to accounts, services and workflows' },
          { title: 'E-Commerce Platforms', description: 'Sell online with confidence, local payment gateways and inventory sync' },
          { title: 'Content Management Systems', description: 'Update text, imagery and documents without waiting on developers' },
          { title: 'Custom Web Applications', description: 'Bespoke web tools engineered around your exact operations' },
          { title: 'Maintenance & Security Support', description: 'Fast, secure, patched and continually optimized' },
        ],
      },
      {
        blockType: 'serviceModules',
        sectionId: 'digital-marketing',
        badge: 'SUBCATEGORY 2 · DIGITAL MARKETING',
        title: 'Marketing That Brings the Right Customers to You',
        subtitle: 'Targeted campaigns backed by analytics and strategic messaging.',
        modules: [
          { title: 'Search Engine Optimization (SEO)', description: 'Be found on Google when customers search in Ethiopia and beyond' },
          { title: 'Social Media Marketing', description: 'Build an engaged professional audience across relevant channels' },
          { title: 'Content Strategy', description: 'Authoritative messaging that earns client confidence and industry trust' },
          { title: 'Digital Advertising', description: 'Reach qualified enterprise buyers with precision targeting' },
          { title: 'Brand Positioning', description: 'A clear, distinctive market identity that stands out from competitors' },
          { title: 'Lead Generation & Analytics', description: 'Turn interest into active sales conversations and measure ROI' },
        ],
      },
      {
        blockType: 'processSteps',
        tagline: 'HOW IT WORKS',
        heading: 'From Visibility to Qualified Leads',
        description: 'Our proven three-stage approach to digital growth.',
        steps: [
          { stepNumber: '01', title: 'Build', description: 'A fast, secure, mobile-ready website designed around your brand and goals.' },
          { stepNumber: '02', title: 'Attract', description: 'SEO, content and campaigns that put you in front of the right audience.' },
          { stepNumber: '03', title: 'Measure', description: 'Analytics that show what works so you can invest in tangible business results.' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Ready to Strengthen Your Online Presence?',
          'Tell us about your goals and we will outline the right approach.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Build Your Digital Presence',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 5: ENTERPRISE NETWORK SOLUTIONS (/solutions/enterprise-networks)
  await createPage({
    title: 'Enterprise Network Solutions',
    slug: 'solutions/enterprise-networks',
    meta: {
      title: 'Enterprise Network Solutions Ethiopia | LAN, WAN & Wi-Fi',
      description: 'Design, implementation and support of enterprise LAN/WAN, wireless, fiber and unified communications in Ethiopia. Request a network assessment from Quantum.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Enterprise Networks Built for Performance, Availability and Security',
        [
          'A reliable network is the foundation of every modern operation. We design, implement and support networks that stay fast, scalable and secure as your organization grows.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Request a Network Assessment',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Talk to a Network Engineer',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'serviceModules',
        badge: 'WHAT WE DELIVER',
        title: 'Complete Network Capability',
        subtitle: 'From physical cabling to intelligent traffic routing and unified communications.',
        proofPoint: 'Featured Experience: HOPR Unified Communication Project deployed for nationwide collaboration.',
        modules: [
          { title: 'Enterprise LAN/WAN', description: 'High-speed local and wide-area networks connecting all branches' },
          { title: 'Campus Networks', description: 'Multi-building connectivity with high-capacity backbone links' },
          { title: 'Data Center Networking', description: 'Low-latency switching fabric engineered for high-availability clusters' },
          { title: 'Structured Cabling & Fiber', description: 'Certified copper and fiber optic cabling infrastructure' },
          { title: 'Enterprise Wireless (Wi-Fi 6/6E)', description: 'Seamless coverage, guest isolation and high-density performance' },
          { title: 'Unified Communications', description: 'VoIP, IP PBX, video conferencing and collaboration platforms' },
          { title: 'Network Security & Firewalls', description: 'Perimeter protection, intrusion detection and encrypted VPN tunnels' },
          { title: '24/7 Network Monitoring', description: 'Proactive fault detection, traffic optimization and uptime management' },
        ],
      },
      {
        blockType: 'processSteps',
        tagline: 'OUR APPROACH',
        heading: 'The Network Lifecycle',
        description: 'From initial audit to ongoing SLA support, one team stays accountable at every stage.',
        steps: [
          { stepNumber: '01', title: 'Assess', description: 'Audit existing throughput, bottlenecks, physical plant and security risks.' },
          { stepNumber: '02', title: 'Design', description: 'Engineer High-Level Design (HLD) and Low-Level Design (LLD) blueprints.' },
          { stepNumber: '03', title: 'Implement', description: 'Deploy cabling, active switches, routers and unified communication gear.' },
          { stepNumber: '04', title: 'Secure & Monitor', description: 'Apply firewall policies, segment VLANs and configure proactive monitoring.' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Is Your Network Ready for Growth?',
          'Start with an assessment. We will identify risks, bottlenecks and the fastest route to improvement.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Network Assessment',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 6: SYSTEM & CLOUD SOLUTIONS (/solutions/systems-and-cloud)
  await createPage({
    title: 'System & Cloud Solutions',
    slug: 'solutions/systems-and-cloud',
    meta: {
      title: 'Cloud & Data Center Infrastructure in Ethiopia | Quantum',
      description: "Server infrastructure, virtualization, private, public and hybrid cloud, backup and disaster recovery for Ethiopian organizations. Talk to Quantum's experts.",
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Modern Infrastructure. Flexible, Resilient Operations.',
        [
          'Modernize your IT environment with scalable computing that keeps your business available, protected and ready to grow.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Plan Your Infrastructure',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Talk to a Cloud Specialist',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'serviceModules',
        badge: 'WHAT WE DELIVER',
        title: 'Infrastructure Built for Availability',
        subtitle: 'Compute, storage and cloud architecture tailored to your operational realities.',
        proofPoint: 'Featured Experience: High-reliability server & infrastructure deployments for Dashen Bank.',
        modules: [
          { title: 'Server Infrastructure', description: 'Rack and blade servers sized for high performance and redundancy' },
          { title: 'Enterprise Virtualization', description: 'VMware and Hyper-V architectures maximizing hardware utilization' },
          { title: 'SAN/NAS Storage Solutions', description: 'Scalable data arrays with snapshots, deduplication and tiering' },
          { title: 'High Availability Clusters', description: 'Fault-tolerant configurations eliminating single points of failure' },
          { title: 'Private & Hybrid Cloud', description: 'On-premise control combined with cloud elasticity' },
          { title: 'Backup & Disaster Recovery', description: 'RTO and RPO-driven data protection protecting critical records' },
        ],
      },
      {
        blockType: 'whyQuantum',
        tagline: 'CHOOSING THE RIGHT MODEL',
        heading: 'Private, Public or Hybrid Cloud?',
        description: 'We assess your applications, regulatory compliance and budget to deploy the optimal architecture:',
        items: [
          {
            title: 'Private Cloud',
            description: 'Maximum control, data sovereignty and regulatory compliance for sensitive financial and governmental workloads.',
            icon: 'shield',
          },
          {
            title: 'Public Cloud',
            description: 'Rapid scalability, zero hardware capital expenditure and flexible global capacity for variable demand.',
            icon: 'globe',
          },
          {
            title: 'Hybrid Cloud',
            description: 'The right workload in the right place: sensitive core records on-premise, web portals in the cloud, managed as one.',
            icon: 'layers',
          },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Protect Uptime. Prepare for Growth.',
          'Speak with our senior cloud architect to evaluate your infrastructure today.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request an Infrastructure Review',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 7: CYBERSECURITY SOLUTIONS (/solutions/cybersecurity)
  await createPage({
    title: 'Cybersecurity Solutions',
    slug: 'solutions/cybersecurity',
    meta: {
      title: 'Cybersecurity Solutions in Ethiopia | Quantum IT & Security',
      description: 'Cybersecurity assessment, firewalls, endpoint security, identity management and monitoring for Ethiopian organizations. Request a security assessment.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Protect What Matters Most',
        [
          'Cyber threats keep evolving. Quantum secures your people, systems, networks, applications and data with practical controls built around your business.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Request a Security Assessment',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Talk to a Security Expert',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'serviceModules',
        badge: 'WHAT WE DELIVER',
        title: 'Comprehensive Security Services',
        subtitle: 'Proactive defense across physical, network, endpoint, and human layers.',
        proofPoint: 'Physical Security Proof Point: ICWC CCTV Project - 56 Cameras installed, 2 NVR, 10 PoE switches.',
        modules: [
          { title: 'Cybersecurity Assessment', description: 'In-depth security posture review and vulnerability assessment' },
          { title: 'Next-Gen Firewalls (NGFW)', description: 'Application-layer filtering, deep packet inspection and intrusion defense' },
          { title: 'Endpoint Detection & Response (EDR)', description: 'Continuous host monitoring and instant malware isolation' },
          { title: 'Identity & Access Management (IAM)', description: 'Multi-factor authentication (MFA) and least-privilege access policies' },
          { title: 'Data Protection & Encryption', description: 'Safeguard sensitive business data at rest and in transit' },
          { title: 'Security Awareness Training', description: 'Turn employees into your strongest defensive line against phishing' },
        ],
      },
      {
        blockType: 'processSteps',
        tagline: 'OUR SECURITY FRAMEWORK',
        heading: 'Five-Stage Defense Lifecycle',
        description: 'Aligned with international cybersecurity standards to ensure robust operational resilience.',
        steps: [
          { stepNumber: '01', title: 'Identify', description: 'Catalog critical data assets, risk factors and vulnerability exposures.' },
          { stepNumber: '02', title: 'Protect', description: 'Deploy firewalls, hardening policies, encryption and access controls.' },
          { stepNumber: '03', title: 'Detect', description: 'Continuous log analysis and monitoring to spot anomalies early.' },
          { stepNumber: '04', title: 'Respond & Recover', description: 'Rapid containment, eradication and automated data restoration.' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Know Your Risk Before an Attacker Does',
          'Request an independent security assessment from Quantum specialists.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Security Assessment',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 8: SOLAR ENERGY SOLUTIONS (/solutions/solar-energy)
  await createPage({
    title: 'Solar Energy Solutions',
    slug: 'solutions/solar-energy',
    meta: {
      title: 'Commercial Solar Systems in Ethiopia | Hybrid & Off-Grid',
      description: 'Commercial, hybrid and off-grid solar systems, solar backup and solar-powered ICT in Ethiopia. Request a solar assessment from Quantum IT & Security.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Reliable Clean Energy for Business, Institutions and Infrastructure',
        [
          'Technology transformation requires dependable power. Quantum designs and installs solar systems that cut energy costs and keep critical operations running.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Request a Solar Assessment',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Talk to an Energy Expert',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'whyQuantum',
        tagline: 'WHY SOLAR',
        heading: 'Why Invest in Solar Energy?',
        description: 'Dependable, cost-effective power engineered for African enterprise realities.',
        items: [
          {
            title: 'Reduce Energy Costs',
            description: 'Substantially lower long-term spend on grid electricity and costly diesel generator fuel.',
            icon: 'innovation',
          },
          {
            title: 'Improve Energy Resilience',
            description: 'Keep offices, data centers, facilities and ICT systems operating continuously through grid outages.',
            icon: 'shield',
          },
          {
            title: 'Support Sustainability',
            description: 'Clean, renewable power generation that meets corporate ESG and sustainability milestones.',
            icon: 'sustainability',
          },
        ],
      },
      {
        blockType: 'serviceModules',
        badge: 'WHAT WE DELIVER',
        title: 'Complete Solar Capability',
        subtitle: 'ICT and Renewable Energy, Engineered Together.',
        description: 'Few providers combine deep ICT infrastructure expertise with renewable energy engineering. Quantum delivers both as one unified solution.',
        modules: [
          { title: 'Commercial Solar Systems', description: 'Rooftop and ground-mount arrays sized for offices and factories' },
          { title: 'Hybrid Solar Systems', description: 'Intelligent synchronization between solar, battery storage and grid' },
          { title: 'Off-Grid Solar Systems', description: '100% self-sufficient energy setups for remote branches and facilities' },
          { title: 'Solar-Powered ICT Infrastructure', description: 'Zero-downtime clean power for telecommunications and servers' },
          { title: 'Solar-Powered EV Charging', description: 'Direct clean solar generation for electric vehicle fleets' },
          { title: 'Assessment & Engineering', description: 'Load profiling, system sizing, installation and ongoing maintenance' },
        ],
      },
      {
        blockType: 'processSteps',
        tagline: 'THE PROCESS',
        heading: 'From Solar Assessment to Live Generation',
        description: 'Predictable, certified solar installation.',
        steps: [
          { stepNumber: '01', title: 'Assess', description: 'Audit electrical consumption, peak loads and roof/ground space.' },
          { stepNumber: '02', title: 'Design', description: 'Calculate solar PV capacity, inverter specifications and battery storage.' },
          { stepNumber: '03', title: 'Install', description: 'Mount panels, install certified inverters and safety switchgear.' },
          { stepNumber: '04', title: 'Maintain', description: 'Ongoing performance telemetry, panel cleaning and battery health checks.' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'See What Solar Could Save Your Organization',
          'Contact our energy engineers for a preliminary solar sizing and ROI calculation.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Solar Assessment',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 9: EV CHARGING (/solutions/ev-charging)
  await createPage({
    title: 'EV Charging Supply & Installation',
    slug: 'solutions/ev-charging',
    meta: {
      title: 'EV Charging Station Supply & Installation Ethiopia | Quantum',
      description: 'EV charger supply, AC and DC fast charging, fleet charging and installation in Ethiopia. Plan your charging infrastructure with Quantum.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        "Powering Ethiopia's Electric Mobility Future",
        [
          'Quantum supplies, installs and integrates EV charging infrastructure for organizations moving to electric mobility.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Plan Your Charging Infrastructure',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Talk to an EV Specialist',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'serviceModules',
        badge: 'WHAT WE DELIVER',
        title: 'EV Charging Solutions',
        subtitle: 'Hardware, installation, load management and sustainable power integration.',
        proofPoint: 'Featured Experience: Ethiopian Electric Utility (EEU) - 24 EV chargers supplied and installed at Kotebe site.',
        modules: [
          { title: 'AC Charging Stations', description: 'Reliable level-2 charging for office parking, hotels and commercial hubs' },
          { title: 'DC Fast Charging', description: 'High-power rapid charging for transit corridors, fleets and commercial hubs' },
          { title: 'Fleet Charging Solutions', description: 'Dedicated charging depots for corporate and public utility EV fleets' },
          { title: 'Electrical Infrastructure', description: 'Substation, transformer, cable and electrical panel upgrades' },
          { title: 'Smart Load Management', description: 'Dynamic power balancing to protect your building grid from peak surges' },
          { title: 'Solar-Powered EV Integration', description: 'Charge vehicles directly with clean solar energy for zero-emission driving' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Ready to Electrify Your Fleet or Facility?',
          'Discuss charging capacity, electrical requirements and timelines with our EV team.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request an EV Consultation',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 10: PROFESSIONAL TRAINING (/training)
  await createPage({
    title: 'Professional Training',
    slug: 'training',
    meta: {
      title: 'IT & Project Management Training in Addis Ababa | Quantum',
      description: 'Professional training in Oracle, Microsoft, cybersecurity and project management, plus customized corporate programs, from Quantum IT & Security Solutions.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Build Skills. Advance Careers. Strengthen Organizations.',
        [
          'Technology is only as effective as the people who use and manage it. Our programs build practical technical and management capability for IT professionals, project managers and organizations.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'View Training Programs',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Request a Corporate Program',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'pillars',
        tagline: 'TRAINING TRACKS',
        heading: 'Choose Your Professional Track',
        description: 'Comprehensive curriculum blending theoretical knowledge with hands-on enterprise lab exercises.',
        pillars: [
          {
            title: 'Oracle Technologies',
            description: 'Master enterprise relational databases and mission-critical application management.',
            icon: 'software',
            items: [
              { text: 'Oracle Database Administration (DBA)' },
              { text: 'SQL & PL/SQL Fundamentals' },
              { text: 'Oracle Enterprise Systems & High Availability' },
            ],
            cta: { type: 'custom', url: '/request-consultation', label: 'Inquire Oracle Track' },
          },
          {
            title: 'Microsoft Technologies',
            description: 'Server infrastructure, cloud computing with Azure, and enterprise identity management.',
            icon: 'network',
            items: [
              { text: 'Windows Server & Active Directory' },
              { text: 'Microsoft Azure Cloud Administration' },
              { text: 'Microsoft 365 Enterprise Security' },
            ],
            cta: { type: 'custom', url: '/request-consultation', label: 'Inquire Microsoft Track' },
          },
          {
            title: 'Cybersecurity Defense',
            description: 'Practical security engineering from baseline defense to real-time incident handling.',
            icon: 'security',
            items: [
              { text: 'Cybersecurity Fundamentals & Threat Landscapes' },
              { text: 'Network Defense, Firewalls & VPN' },
              { text: 'Security Operations & Incident Response' },
            ],
            cta: { type: 'custom', url: '/request-consultation', label: 'Inquire Security Track' },
          },
          {
            title: 'Project Management',
            description: 'Master globally recognized frameworks to deliver complex technical projects on time and budget.',
            icon: 'training',
            items: [
              { text: 'Project Management Fundamentals' },
              { text: 'Project Management Professional (PMP) Exam Prep' },
              { text: 'Agile & Hybrid Project Management Methodologies' },
            ],
            cta: { type: 'custom', url: '/request-consultation', label: 'Inquire PMP Track' },
          },
        ],
      },
      {
        blockType: 'whyQuantum',
        tagline: 'CORPORATE WORKFORCE EMPOWERMENT',
        heading: 'Training Tailored to Your Organization',
        description: 'We design corporate upskilling programs around your exact technology environment, business processes and team schedules.',
        items: [
          {
            title: 'Customized Content',
            description: 'Training delivered on the specific ERP, networks, or cloud setups your teams manage every day.',
            icon: 'innovation',
          },
          {
            title: 'Hands-On Labs',
            description: 'Practical scenarios simulating real-world system failures, maintenance and security challenges.',
            icon: 'excellence',
          },
          {
            title: 'Flexible Scheduling',
            description: 'On-site corporate delivery or sessions scheduled around your peak operational hours.',
            icon: 'lifecycle',
          },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Ready to Certify Your Skills?',
          'Pair your training with our upcoming Professional Exam Center in Addis Ababa.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/exam-center',
              label: 'Exam Center Information',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 11: PROFESSIONAL EXAM CENTER (/exam-center)
  await createPage({
    title: 'Professional Exam Center',
    slug: 'exam-center',
    meta: {
      title: 'Professional Certification Exam Center in Ethiopia | Quantum',
      description: 'Quantum is developing a secure professional examination center for PMP, cybersecurity, Microsoft and Oracle certifications in Ethiopia. Register your interest.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Prepare. Certify. Advance.',
        [
          'Quantum is developing a professional examination center to make globally recognized certifications more accessible to Ethiopian technology and business professionals.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Register Your Interest',
            appearance: 'default',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'examAreas',
        tagline: 'PLANNED EXAMINATION AREAS',
        heading: 'Globally Recognized Certification Testing',
        description: 'Our objective is to open the door to world-class certification for Ethiopian professionals while maintaining the integrity and strict proctoring standards that exams demand.',
        areas: [
          { title: 'Project Management Professional (PMP)', description: 'Globally acknowledged benchmark for experienced project managers.', badge: 'Upcoming' },
          { title: 'Cybersecurity Certifications', description: 'Foundational and advanced credentials for information security specialists.', badge: 'Planned' },
          { title: 'Microsoft Technical Certifications', description: 'Azure, Windows Server, and enterprise cloud administrator testing.', badge: 'Upcoming' },
          { title: 'Oracle Certifications', description: 'Database Administrator and Java developer certification programs.', badge: 'Planned' },
          { title: 'Vendor & Industry Examinations', description: 'Expanding to additional specialized IT and managerial testing partnerships.', badge: 'Planned' },
        ],
        commitmentHeading: 'A Professional, Secure Testing Environment',
        commitmentText: 'Equipped with dedicated testing workstations, high-speed redundant connectivity, biometric verification, and strict proctoring guidelines to ensure total examination integrity.',
        cta: {
          type: 'custom',
          url: '/request-consultation',
          label: 'Register Your Interest',
          appearance: 'default',
        },
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Be First to Know When We Open',
          'Sign up to receive early notifications on exam schedules, booking dates, and preparation workshops.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Register Your Interest',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 12: FEATURED PROJECTS (/projects)
  await createPage({
    title: 'Featured Projects',
    slug: 'projects',
    meta: {
      title: 'Featured ICT Projects in Ethiopia | Quantum IT & Security',
      description: "See Quantum's delivered projects for government, financial and enterprise clients: ERP, biometric attendance, CCTV, unified communications and EV charging.",
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'Technology Delivered. Business Enabled.',
        [
          'Our portfolio spans government institutions, financial organizations, enterprises and specialized technology environments across Ethiopia.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Request a Proposal',
            appearance: 'default',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'featuredProjects',
        tagline: 'PROJECT PORTFOLIO',
        heading: 'Proven in Complex Environments',
        description: 'Explore our delivered solutions by sector or technology capability:',
        showCategoryFilter: true,
        featuredOnly: false,
        limit: 20,
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Planning a Similar Project?',
          "Let's discuss what we can deliver for your organization.",
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Proposal',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: 'Request a Consultation',
              appearance: 'outline',
            },
          },
        ],
      },
    ],
  })

  // PAGE 13: ABOUT US (/about)
  await createPage({
    title: 'About Us',
    slug: 'about',
    meta: {
      title: 'About Quantum IT & Security Solutions | ICT Company Ethiopia',
      description: 'Quantum IT & Security Solutions PLC is an Ethiopian technology company delivering software, infrastructure, cybersecurity, training and green energy solutions.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        "Practical Technology for Ethiopia's Digital Future",
        [
          'We are an Ethiopian technology company delivering practical, scalable and integrated solutions that respond to local needs and meet global standards.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/solutions',
            label: 'Meet Our Capabilities',
            appearance: 'default',
          },
        },
        {
          link: {
            type: 'custom',
            url: '/contact',
            label: 'Contact Us',
            appearance: 'outline',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'whyQuantum',
        tagline: 'WHO WE ARE',
        heading: 'Delivering Comprehensive Technology Under One Roof',
        description: 'Quantum IT & Security Solutions PLC combines software development, ICT infrastructure, cybersecurity, cloud technologies, digital services, professional training and green energy solutions.',
        items: [
          {
            title: 'Our Vision',
            description: 'To become a trusted technology and digital transformation partner in Ethiopia and the East African region.',
            icon: 'globe',
          },
          {
            title: 'Our Mission',
            description: 'To deliver innovative, secure and sustainable technology solutions that help organizations improve productivity, strengthen resilience and achieve sustainable growth.',
            icon: 'excellence',
          },
          {
            title: 'Headquarters & Presence',
            description: 'Headquartered in Addis Ababa, Ethiopia, serving clients nationwide with dedicated technical specialists.',
            icon: 'layers',
          },
        ],
      },
      {
        blockType: 'stats',
        items: [
          { label: 'Projects Delivered', value: '20+' },
          { label: 'Institutions Served', value: '30+' },
          { label: 'Years of Experience', value: '10+' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          "Let's Build Something Together",
          'Connect with our leadership and senior engineering team to discuss your technology initiatives.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Consultation',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 14: OUR VALUES (/about/values)
  await createPage({
    title: 'Our Values',
    slug: 'about/values',
    meta: {
      title: 'Our Core Values | Quantum IT & Security Solutions',
      description: 'Innovation, customer success, integrity, security, excellence and sustainability: the principles that guide every Quantum project.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'The Principles Behind Every Project',
        [
          'Six core values shape how we advise, build, secure, and support every solution we deliver.',
        ],
      ),
    },
    layout: [
      {
        blockType: 'whyQuantum',
        tagline: 'CORE PRINCIPLES',
        heading: 'Values That Guide Our Delivery',
        description: 'Our commitment to clients, partners, and the Ethiopian technology ecosystem.',
        items: [
          {
            title: 'Innovation',
            description: 'We continuously explore new technologies and better ways to solve complex business problems.',
            icon: 'innovation',
          },
          {
            title: 'Customer Success',
            description: 'We measure ourselves by the practical, measurable value our solutions create for your organization.',
            icon: 'globe',
          },
          {
            title: 'Integrity',
            description: 'We work with transparency, accountability, and the highest standards of professional ethics.',
            icon: 'integrity',
          },
          {
            title: 'Security',
            description: 'Security is not an afterthought; it is built into the architecture and delivery of every single solution.',
            icon: 'shield',
          },
          {
            title: 'Excellence',
            description: 'We pursue technical quality across consulting, implementation, training, and ongoing SLA support.',
            icon: 'excellence',
          },
          {
            title: 'Sustainability',
            description: 'We promote green technologies and efficient architectures that make operations resilient and sustainable.',
            icon: 'sustainability',
          },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Work With a Partner Who Shares Your Standards',
          'Let’s collaborate to build secure, sustainable technology for your organization.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/contact',
              label: 'Contact Us',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 15: WHY QUANTUM (/why-quantum)
  await createPage({
    title: 'Why Quantum',
    slug: 'why-quantum',
    meta: {
      title: 'Why Choose Quantum | Integrated ICT Partner in Ethiopia',
      description: 'One partner for software, infrastructure, security, digital, energy and training. See why organizations choose Quantum IT & Security Solutions.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'One Partner. Multiple Technology Capabilities.',
        [
          'Organizations need a technology partner who understands the entire environment, not just one product.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Experience the Integrated Difference',
            appearance: 'default',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'whyQuantum',
        tagline: 'SIX CAPABILITIES',
        heading: 'Complete Capabilities Under One Roof',
        description: 'Coordinated technology engineering that eliminates finger-pointing between multiple vendors.',
        items: [
          { title: 'Software', description: 'Business applications and ERP platforms designed around your exact workflows.', icon: 'innovation' },
          { title: 'Infrastructure', description: 'Enterprise networks, physical structured cabling, systems, data centers and cloud.', icon: 'layers' },
          { title: 'Security', description: 'Comprehensive cybersecurity defense, perimeter firewalls and physical CCTV surveillance.', icon: 'shield' },
          { title: 'Digital', description: 'Corporate websites, secure self-service portals and targeted digital marketing campaigns.', icon: 'globe' },
          { title: 'Energy', description: 'Commercial solar power generation and electrical vehicle (EV) charging stations.', icon: 'sustainability' },
          { title: 'People', description: 'Professional technical training, workforce development and certification testing services.', icon: 'excellence' },
        ],
      },
      {
        blockType: 'whyQuantum',
        tagline: 'WHAT THIS MEANS FOR YOU',
        heading: 'Why It Matters',
        description: 'Tangible benefits for leadership, IT departments and financial operations.',
        items: [
          { title: 'One Accountable Team', description: 'Single point of contact instead of having to coordinate multiple conflicting vendors.', icon: 'integrity' },
          { title: 'Systems Designed to Work Together', description: 'Coordinated architecture across software, network, cybersecurity and electrical power.', icon: 'layers' },
          { title: 'Clear Path From Plan to Support', description: 'Seamless continuity from initial assessment to installation, training and SLA maintenance.', icon: 'lifecycle' },
          { title: 'Local Knowledge, Global Standards', description: 'Deep Ethiopian regulatory understanding backed by international engineering best practices.', icon: 'globe' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Experience the Integrated Difference',
          'Schedule an exploratory session with our technical specialists.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Consultation',
              appearance: 'default',
            },
          },
          {
            link: {
              type: 'custom',
              url: '/projects',
              label: 'View Our Projects',
              appearance: 'outline',
            },
          },
        ],
      },
    ],
  })

  // PAGE 16: OUR DELIVERY APPROACH (/delivery-approach)
  await createPage({
    title: 'Our Delivery Approach',
    slug: 'delivery-approach',
    meta: {
      title: 'Our Delivery Approach | Quantum IT & Security Solutions',
      description: 'A seven-step method from business need to working solution: understand, assess, design, implement, train, support and improve.',
    },
    hero: {
      type: 'mediumImpact',
      richText: createRichText(
        'From Business Need to Working Solution',
        [
          'A structured seven-step approach that keeps every project predictable, transparent and focused on results.',
        ],
      ),
      links: [
        {
          link: {
            type: 'custom',
            url: '/request-consultation',
            label: 'Start With Step One',
            appearance: 'default',
          },
        },
      ],
    },
    layout: [
      {
        blockType: 'processSteps',
        tagline: 'THE SEVEN STEPS',
        heading: 'Our 7-Step Delivery Methodology',
        description: 'Disciplined project execution ensuring zero surprises and complete alignment with your operational goals.',
        steps: [
          { stepNumber: '01', title: 'Understand', description: 'We start with your business objectives, operational challenges and technical environment.' },
          { stepNumber: '02', title: 'Assess', description: 'We audit your existing infrastructure, processes, data systems and regulatory requirements.' },
          { stepNumber: '03', title: 'Design', description: 'Our specialists develop a practical technical architecture and detailed implementation roadmap.' },
          { stepNumber: '04', title: 'Implement', description: 'We deploy using structured project management, quality assurance and security hardening.' },
          { stepNumber: '05', title: 'Train', description: 'We conduct rigorous knowledge transfer to your technical and operational staff.' },
          { stepNumber: '06', title: 'Support', description: 'We provide ongoing technical support, proactive monitoring and preventative maintenance.' },
          { stepNumber: '07', title: 'Improve', description: 'We keep identifying opportunities to improve system performance, security and business ROI.' },
        ],
      },
      {
        blockType: 'cta',
        richText: createParagraphRichText(
          'Start With Step One',
          'Tell us about your objectives and we will take it from there.',
        ),
        links: [
          {
            link: {
              type: 'custom',
              url: '/request-consultation',
              label: 'Request a Consultation',
              appearance: 'default',
            },
          },
        ],
      },
    ],
  })

  // PAGE 17: CONTACT US (/contact)
  await createPage({
    title: 'Contact Us',
    slug: 'contact',
    meta: {
      title: 'Contact Quantum IT & Security Solutions | Addis Ababa',
      description: 'Contact Quantum IT & Security Solutions in Addis Ababa for software, networks, cybersecurity, solar and EV charging enquiries.',
    },
    hero: {
      type: 'lowImpact',
      richText: createRichText(
        "Let's Talk About Your Next Technology Project",
        [
          'Tell us about your challenge. Our team will help you identify the right technology approach.',
        ],
      ),
    },
    layout: [
      {
        blockType: 'consultationForm',
        formMode: 'contact',
        tagline: 'GET IN TOUCH',
        heading: 'Send Us a Message',
        description: 'Our senior consultants will review your enquiry and respond promptly within 24 hours.',
        showNextSteps: false,
      },
    ],
  })

  // PAGE 18: REQUEST A CONSULTATION (/request-consultation)
  await createPage({
    title: 'Request a Consultation',
    slug: 'request-consultation',
    meta: {
      title: 'Request a Consultation, Proposal or Demo | Quantum IT & Security',
      description: 'Request a consultation, proposal or product demo from Quantum IT & Security Solutions. Tell us your challenge and we will recommend the right approach.',
    },
    hero: {
      type: 'lowImpact',
      richText: createRichText(
        "Tell Us Your Challenge. We'll Recommend the Right Approach.",
        [
          'Choose how you would like to start: book a consultation, request a detailed commercial proposal, or schedule a software demo.',
        ],
      ),
    },
    layout: [
      {
        blockType: 'consultationForm',
        formMode: 'consultation',
        tagline: 'STRUCTURED ENGAGEMENT',
        heading: 'Request a Consultation, Proposal or Demo',
        description: 'Select your preferred engagement model below and share your project requirements.',
        showNextSteps: true,
      },
    ],
  })

  // PAGE 19: PRIVACY POLICY (/privacy-policy)
  await createPage({
    title: 'Privacy Policy',
    slug: 'privacy-policy',
    meta: {
      title: 'Privacy Policy | Quantum IT & Security Solutions PLC',
      description: 'Privacy Policy for Quantum IT & Security Solutions PLC regarding client data collection, usage, and security practices.',
    },
    hero: {
      type: 'lowImpact',
      richText: createRichText(
        'Privacy Policy',
        ['How Quantum IT & Security Solutions PLC protects and handles your organizational information.'],
      ),
    },
    layout: [
      {
        blockType: 'whyQuantum',
        tagline: 'DATA PRIVACY',
        heading: 'Our Data Privacy Commitments',
        description: 'At Quantum IT & Security Solutions PLC, we prioritize the confidentiality, integrity, and security of all client information.',
        items: [
          {
            title: 'Information Collection',
            description: 'We only collect contact and project details voluntarily provided by you through our consultation and contact forms.',
            icon: 'shield',
          },
          {
            title: 'Data Utilization',
            description: 'Information collected is used solely to respond to inquiries, evaluate project requirements, and provide professional technical services.',
            icon: 'layers',
          },
          {
            title: 'Confidentiality & Non-Disclosure',
            description: 'We do not sell, rent, or lease client data to third parties. All client systems and data interactions are governed by non-disclosure agreements.',
            icon: 'integrity',
          },
        ],
      },
    ],
  })

  // PAGE 20: TERMS OF USE (/terms-of-use)
  await createPage({
    title: 'Terms of Use',
    slug: 'terms-of-use',
    meta: {
      title: 'Terms of Use | Quantum IT & Security Solutions PLC',
      description: 'Terms and conditions governing the use of the Quantum IT & Security Solutions PLC website and digital services.',
    },
    hero: {
      type: 'lowImpact',
      richText: createRichText(
        'Terms of Use',
        ['Conditions governing your access and usage of this website.'],
      ),
    },
    layout: [
      {
        blockType: 'whyQuantum',
        tagline: 'LEGAL TERMS',
        heading: 'Terms & Conditions of Service',
        description: 'Please review our conditions regarding website content, intellectual property, and service engagements.',
        items: [
          {
            title: 'Intellectual Property',
            description: 'All trademarks, logos, content, code and collateral displayed on this website are the property of Quantum IT & Security Solutions PLC.',
            icon: 'excellence',
          },
          {
            title: 'Service Engagements',
            description: 'Formal proposals, SLAs, and technical implementations are governed by separate, signed master service agreements.',
            icon: 'integrity',
          },
          {
            title: 'Disclaimer & Governing Law',
            description: 'This website is governed by the laws and regulations of the Federal Democratic Republic of Ethiopia.',
            icon: 'globe',
          },
        ],
      },
    ],
  })

  console.log('Seeded all 20 pages successfully!')
  console.log('--- Seeding Complete! ---')
  process.exit(0)
}

seed().catch((err) => {
  console.error('Seeding error:', err)
  process.exit(1)
})
