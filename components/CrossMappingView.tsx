'use client'

import { useState } from 'react'
import { ActMeta } from '@/data/acts.meta'
import Link from 'next/link'

interface CrossMappingViewProps {
  saa100: ActMeta | undefined
  otherActs: ActMeta[]
}

export default function CrossMappingView({ saa100, otherActs }: CrossMappingViewProps) {
  const [selectedAct, setSelectedAct] = useState<string | null>(null)

  if (!saa100) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <p className="text-gray-600">
          SAAA-100 information not available. Please ensure the act metadata is properly configured.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* SAAA-100 Overview */}
      <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-soft p-6 md:p-8 border border-primary-200">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
          {saa100.shortName} - {saa100.fullName}
        </h2>
        <p className="text-secondary-700 mb-6 leading-relaxed text-lg">
          The Standard on Audit of Artificial Intelligence Agents (SAAA-100) provides a framework
          for auditing AI systems. Below is how various legal frameworks map to its requirements.
        </p>
        {saa100.disclaimer && (
          <div className="bg-warning-50 border-l-4 border-warning-400 rounded-xl p-4 text-sm text-warning-800">
            <strong className="font-semibold">Disclaimer:</strong> {saa100.disclaimer}
          </div>
        )}
      </div>

      {/* Mapping Table */}
      <div className="bg-white rounded-2xl shadow-soft overflow-hidden border border-secondary-200">
        <div className="px-6 py-6 border-b border-secondary-200 bg-gradient-to-r from-primary-50 to-accent-50">
          <h2 className="text-3xl font-bold text-primary-900 mb-2">
            Cross-Mapping Matrix
          </h2>
          <p className="text-sm text-secondary-600">
            Select an act to view detailed mappings with SAAA-100
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {otherActs.map((act) => (
              <button
                key={act.id}
                onClick={() => setSelectedAct(selectedAct === act.id ? null : act.id)}
                className={`p-5 rounded-xl border-2 transition-all text-left shadow-soft hover:shadow-medium hover:-translate-y-1 ${
                  selectedAct === act.id
                    ? 'border-accent-500 bg-accent-50 shadow-medium'
                    : 'border-secondary-200 hover:border-accent-300 bg-white'
                }`}
              >
                <h3 className={`font-semibold mb-2 ${
                  selectedAct === act.id ? 'text-accent-700' : 'text-primary-900'
                }`}>
                  {act.shortName}
                </h3>
                <p className={`text-sm ${
                  selectedAct === act.id ? 'text-accent-600' : 'text-secondary-600'
                }`}>{act.jurisdiction}</p>
              </button>
            ))}
          </div>

          {selectedAct && (
            <div className="mt-6 p-6 md:p-8 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl border border-accent-200 shadow-soft">
              <h3 className="text-2xl font-bold text-primary-900 mb-6">
                Mapping: {otherActs.find(a => a.id === selectedAct)?.shortName} ↔ SAAA-100
              </h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
                  <p className="text-secondary-700 italic mb-4 leading-relaxed">
                    Detailed cross-mapping content is being developed. This will show:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-secondary-700">
                    <li>How specific provisions in {otherActs.find(a => a.id === selectedAct)?.shortName} relate to SAAA-100 requirements</li>
                    <li>Compliance obligations that overlap between frameworks</li>
                    <li>Practical guidance for auditors and consultants</li>
                    <li>Gap analysis between legal requirements and audit standards</li>
                  </ul>
                </div>
                <div className="flex gap-4 flex-wrap">
                  <Link
                    href={`/dashboard/acts/${selectedAct}`}
                    className="text-accent-700 hover:text-accent-800 text-sm font-semibold flex items-center gap-2 hover:underline"
                  >
                    View {otherActs.find(a => a.id === selectedAct)?.shortName} Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/dashboard/acts/saaa100"
                    className="text-accent-700 hover:text-accent-800 text-sm font-semibold flex items-center gap-2 hover:underline"
                  >
                    View SAAA-100 Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {!selectedAct && (
            <div className="text-center py-16">
              <div className="inline-block p-4 bg-accent-100 rounded-full mb-4">
                <svg className="w-12 h-12 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <p className="text-secondary-600 font-medium text-lg">Select an act above to view its cross-mapping with SAAA-100</p>
            </div>
          )}
        </div>
      </div>

      {/* Key Mapping Areas */}
      <div className="bg-white rounded-2xl shadow-soft p-6 md:p-8 border border-secondary-200">
        <h2 className="text-3xl font-bold text-primary-900 mb-6">
          Key Mapping Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl border border-primary-200 hover:shadow-medium transition-shadow">
            <h3 className="font-semibold text-primary-800 mb-3 text-lg">Data Protection</h3>
            <p className="text-sm text-secondary-700 leading-relaxed">
              How DPDPA, GDPR, and PDPL requirements map to SAAA-100 data handling and privacy controls.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-accent-50 to-primary-50 rounded-xl border border-accent-200 hover:shadow-medium transition-shadow">
            <h3 className="font-semibold text-primary-800 mb-3 text-lg">AI Governance</h3>
            <p className="text-sm text-secondary-700 leading-relaxed">
              Mapping between EU AI Act provisions and SAAA-100 audit requirements for AI systems.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-success-50 to-accent-50 rounded-xl border border-success-200 hover:shadow-medium transition-shadow">
            <h3 className="font-semibold text-primary-800 mb-3 text-lg">Compliance Framework</h3>
            <p className="text-sm text-secondary-700 leading-relaxed">
              How IT Act 2000 and other frameworks align with SAAA-100 compliance verification.
            </p>
          </div>
          <div className="p-5 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border border-primary-200 hover:shadow-medium transition-shadow">
            <h3 className="font-semibold text-primary-800 mb-3 text-lg">Audit Standards</h3>
            <p className="text-sm text-secondary-700 leading-relaxed">
              Practical guidance for CAs on conducting AI audits that satisfy multiple regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

