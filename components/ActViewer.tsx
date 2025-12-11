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
      <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 text-white rounded-2xl shadow-strong p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="flex items-start justify-between mb-4 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h1 className="text-3xl md:text-4xl font-bold">
                {act.shortName}
              </h1>
              {act.isDraft && (
                <span className="bg-warning-400 text-warning-900 text-sm font-semibold px-3 py-1.5 rounded-full border border-warning-300">
                  DRAFT PROPOSAL
                </span>
              )}
            </div>
            <p className="text-xl text-white/90 mb-4">{act.fullName}</p>
            <div className="flex items-center gap-6 text-sm text-white/80 flex-wrap">
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
            className="text-white/80 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 hover:bg-white/10 px-4 py-2 rounded-lg ml-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Dashboard
          </Link>
        </div>

        {act.disclaimer && (
          <div className="mt-6 p-5 bg-warning-500/20 backdrop-blur-sm border-l-4 border-warning-400 rounded-xl relative z-10">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg
                  className="h-6 w-6 text-warning-300"
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
              <div className="ml-4">
                <h3 className="text-sm font-semibold text-warning-200 mb-2">
                  Important Disclaimer
                </h3>
                <div className="mt-2 text-sm text-white/90 leading-relaxed">
                  <p>{act.disclaimer}</p>
                  {act.id === 'saaa100' && (
                    <p className="mt-2 font-medium">
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
          <div className="bg-white rounded-xl shadow-soft mb-8 overflow-hidden border border-secondary-200">
            <div className="border-b border-secondary-200 bg-secondary-50/50">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('text')}
                  className={`px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                    activeTab === 'text'
                      ? 'border-accent-500 text-accent-700 bg-white'
                      : 'border-transparent text-secondary-600 hover:text-primary-700 hover:border-secondary-300 hover:bg-white/50'
                  }`}
                >
                  Official Text
                </button>
            <button
              onClick={() => setActiveTab('explanation')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                activeTab === 'explanation'
                  ? 'border-accent-500 text-accent-700 bg-white'
                  : 'border-transparent text-secondary-600 hover:text-primary-700 hover:border-secondary-300 hover:bg-white/50'
              }`}
            >
              Layman Explanation
            </button>
            <button
              onClick={() => setActiveTab('mapping')}
              className={`px-6 py-4 text-sm font-medium border-b-2 transition-all ${
                activeTab === 'mapping'
                  ? 'border-accent-500 text-accent-700 bg-white'
                  : 'border-transparent text-secondary-600 hover:text-primary-700 hover:border-secondary-300 hover:bg-white/50'
              }`}
            >
              Cross-Mapping
            </button>
          </nav>
        </div>

        <div className="p-6 md:p-8">
          {activeTab === 'text' && (
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Official Legal Text
              </h2>
              <div className="bg-primary-50 rounded-xl p-5 mb-6 border border-primary-200">
                <p className="text-sm text-primary-800 font-medium mb-2">
                  <strong>Source:</strong> {act.officialSourcePath || 'Not available'}
                </p>
                <p className="text-sm text-primary-700">
                  <strong>Note:</strong> This section contains verbatim text from the official source.
                  Short excerpts are provided with proper citations.
                </p>
              </div>
              <div className="prose max-w-none">
                <p className="text-secondary-600 italic leading-relaxed">
                  Content extraction from PDF files is in progress. The official text will be displayed here
                  once the PDF processing is complete. For now, please refer to the source file: {act.officialSourcePath}
                </p>
              </div>
            </div>
          )}

          {activeTab === 'explanation' && (
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Layman Explanation
              </h2>
              <div className="bg-success-50 rounded-xl p-5 mb-6 border border-success-200">
                <p className="text-sm text-success-800">
                  These explanations are written in original language, specifically designed for Indian CAs,
                  DPDP advisors, and AI governance consultants. They provide practical insights for internal
                  controls advisory.
                </p>
              </div>
              <div className="prose max-w-none">
                <p className="text-secondary-600 italic leading-relaxed">
                  Layman explanations are being prepared. This content will help professionals understand
                  the practical implications of {act.shortName} in the context of Indian business and compliance.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'mapping' && (
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Cross-Mapping with SAAA-100
              </h2>
              {act.id === 'saaa100' ? (
                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <p className="text-secondary-700 leading-relaxed">
                    This is the SAAA-100 standard itself. To view cross-mappings, please visit the{' '}
                    <Link href="/dashboard/cross-mapping" className="text-accent-700 hover:text-accent-800 font-semibold underline">
                      Cross-Mapping page
                    </Link>
                    .
                  </p>
                </div>
              ) : (
                <div className="bg-accent-50 rounded-xl p-6 border border-accent-200">
                  <p className="text-secondary-700 leading-relaxed">
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

