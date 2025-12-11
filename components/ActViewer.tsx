'use client'

import { useState } from 'react'
import { ActMeta } from '@/data/acts.meta'
import { getActDashboardData } from '@/data/acts/loader'
import ActDashboard from './ActDashboard'
import Link from 'next/link'

interface ActViewerProps {
  act: ActMeta
  dashboardData?: any
}

export default function ActViewer({ act, dashboardData: initialDashboardData }: ActViewerProps) {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'text' | 'explanation' | 'mapping'>('dashboard')
  const dashboardData = initialDashboardData || getActDashboardData(act.id)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-accru-dark">
                {act.shortName}
              </h1>
              {act.isDraft && (
                <span className="bg-yellow-100 text-yellow-800 text-sm font-semibold px-3 py-1 rounded">
                  DRAFT PROPOSAL
                </span>
              )}
            </div>
            <p className="text-xl text-gray-600 mb-2">{act.fullName}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>
                <strong>Jurisdiction:</strong> {act.jurisdiction}
              </span>
              <span>
                <strong>Year:</strong> {act.year}
              </span>
            </div>
          </div>
          <Link
            href="/dashboard"
            className="text-accru-accent hover:text-accru-blue text-sm font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {act.disclaimer && (
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Important Disclaimer
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>{act.disclaimer}</p>
                  {act.id === 'saaa100' && (
                    <p className="mt-2">
                      <strong>Author:</strong> CA Ranjan Singhal
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Use Dashboard if available, otherwise show tabs */}
      {dashboardData ? (
        <ActDashboard act={act} dashboardData={dashboardData} />
      ) : (
        <>
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('text')}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === 'text'
                      ? 'border-accru-accent text-accru-accent'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Official Text
                </button>
            <button
              onClick={() => setActiveTab('explanation')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'explanation'
                  ? 'border-accru-accent text-accru-accent'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Layman Explanation
            </button>
            <button
              onClick={() => setActiveTab('mapping')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'mapping'
                  ? 'border-accru-accent text-accru-accent'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Cross-Mapping
            </button>
          </nav>
        </div>

        <div className="p-6">
          {activeTab === 'text' && (
            <div>
              <h2 className="text-2xl font-bold text-accru-dark mb-4">
                Official Legal Text
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-600">
                  <strong>Source:</strong> {act.officialSourcePath || 'Not available'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>Note:</strong> This section contains verbatim text from the official source.
                  Short excerpts are provided with proper citations.
                </p>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-600 italic">
                  Content extraction from PDF files is in progress. The official text will be displayed here
                  once the PDF processing is complete. For now, please refer to the source file: {act.officialSourcePath}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'explanation' && (
            <div>
              <h2 className="text-2xl font-bold text-accru-dark mb-4">
                Layman Explanation
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 mb-4">
                <p className="text-sm text-blue-800">
                  These explanations are written in original language, specifically designed for Indian CAs,
                  DPDP advisors, and AI governance consultants. They provide practical insights for internal
                  controls advisory.
                </p>
              </div>
              <div className="prose max-w-none">
                <p className="text-gray-600 italic">
                  Layman explanations are being prepared. This content will help professionals understand
                  the practical implications of {act.shortName} in the context of Indian business and compliance.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'mapping' && (
            <div>
              <h2 className="text-2xl font-bold text-accru-dark mb-4">
                Cross-Mapping with SAAA-100
              </h2>
              {act.id === 'saaa100' ? (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">
                    This is the SAAA-100 standard itself. To view cross-mappings, please visit the{' '}
                    <Link href="/dashboard/cross-mapping" className="text-accru-accent hover:underline">
                      Cross-Mapping page
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600">
                    Cross-mapping between {act.shortName} and SAAA-100 is being developed. This will show
                    how provisions in {act.shortName} relate to the audit standard requirements.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
        </>
      )}
    </div>
  )
}

