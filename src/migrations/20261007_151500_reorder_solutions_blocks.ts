import { MigrateUpArgs, MigrateDownArgs } from '@payloadcms/db-vercel-postgres'

export async function up({ payload }: MigrateUpArgs): Promise<void> {
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'solutions' } },
    limit: 1,
    depth: 0,
  })

  if (result.docs.length > 0) {
    const page = result.docs[0]
    const layout = [...(page.layout || [])]

    const whyQuantumIdx = layout.findIndex((b: any) => b.blockType === 'whyQuantum')
    const pillarsIdx = layout.findIndex((b: any) => b.blockType === 'pillars')

    if (whyQuantumIdx !== -1 && pillarsIdx !== -1 && whyQuantumIdx > pillarsIdx) {
      const [whyQuantumBlock] = layout.splice(whyQuantumIdx, 1)
      layout.splice(pillarsIdx, 0, whyQuantumBlock)

      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          layout,
        },
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
      console.log('Successfully reordered solutions page layout: Start With Your Business Goal first, then Integrated Systems!')
    }
  }
}

export async function down({ payload }: MigrateDownArgs): Promise<void> {
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'solutions' } },
    limit: 1,
    depth: 0,
  })

  if (result.docs.length > 0) {
    const page = result.docs[0]
    const layout = [...(page.layout || [])]

    const whyQuantumIdx = layout.findIndex((b: any) => b.blockType === 'whyQuantum')
    const pillarsIdx = layout.findIndex((b: any) => b.blockType === 'pillars')

    if (whyQuantumIdx !== -1 && pillarsIdx !== -1 && whyQuantumIdx < pillarsIdx) {
      const [pillarsBlock] = layout.splice(pillarsIdx, 1)
      layout.splice(whyQuantumIdx, 0, pillarsBlock)

      await payload.update({
        collection: 'pages',
        id: page.id,
        data: {
          layout,
        },
        overrideAccess: true,
        context: { disableRevalidate: true },
      })
    }
  }
}
