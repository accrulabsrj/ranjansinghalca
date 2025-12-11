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
      <div className="bg-gradient-to-r from-accru-dark to-accru-blue text-white rounded-lg shadow-lg p-8 mb-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold">
                {act.shortName}
              </h1>
              {act.isDraft && (
                <span className="bg-yellow-400 text-yellow-900 text-sm font-semibold px-3 py-1 rounded">
                  DRAFT PROPOSAL
                </span>
              )}
            </div>
            <p className="text-xl text-white/90 mb-4">{act.fullName}</p>
            <div className="flex items-center gap-6 text-sm text-white/80">
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
            className="text-white/80 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {act.disclaimer && (
          <div className="mt-6 p-4 bg-yellow-500/20 border-l-4 border-yellow-400 rounded">
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
                <h3 className="text-sm font-medium text-yellow-200">
                  Important Disclaimer
                </h3>
                <div className="mt-2 text-sm text-white/90">
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

      {/* Navigation Tabs */}
      <div className="bg-white rounded-lg shadow-md mb-6 overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex overflow-x-auto -mb-px">
            {availableTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveSection(tab.key)}
                className={`px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                  activeSection === tab.key
                    ? 'border-accru-accent text-accru-accent'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
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
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Warning:</strong> {error}
              </p>
            </div>
          )}
          {loading && (
            <div className="text-center py-12">
              <p className="text-gray-500">Loading dashboard content...</p>
            </div>
          )}
          
          {!loading && activeSection === 'overview' && (
            <div>
              {dashboardData?.overview ? (
                <SectionContent section={dashboardData.overview} />
              ) : (
                <div>
                  <h2 className="text-3xl font-bold text-accru-dark mb-6">Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 mb-4">
                      This dashboard provides a comprehensive view of {act.shortName} ({act.fullName}).
                      Navigate through the sections above to explore different aspects of this legal framework.
                    </p>
                    {dashboardData ? (
                      <p className="text-gray-600 mb-4">
                        Overview content is being prepared. Please check back soon.
                      </p>
                    ) : (
                      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                        <p className="text-sm text-yellow-800">
                          <strong>Loading...</strong> Dashboard data is being loaded. If this message persists, 
                          please refresh the page or check back later.
                        </p>
                      </div>
                    )}
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>Source:</strong> {act.officialSourcePath || 'Not available'}
                      </p>
                      <p className="text-sm text-blue-800 mt-1">
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
                  <p className="text-gray-500">
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
              <p className="text-gray-500">
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
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-accru-dark">{section.title}</h2>
        
        {/* View Mode Toggle */}
        {(hasBareAct || hasLayman || hasCrossMapping) && (
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('content')}
              className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                viewMode === 'content'
                  ? 'bg-accru-accent text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Content
            </button>
            {hasBareAct && (
              <button
                onClick={() => setViewMode('bareAct')}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  viewMode === 'bareAct'
                    ? 'bg-accru-accent text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Bare Act
              </button>
            )}
            {hasLayman && (
              <button
                onClick={() => setViewMode('layman')}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  viewMode === 'layman'
                    ? 'bg-accru-accent text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Layman Explanation
              </button>
            )}
            {hasCrossMapping && (
              <button
                onClick={() => setViewMode('crossMapping')}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  viewMode === 'crossMapping'
                    ? 'bg-accru-accent text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
            <div className="text-gray-700 whitespace-pre-line mb-6">
              {section.content}
            </div>
            
            {section.subsections && section.subsections.length > 0 && (
              <div className="space-y-6 mt-8">
                {section.subsections.map((subsection: any, idx: number) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-accru-blue mb-3">
                      {subsection.title}
                    </h3>
                    <div className="text-gray-700 whitespace-pre-line">
                      {subsection.content}
                    </div>
                    {subsection.citations && subsection.citations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-sm text-gray-500">
                          <strong>Citations:</strong> {subsection.citations.join(', ')}
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
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                <h3 className="text-lg font-semibold text-blue-900 mb-3">Bare Act Text</h3>
                <div className="text-gray-800 whitespace-pre-line font-mono text-sm">
                  {section.bareActText}
                </div>
              </div>
            )}
            
            {section.subsections?.map((subsection: any, idx: number) => 
              subsection.bareActText && (
                <div key={idx} className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">{subsection.title} - Bare Act Text</h3>
                  <div className="text-gray-800 whitespace-pre-line font-mono text-sm">
                    {subsection.bareActText}
                  </div>
                </div>
              )
            )}
            
            {!section.bareActText && !section.subsections?.some((s: any) => s.bareActText) && (
              <p className="text-gray-500">Bare act text not available for this section.</p>
            )}
          </div>
        )}
        
        {/* Layman Explanation View */}
        {viewMode === 'layman' && (
          <div className="space-y-6">
            {section.laymanExplanation && (
              <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Layman Explanation</h3>
                <div className="text-gray-800 whitespace-pre-line">
                  {section.laymanExplanation}
                </div>
              </div>
            )}
            
            {section.subsections?.map((subsection: any, idx: number) => 
              subsection.laymanExplanation && (
                <div key={idx} className="bg-green-50 border-l-4 border-green-400 p-6 rounded">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">{subsection.title} - Layman Explanation</h3>
                  <div className="text-gray-800 whitespace-pre-line">
                    {subsection.laymanExplanation}
                  </div>
                </div>
              )
            )}
            
            {!section.laymanExplanation && !section.subsections?.some((s: any) => s.laymanExplanation) && (
              <p className="text-gray-500">Layman explanation not available for this section.</p>
            )}
          </div>
        )}
        
        {/* Cross-Mapping View */}
        {viewMode === 'crossMapping' && (
          <div className="space-y-6">
            {section.crossMapping && (
              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                <h3 className="text-lg font-semibold text-purple-900 mb-3">Cross-Mapping</h3>
                <div className="text-gray-800 whitespace-pre-line">
                  {section.crossMapping}
                </div>
              </div>
            )}
            
            {section.subsections?.map((subsection: any, idx: number) => 
              subsection.crossMapping && (
                <div key={idx} className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">{subsection.title} - Cross-Mapping</h3>
                  <div className="text-gray-800 whitespace-pre-line">
                    {subsection.crossMapping}
                  </div>
                </div>
              )
            )}
            
            {!section.crossMapping && !section.subsections?.some((s: any) => s.crossMapping) && (
              <p className="text-gray-500">Cross-mapping not available for this section.</p>
            )}
          </div>
        )}

        {/* Citations (always shown) */}
        {section.citations && section.citations.length > 0 && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Citations:</strong> {section.citations.join(', ')}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

