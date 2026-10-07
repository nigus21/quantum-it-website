'use client'

import React, { useState } from 'react'
import {
  Building2,
  Landmark,
  Cpu,
  Zap,
  ShieldCheck,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react'

export interface ProjectDoc {
  id: string | number
  title: string
  client?: string | null
  category?: any
  solution?: string | null
  summary?: string | null
  focus?: string | null
  result?: string | null
  image?: any
  featured?: boolean | null
}

const categoryIcons: Record<string, any> = {
  government: Landmark,
  financial: Building2,
  enterprise: Cpu,
  energy: Zap,
  security: ShieldCheck,
}

// Curated high-resolution splash images matching each project domain
const categoryDefaultImages: Record<string, string[]> = {
  government: [
    'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  ],
  financial: [
    'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80',
  ],
  enterprise: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  ],
  energy: [
    'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80',
  ],
  security: [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80',
  ],
}

function getProjectImage(project: ProjectDoc, index: number): string {
  if (project.image && typeof project.image === 'object' && project.image?.url) {
    return project.image.url
  }
  if (typeof project.image === 'string' && project.image) {
    return project.image
  }
  const category = (project.category || 'enterprise').toLowerCase()
  const list = categoryDefaultImages[category] || categoryDefaultImages.enterprise
  return list[index % list.length]
}

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Government', value: 'government' },
  { label: 'Financial', value: 'financial' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Energy', value: 'energy' },
  { label: 'Security', value: 'security' },
]

export const ProjectsClientFilter: React.FC<{
  projects: ProjectDoc[]
  showFilters?: boolean
}> = ({ projects = [], showFilters = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filtered =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div ref={containerRef}>
      {showFilters && (
        <div className="flex flex-wrap items-center gap-2.5 mb-12 pb-4 border-b border-slate-200">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.value
            return (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-600/25 scale-105'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16 px-4 rounded-3xl bg-white border border-dashed border-slate-300 text-slate-500 shadow-sm">
          <FolderGit2 className="w-12 h-12 mx-auto mb-4 opacity-40 text-emerald-600" />
          <p className="text-lg font-bold text-slate-800">No projects found in this category.</p>
          <p className="text-sm mt-1">Please check back soon or select another category above.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project, idx) => {
            const CategoryIcon =
              (project.category && categoryIcons[project.category]) || Cpu

            const colPos = idx % 3
            const initialTransform =
              colPos === 0
                ? '-translate-x-12 translate-y-8'
                : colPos === 2
                ? 'translate-x-12 translate-y-8'
                : 'translate-y-12'

            const imageUrl = getProjectImage(project, idx)

            return (
              <div
                key={project.id}
                style={{ transitionDelay: `${(idx % 6) * 120}ms` }}
                className={`group relative flex flex-col justify-between rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 hover:border-emerald-500/60 transition-all duration-700 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.2)] hover:-translate-y-2 overflow-hidden ${
                  isVisible
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : `opacity-0 ${initialTransform}`
                }`}
              >
                {/* Prismatic Shimmer Sweep on Hover */}
                <div className="card-shimmer-effect absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-emerald-100/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Animated top gradient highlight bar on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                <div>
                  {/* Project Image Header with Dark Gradient & Floating Badges */}
                  <div className="relative w-full h-52 overflow-hidden bg-slate-900 group/img">
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

                    {/* Floating Tech Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900/85 backdrop-blur-md text-emerald-300 border border-emerald-500/40 shadow-sm">
                        <CategoryIcon className="w-3.5 h-3.5 text-emerald-400" />
                        {project.category}
                      </span>
                      {project.client && (
                        <span className="text-xs font-mono font-bold text-slate-200 bg-slate-900/85 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 shadow-sm">
                          {project.client}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Body Content */}
                  <div className="p-6 md:p-7">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>

                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>Solution:</span> <span className="text-slate-800 font-semibold">{project.solution}</span>
                    </div>

                    <p className="text-slate-600 text-sm leading-relaxed mb-5">
                      {project.summary}
                    </p>

                    {project.focus && (
                      <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 mb-2 group-hover:bg-emerald-50/40 group-hover:border-emerald-200/60 transition-colors">
                        <span className="font-bold text-slate-900 block mb-1">
                          Technical Focus:
                        </span>
                        {project.focus}
                      </div>
                    )}
                  </div>
                </div>

                {project.result && (
                  <div className="px-6 md:px-7 pb-6 pt-0">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3.5 py-2 rounded-xl w-full group-hover:shadow-sm transition-all">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 group-hover:scale-110 transition-transform" />
                      <span className="truncate">{project.result}</span>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
