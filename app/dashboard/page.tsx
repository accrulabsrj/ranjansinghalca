'use client'

import Link from 'next/link'
import { getAllActs } from '@/data/acts.meta'
import Navigation from '@/components/Navigation'
import ActCard from '@/components/ActCard'

export default function DashboardHome() {
  const acts = getAllActs()

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-medium border border-accent-200">
              Legal Framework Reference
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-4">
            Regulations and Acts
          </h1>
          <p className="text-2xl md:text-3xl text-primary-700 mb-4 font-light">
            Data & AI Governance Dashboard
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto leading-relaxed">
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
        <div className="mt-20 bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl shadow-soft p-8 md:p-12 border border-primary-100">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-accent-500">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Official Legal Text
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Access verbatim text from authorized sources with proper citations and metadata.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-primary-500">
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Layman Explanations
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Practical explanations written specifically for Indian CAs and internal controls advisory.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-success-500">
              <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Cross-Mapping
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Understand relationships between different laws and the SAAA-100 audit standard.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft border-l-4 border-accent-400">
              <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                Compliance Focus
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                Tailored for professionals who need to navigate complex regulatory landscapes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-secondary-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/90 mb-2">
            © {new Date().getFullYear()} AccruLabs.ai. All rights reserved.
          </p>
          <p className="text-sm text-white/70">
            This dashboard is for reference purposes only. Always consult official sources for legal compliance.
          </p>
        </div>
      </footer>
    </div>
  )
}
