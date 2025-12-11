'use client'

import Link from 'next/link'
import { getAllActs } from '@/data/acts.meta'
import Navigation from '@/components/Navigation'
import ActCard from '@/components/ActCard'

export default function DashboardHome() {
  const acts = getAllActs()

  return (
    <div className="min-h-screen bg-accru-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-accru-dark mb-4">
            Regulations and Acts
          </h1>
          <p className="text-2xl text-accru-light-blue mb-2">
            Data & AI Governance Dashboard
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Comprehensive reference for DPDPA, GDPR, EU AI Act, PDPL, IT Act 2000, 
            and SAAA-100. Designed for CAs, DPDP advisors, and AI governance consultants.
          </p>
        </div>

        {/* Acts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {acts.map((act) => (
            <ActCard key={act.id} act={act} />
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-3xl font-bold text-accru-dark mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accru-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-accru-blue mb-2">
                  Official Legal Text
                </h3>
                <p className="text-gray-600">
                  Access verbatim text from authorized sources with proper citations and metadata.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accru-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-accru-blue mb-2">
                  Layman Explanations
                </h3>
                <p className="text-gray-600">
                  Practical explanations written specifically for Indian CAs and internal controls advisory.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accru-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-accru-blue mb-2">
                  Cross-Mapping
                </h3>
                <p className="text-gray-600">
                  Understand relationships between different laws and the SAAA-100 audit standard.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-accru-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-semibold text-accru-blue mb-2">
                  Compliance Focus
                </h3>
                <p className="text-gray-600">
                  Tailored for professionals who need to navigate complex regulatory landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-accru-dark text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} AccruLabs.ai. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            This dashboard is for reference purposes only. Always consult official sources for legal compliance.
          </p>
        </div>
      </footer>
    </div>
  )
}
