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
    <div className="space-y-6">
      {/* SAAA-100 Overview */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-accru-dark mb-4">
          {saa100.shortName} - {saa100.fullName}
        </h2>
        <p className="text-gray-600 mb-4">
          The Standard on Audit of Artificial Intelligence Agents (SAAA-100) provides a framework
          for auditing AI systems. Below is how various legal frameworks map to its requirements.
        </p>
        {saa100.disclaimer && (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-3 text-sm text-yellow-800">
            <strong>Disclaimer:</strong> {saa100.disclaimer}
          </div>
        )}
      </div>

      {/* Mapping Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-accru-dark">
            Cross-Mapping Matrix
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Select an act to view detailed mappings with SAAA-100
          </p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {otherActs.map((act) => (
              <button
                key={act.id}
                onClick={() => setSelectedAct(selectedAct === act.id ? null : act.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedAct === act.id
                    ? 'border-accru-accent bg-accru-accent bg-opacity-5'
                    : 'border-gray-200 hover:border-accru-light-blue'
                }`}
              >
                <h3 className="font-semibold text-accru-dark mb-1">
                  {act.shortName}
                </h3>
                <p className="text-sm text-gray-600">{act.jurisdiction}</p>
              </button>
            ))}
          </div>

          {selectedAct && (
            <div className="mt-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-accru-dark mb-4">
                Mapping: {otherActs.find(a => a.id === selectedAct)?.shortName} ↔ SAAA-100
              </h3>
              <div className="space-y-4">
                <div className="bg-white rounded p-4">
                  <p className="text-gray-600 italic">
                    Detailed cross-mapping content is being developed. This will show:
                  </p>
                  <ul className="list-disc list-inside mt-2 text-gray-600 space-y-1">
                    <li>How specific provisions in {otherActs.find(a => a.id === selectedAct)?.shortName} relate to SAAA-100 requirements</li>
                    <li>Compliance obligations that overlap between frameworks</li>
                    <li>Practical guidance for auditors and consultants</li>
                    <li>Gap analysis between legal requirements and audit standards</li>
                  </ul>
                </div>
                <div className="flex gap-4">
                  <Link
                    href={`/dashboard/acts/${selectedAct}`}
                    className="text-accru-accent hover:text-accru-blue text-sm font-medium"
                  >
                    View {otherActs.find(a => a.id === selectedAct)?.shortName} Details →
                  </Link>
                  <Link
                    href="/dashboard/acts/saaa100"
                    className="text-accru-accent hover:text-accru-blue text-sm font-medium"
                  >
                    View SAAA-100 Details →
                  </Link>
                </div>
              </div>
            </div>
          )}

          {!selectedAct && (
            <div className="text-center py-12 text-gray-500">
              <p>Select an act above to view its cross-mapping with SAAA-100</p>
            </div>
          )}
        </div>
      </div>

      {/* Key Mapping Areas */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-accru-dark mb-4">
          Key Mapping Areas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-accru-blue mb-2">Data Protection</h3>
            <p className="text-sm text-gray-600">
              How DPDPA, GDPR, and PDPL requirements map to SAAA-100 data handling and privacy controls.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-accru-blue mb-2">AI Governance</h3>
            <p className="text-sm text-gray-600">
              Mapping between EU AI Act provisions and SAAA-100 audit requirements for AI systems.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-accru-blue mb-2">Compliance Framework</h3>
            <p className="text-sm text-gray-600">
              How IT Act 2000 and other frameworks align with SAAA-100 compliance verification.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-accru-blue mb-2">Audit Standards</h3>
            <p className="text-sm text-gray-600">
              Practical guidance for CAs on conducting AI audits that satisfy multiple regulatory requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

