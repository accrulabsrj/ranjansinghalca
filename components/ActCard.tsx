'use client'

import Link from 'next/link'
import { ActMeta } from '@/data/acts.meta'

interface ActCardProps {
  act: ActMeta
}

export default function ActCard({ act }: ActCardProps) {
  return (
    <Link 
      href={`/dashboard/acts/${act.id}`}
      className="block h-full group"
    >
      <div className="bg-white rounded-xl shadow-soft hover:shadow-strong transition-all duration-300 p-6 h-full flex flex-col cursor-pointer hover:-translate-y-1 border border-secondary-200 hover:border-accent-300">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-700 transition-colors">
              {act.shortName}
            </h3>
            <p className="text-sm text-secondary-600 leading-relaxed">{act.fullName}</p>
          </div>
          {act.isDraft && (
            <span className="bg-warning-100 text-warning-800 text-xs font-semibold px-3 py-1 rounded-full border border-warning-300 flex-shrink-0 ml-2">
              DRAFT
            </span>
          )}
        </div>
        
        <div className="mt-auto space-y-3">
          <div className="flex items-center text-sm">
            <span className="font-medium text-secondary-500">Jurisdiction:</span>
            <span className="ml-2 text-primary-700 font-medium">{act.jurisdiction}</span>
          </div>
          <div className="flex items-center text-sm">
            <span className="font-medium text-secondary-500">Year:</span>
            <span className="ml-2 text-primary-700 font-medium">{act.year}</span>
          </div>
          
          {act.disclaimer && (
            <div className="mt-3 p-3 bg-warning-50 border-l-4 border-warning-400 rounded-lg text-xs text-warning-800">
              <strong className="font-semibold">Note:</strong> {act.disclaimer}
            </div>
          )}
        </div>
        
        <div className="mt-6 pt-4 border-t border-secondary-200">
          <span className="text-accent-600 text-sm font-semibold group-hover:text-accent-700 flex items-center gap-2 transition-colors">
            View Details
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}

