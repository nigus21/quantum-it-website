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
  id: string
  title: string
  client: string
  category: 'government' | 'financial' | 'enterprise' | 'energy' | 'security'
  solution: string
  summary: string
  focus?: string
  result?: string
  image?: any
  featured?: boolean
}

const categoryIcons = {
  government: Landmark,
  financial: Building2,
  enterprise: Cpu,
  energy: Zap,
  security: ShieldCheck,
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

  const filtered =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div>
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
          {filtered.map((project) => {
            const CategoryIcon =
              (project.category && categoryIcons[project.category]) || Cpu

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-emerald-500/50 transition-all duration-300 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(16,185,129,0.14)] hover:-translate-y-2 overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CategoryIcon className="w-3.5 h-3.5 text-emerald-600" />
                      {project.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {project.title}
                  </h3>

                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    Solution: <span className="text-slate-800 font-semibold">{project.solution}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {project.focus && (
                    <div className="text-xs text-slate-700 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 mb-5">
                      <span className="font-bold text-slate-900 block mb-1">
                        Technical Focus:
                      </span>
                      {project.focus}
                    </div>
                  )}
                </div>

                {project.result && (
                  <div className="pt-4 border-t border-slate-100">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl w-full">
                      <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
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
