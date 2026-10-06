import React from 'react'

import type { Testimonial as TestimonialType, TestimonialBlock } from '@/payload-types'

import { cn } from '@/utilities/ui'

function SingleTestimonial({ t }: { t: TestimonialType }) {
  const quote = typeof t.quote === 'string' ? t.quote : null
  if (!quote) return null

  return (
    <blockquote className="rounded-3xl border border-slate-200/90 bg-white p-8 shadow-[0_4px_25px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-500/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="text-4xl text-emerald-500 font-serif leading-none block mb-3">&ldquo;</span>
      <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium italic">
        {quote}
      </p>
      {(t.authorName || t.company) && (
        <footer className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-emerald-50 text-emerald-700 font-bold text-xs flex items-center justify-center border border-emerald-100 shrink-0">
            {t.authorName ? t.authorName.charAt(0) : 'Q'}
          </div>
          <div>
            <cite className="not-italic font-bold text-slate-900 block text-sm">
              {t.authorName}
            </cite>
            {t.company && (
              <span className="text-xs text-emerald-700 font-medium block">
                {t.company}
              </span>
            )}
          </div>
        </footer>
      )}
    </blockquote>
  )
}

export const TestimonialBlockComponent: React.FC<TestimonialBlock> = ({
  testimonials,
  layout,
}) => {
  const list = testimonials?.filter(
    (t): t is TestimonialType => typeof t === 'object' && t !== null && 'quote' in t,
  )
  if (!list?.length) return null

  const isCarousel = layout === 'carousel'

  return (
    <section className="container">
      <div
        className={cn(
          'flex gap-6',
          isCarousel ? 'overflow-x-auto snap-x snap-mandatory pb-4' : 'flex-col',
        )}
      >
        {list.map((t, i) => (
          <div
            key={t.id ?? i}
            className={cn(
              isCarousel && 'min-w-[min(100%,24rem)] snap-center',
            )}
          >
            <SingleTestimonial t={t} />
          </div>
        ))}
      </div>
    </section>
  )
}
