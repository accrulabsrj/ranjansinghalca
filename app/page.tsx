'use client'

import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            CA Ranjan Singhal
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            AI Governance & Data Privacy Advisor
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            I help organizations become AI-Ready, DPDP-Compliant, and ISO 42001-aligned by bridging the gap between technology, internal controls, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About</h2>
          <p className="text-lg text-gray-700 mb-4">
            My work sits at the rare intersection of Audit, Law, and Tech. I don't just quote regulations; I build the internal controls that make compliance operational.
          </p>
          <div className="space-y-3 text-gray-600">
            <p><strong>Practical & CA-Friendly:</strong> I simplify complex AI governance into practical language.</p>
            <p><strong>Real Internal Controls:</strong> Focus on actual implementation, not just theory.</p>
            <p><strong>Proactive:</strong> Preparing organizations for AI regulations before they hit.</p>
            <p><strong>End-to-End Execution:</strong> From strategy to full implementation.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Services</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Governance & Risk</h3>
              <p className="text-gray-600">Risk tier mapping, AI lifecycle governance, audit checkpoints, and Responsible AI Frameworks.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">DPDP Act Compliance</h3>
              <p className="text-gray-600">Privacy Policies, Consent Frameworks, DPIAs, RoPAs, Data Registers, and implementation support.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ISO/IEC 42001 (AIMS)</h3>
              <p className="text-gray-600">Gap Assessment, Control Mapping, Policy Drafting, and Certification Readiness.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Internal Controls for AI</h3>
              <p className="text-gray-600">ICFR for AI workflows, auditing automation & agents, validation frameworks, and documentation.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Training</h3>
              <p className="text-gray-600">DPDP Act & GDPR Workshops, Responsible AI for Finance, AI Automation in CA Practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact</h2>
          <div className="space-y-4 text-gray-700">
            <p><strong>CA Ranjan Singhal</strong></p>
            <p>
              <a href="mailto:ranjansinghal.ca@gmail.com" className="text-blue-600 hover:text-blue-800">
                ranjansinghal.ca@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919610131143" className="text-blue-600 hover:text-blue-800">
                +91-9610131143
              </a>
            </p>
            <p className="mt-6 text-gray-600">
              Connect for Strategy, Implementation, or Training.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} CA Ranjan Singhal. All Rights Reserved.</p>
          <p className="mt-2">Founder, AccruLabs.ai | DPDPA Unlocked</p>
        </div>
      </footer>
    </div>
  )
}
