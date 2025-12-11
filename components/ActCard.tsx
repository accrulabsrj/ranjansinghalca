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
      className="block h-full"
    >
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 h-full flex flex-col cursor-pointer hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-accru-dark mb-1">
              {act.shortName}
            </h3>
            <p className="text-sm text-gray-600">{act.fullName}</p>
          </div>
          {act.isDraft && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
              DRAFT
            </span>
          )}
        </div>
        
        <div className="mt-auto space-y-2">
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium">Jurisdiction:</span>
            <span className="ml-2">{act.jurisdiction}</span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <span className="font-medium">Year:</span>
            <span className="ml-2">{act.year}</span>
          </div>
          
          {act.disclaimer && (
            <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded text-xs text-yellow-800">
              <strong>Note:</strong> {act.disclaimer}
            </div>
          )}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-accru-accent text-sm font-medium">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  )
}

