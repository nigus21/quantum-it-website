import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx('flex items-center gap-3 select-none', className)}>
      {/* Quantum Logo Mark (Shield + Quantum Nodes + Circuit) */}
      <div className="relative w-9 h-9 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          {/* Hexagonal Shield */}
          <polygon
            points="20,2 36,11 36,29 20,38 4,29 4,11"
            className="fill-emerald-500/10 stroke-emerald-600 stroke-[2.2]"
          />
          {/* Internal Quantum Node Core */}
          <circle cx="20" cy="20" r="4.5" className="fill-emerald-600" />
          {/* Node Connections */}
          <line x1="20" y1="20" x2="20" y2="7" className="stroke-teal-500 stroke-[1.8]" />
          <line x1="20" y1="20" x2="31" y2="26" className="stroke-teal-500 stroke-[1.8]" />
          <line x1="20" y1="20" x2="9" y2="26" className="stroke-teal-500 stroke-[1.8]" />
          {/* Orbiting Satellite Dots */}
          <circle cx="20" cy="7" r="2.2" className="fill-teal-600" />
          <circle cx="31" cy="26" r="2.2" className="fill-teal-600" />
          <circle cx="9" cy="26" r="2.2" className="fill-teal-600" />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col text-left">
        <span className="font-black text-lg tracking-wider text-slate-900 dark:text-white leading-none font-mono">
          QUANTUM
        </span>
        <span className="text-[9.5px] font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase leading-tight mt-0.5">
          IT &amp; Security Solutions
        </span>
      </div>
    </div>
  )
}
