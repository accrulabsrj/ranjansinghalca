'use client'

import { useState, useEffect } from 'react'
import { ActMeta } from '@/data/acts.meta'
import { ActDashboardData, ActDashboardSectionKey } from '@/data/act-structure'
import Link from 'next/link'

interface ActDashboardProps {
  act: ActMeta
  dashboardData: ActDashboardData | null
}

export default function ActDashboard({ act, dashboardData: initialData }: ActDashboardProps) {
  const [activeSection, setActiveSection] = useState<ActDashboardSectionKey | 'overview'>('overview')
  const [dashboardData, setDashboardData] = useState<ActDashboardData | null>(initialData)
  const [loading, setLoading] = useState(!initialData)
  const [error, setError] = useState<string | null>(null)

  // Safety check - ensure act exists
  if (!act) {
    console.error('ActDashboard: act prop is missing')
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
        <h2 className="text-xl font-bold text-red-800 mb-2">Error</h2>
        <p className="text-red-700">Act information is missing.</p>
      </div>
    )
  }

  // Debug logging
  console.log('ActDashboard rendering for act:', act.id, 'with data:', dashboardData ? 'Yes' : 'No')

  useEffect(() => {
    if (!initialData) {
      // Fetch from API
      fetch(`/api/acts/${act.id}`)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Failed to load data: ${res.status}`)
          }
          return res.json()
        })
        .then(data => {
          // Check if response has error property
          if (data.error) {
            console.error('API error:', data.error)
            setError(data.error)
            setDashboardData(null)
          } else {
            setDashboardData(data)
            setError(null)
          }
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching dashboard data:', error)
          setError(error.message || 'Failed to load dashboard data')
          setDashboardData(null)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [act.id, initialData])

  const sectionTabs: { key: ActDashboardSectionKey | 'overview'; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'definitions', label: 'Definitions' },
    { key: 'applicability', label: 'Applicability' },
    { key: 'stakeholders', label: 'Stakeholders' },
    { key: 'exemptions', label: 'Exemptions' },
    { key: 'dataBreach', label: 'Data Breach' },
    { key: 'obligations', label: 'Obligations' },
    { key: 'rights', label: 'Rights' },
    { key: 'regulatory', label: 'Regulatory' },
    { key: 'penalties', label: 'Penalties' },
    { key: 'appeals', label: 'Appeals & Miscellaneous' },
    { key: 'digitalSignatures', label: 'Digital Signatures (Sections 3-10)' },
    { key: 'electronicGovernance', label: 'Electronic Governance (Sections 11-16)' },
    { key: 'additionalOffences', label: 'Additional Offences (Sections 65-78)' },
    { key: 'miscellaneous', label: 'Miscellaneous (Sections 80-90)' },
  ]

  // Filter out sections that don't exist in the data
  // Always show overview tab, even if data is null
  const availableTabs = dashboardData 
    ? sectionTabs.filter(tab => {
        if (tab.key === 'overview') return true
        if (tab.key === 'definitions') return !!dashboardData?.definitions
        return !!dashboardData?.sections[tab.key as ActDashboardSectionKey]
      })
    : [{ key: 'overview' as const, label: 'Overview' }]

  // Ensure dashboard always renders, even if data is null
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-800 text-white rounded-2xl shadow-strong p-8 md:p-10 mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="flex items-start justify-between relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <h1 className="text-4xl md:text-5xl font-bold">
                {act.shortName}
              </h1>
              {act.isDraft && (
                <span className="bg-warning-400 text-warning-900 text-sm font-semibold px-4 py-1.5 rounded-full border border-warning-300">
                  DRAFT PROPOSAL
                </span>
              )}
            </div>
            <p className="text-xl md:text-2xl text-white/90 mb-6">{act.fullName}</p>
            <div className="flex items-center gap-6 text-sm text-white/80 flex-wrap">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <strong>Jurisdiction:</strong> {act.jurisdiction}
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
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

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-soft mb-8 overflow-hidden border border-secondary-200">
        <div className="border-b border-secondary-200 bg-secondary-50/50">
          <nav className="flex overflow-x-auto -mb-px scrollbar-hide">
            {availableTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSection(tab.key)}
                className={`px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-all ${
                  activeSection === tab.key
                    ? 'border-accent-500 text-accent-700 bg-white'
                    : 'border-transparent text-secondary-600 hover:text-primary-700 hover:border-secondary-300 hover:bg-white/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        <div className="p-8">
          {error && (
            <div className="bg-warning-50 border-l-4 border-warning-400 p-4 mb-6 rounded-lg">
              <p className="text-sm text-warning-800">
                <strong>Warning:</strong> {error}
              </p>
            </div>
          )}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-accent-600 mb-4"></div>
              <p className="text-secondary-500 font-medium">Loading dashboard content...</p>
            </div>
          )}
          
          {!loading && activeSection === 'overview' && (
            <div>
              {dashboardData?.overview ? (
                <SectionContent section={dashboardData.overview} />
              ) : (
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-secondary-700 mb-6 leading-relaxed">
                      This dashboard provides a comprehensive view of <span className="font-semibold text-primary-800">{act.shortName}</span> ({act.fullName}).
                      Navigate through the sections above to explore different aspects of this legal framework.
                    </p>
                    {dashboardData ? (
                      <p className="text-secondary-600 mb-6">
                        Overview content is being prepared. Please check back soon.
                      </p>
                    ) : (
                      <div className="bg-warning-50 border-l-4 border-warning-400 p-5 mb-6 rounded-lg">
                        <p className="text-sm text-warning-800">
                          <strong>Loading...</strong> Dashboard data is being loaded. If this message persists, 
                          please refresh the page or check back later.
                        </p>
                      </div>
                    )}
                    <div className="bg-accent-50 rounded-xl p-5 mb-4 border border-accent-200">
                      <p className="text-sm text-accent-900 font-medium mb-2">
                        <strong>Source:</strong> {act.officialSourcePath || 'Not available'}
                      </p>
                      <p className="text-sm text-accent-800">
                        <strong>Note:</strong> This content is extracted from official sources. 
                        Always refer to the original documents for authoritative legal text.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {!loading && activeSection === 'definitions' && (
            <div>
              {dashboardData?.definitions ? (
                <SectionContent section={dashboardData.definitions} />
              ) : (
                <div className="text-center py-12">
                  <p className="text-secondary-500 font-medium">
                    Definitions section is being prepared. Please check back soon.
                  </p>
                </div>
              )}
            </div>
          )}

          {!loading && activeSection !== 'overview' && activeSection !== 'definitions' && dashboardData?.sections[activeSection] && (
            <SectionContent section={dashboardData.sections[activeSection]!} />
          )}

          {!loading && activeSection !== 'overview' && activeSection !== 'definitions' && !dashboardData?.sections[activeSection] && (
            <div className="text-center py-12">
              <p className="text-secondary-500 font-medium">
                Content for this section is being prepared. Please check back soon.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SectionContent({ section }: { section: any }) {
  const [viewMode, setViewMode] = useState<'content' | 'bareAct' | 'layman' | 'crossMapping'>('content')
  
  // Determine available view modes
  const hasBareAct = !!section.bareActText || section.subsections?.some((s: any) => s.bareActText)
  const hasLayman = !!section.laymanExplanation || section.subsections?.some((s: any) => s.laymanExplanation)
  const hasCrossMapping = !!section.crossMapping || section.subsections?.some((s: any) => s.crossMapping)
  
  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900">{section.title}</h2>
        
        {/* View Mode Toggle */}
        {(hasBareAct || hasLayman || hasCrossMapping) && (
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setViewMode('content')}
              className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                viewMode === 'content'
                  ? 'bg-accent-600 text-white shadow-medium'
                  : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
              }`}
            >
              Content
            </button>
            {hasBareAct && (
              <button
                onClick={() => setViewMode('bareAct')}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                  viewMode === 'bareAct'
                    ? 'bg-accent-600 text-white shadow-medium'
                    : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
                }`}
              >
                Bare Act
              </button>
            )}
            {hasLayman && (
              <button
                onClick={() => setViewMode('layman')}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                  viewMode === 'layman'
                    ? 'bg-accent-600 text-white shadow-medium'
                    : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
                }`}
              >
                Layman Explanation
              </button>
            )}
            {hasCrossMapping && (
              <button
                onClick={() => setViewMode('crossMapping')}
                className={`px-4 py-2 text-sm rounded-lg font-medium transition-all ${
                  viewMode === 'crossMapping'
                    ? 'bg-accent-600 text-white shadow-medium'
                    : 'bg-secondary-200 text-secondary-700 hover:bg-secondary-300'
                }`}
              >
                Cross-Mapping
              </button>
            )}
          </div>
        )}
      </div>
      
      <div className="prose max-w-none">
        {/* Main Content View */}
        {viewMode === 'content' && (
          <>
            <div className="text-secondary-700 whitespace-pre-line mb-8 leading-relaxed text-lg">
              {section.content}
            </div>
            
            {section.subsections && section.subsections.length > 0 && (
              <div className="space-y-6 mt-8">
                {section.subsections.map((subsection: any, idx: number) => (
                  <div key={idx} className="bg-gradient-to-br from-secondary-50 to-white rounded-xl p-6 shadow-soft border border-secondary-200">
                    <h3 className="text-xl font-semibold text-primary-800 mb-4">
                      {subsection.title}
                    </h3>
                    <div className="text-secondary-700 whitespace-pre-line leading-relaxed">
                      {subsection.content}
                    </div>
                    {subsection.citations && subsection.citations.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-secondary-200">
                        <p className="text-sm text-secondary-600">
                          <strong className="text-primary-700">Citations:</strong> <span className="text-secondary-700">{subsection.citations.join(', ')}</span>
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
        
        {/* Bare Act Text View */}
        {viewMode === 'bareAct' && (
          <div className="space-y-6">
            {section.bareActText && (
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-xl shadow-soft">
                <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Bare Act Text
                </h3>
                <div className="text-secondary-800 whitespace-pre-line font-mono text-sm leading-relaxed bg-white p-4 rounded-lg border border-primary-200">
                  {section.bareActText}
                </div>
              </div>
            )}
            
            {section.subsections?.map((subsection: any, idx: number) => 
              subsection.bareActText && (
                <div key={idx} className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-xl shadow-soft">
                  <h3 className="text-lg font-semibold text-primary-900 mb-4">{subsection.title} - Bare Act Text</h3>
                  <div className="text-secondary-800 whitespace-pre-line font-mono text-sm leading-relaxed bg-white p-4 rounded-lg border border-primary-200">
                    {subsection.bareActText}
                  </div>
                </div>
              )
            )}
            
            {!section.bareActText && !section.subsections?.some((s: any) => s.bareActText) && (
              <p className="text-secondary-500 font-medium text-center py-8">Bare act text not available for this section.</p>
            )}
          </div>
        )}
        
        {/* Layman Explanation View */}
        {viewMode === 'layman' && (
          <div className="space-y-6">
            {section.laymanExplanation && (
              <div className="bg-success-50 border-l-4 border-success-500 p-6 rounded-xl shadow-soft">
                <h3 className="text-lg font-semibold text-success-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  Layman Explanation
                </h3>
                <div className="text-secondary-800 whitespace-pre-line leading-relaxed bg-white p-5 rounded-lg border border-success-200">
                  {section.laymanExplanation}
                </div>
              </div>
            )}
            
            {section.subsections?.map((subsection: any, idx: number) => 
              subsection.laymanExplanation && (
                <div key={idx} className="bg-success-50 border-l-4 border-success-500 p-6 rounded-xl shadow-soft">
                  <h3 className="text-lg font-semibold text-success-900 mb-4">{subsection.title} - Layman Explanation</h3>
                  <div className="text-secondary-800 whitespace-pre-line leading-relaxed bg-white p-5 rounded-lg border border-success-200">
                    {subsection.laymanExplanation}
                  </div>
                </div>
              )
            )}
            
            {!section.laymanExplanation && !section.subsections?.some((s: any) => s.laymanExplanation) && (
              <p className="text-secondary-500 font-medium text-center py-8">Layman explanation not available for this section.</p>
            )}
          </div>
        )}
        
        {/* Cross-Mapping View */}
        {viewMode === 'crossMapping' && (
          <div className="space-y-6">
            {section.crossMapping && (
              <div className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-xl shadow-soft">
                <h3 className="text-lg font-semibold text-accent-900 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Cross-Mapping
                </h3>
                <div className="text-secondary-800 whitespace-pre-line leading-relaxed bg-white p-5 rounded-lg border border-accent-200">
                  {section.crossMapping}
                </div>
              </div>
            )}
            
            {section.subsections?.map((subsection: any, idx: number) => 
              subsection.crossMapping && (
                <div key={idx} className="bg-accent-50 border-l-4 border-accent-500 p-6 rounded-xl shadow-soft">
                  <h3 className="text-lg font-semibold text-accent-900 mb-4">{subsection.title} - Cross-Mapping</h3>
                  <div className="text-secondary-800 whitespace-pre-line leading-relaxed bg-white p-5 rounded-lg border border-accent-200">
                    {subsection.crossMapping}
                  </div>
                </div>
              )
            )}
            
            {!section.crossMapping && !section.subsections?.some((s: any) => s.crossMapping) && (
              <p className="text-secondary-500 font-medium text-center py-8">Cross-mapping not available for this section.</p>
            )}
          </div>
        )}

        {/* Citations (always shown) */}
        {section.citations && section.citations.length > 0 && (
          <div className="mt-8 pt-6 border-t border-secondary-200 bg-secondary-50 rounded-lg p-4">
            <p className="text-sm text-secondary-700">
              <strong className="text-primary-700">Citations:</strong> <span className="text-secondary-600">{section.citations.join(', ')}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

