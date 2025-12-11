'use client'

import Navigation from '@/components/Navigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary-50 to-white">
      <Navigation />

      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-accent-500/20 backdrop-blur-sm border border-accent-400/30 rounded-full text-accent-200 text-sm font-medium">
              Privacy & AI Governance Expert
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-accent-100 bg-clip-text text-transparent">
            CA Ranjan Singhal
          </h1>
          <p className="text-2xl md:text-3xl text-accent-200 mb-6 font-light">
            AI Governance & Data Privacy Advisor
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            I help organizations become AI-Ready, DPDP-Compliant, and ISO 42001-aligned by bridging the gap between technology, internal controls, and regulatory compliance.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">About</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"></div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 shadow-soft mb-8">
            <p className="text-xl text-secondary-700 mb-6 leading-relaxed">
              My work sits at the rare intersection of <span className="font-semibold text-primary-700">Audit</span>, <span className="font-semibold text-primary-700">Law</span>, and <span className="font-semibold text-primary-700">Tech</span>. I don't just quote regulations; I build the internal controls that make compliance operational.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-lg p-6 shadow-soft border-l-4 border-accent-500">
                <h3 className="text-lg font-semibold text-primary-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-500 rounded-full"></span>
                  Practical & CA-Friendly
                </h3>
                <p className="text-secondary-600">I simplify complex AI governance into practical language.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-soft border-l-4 border-primary-500">
                <h3 className="text-lg font-semibold text-primary-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                  Real Internal Controls
                </h3>
                <p className="text-secondary-600">Focus on actual implementation, not just theory.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-soft border-l-4 border-success-500">
                <h3 className="text-lg font-semibold text-primary-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-success-500 rounded-full"></span>
                  Proactive
                </h3>
                <p className="text-secondary-600">Preparing organizations for AI regulations before they hit.</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-soft border-l-4 border-accent-400">
                <h3 className="text-lg font-semibold text-primary-800 mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                  End-to-End Execution
                </h3>
                <p className="text-secondary-600">From strategy to full implementation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-b from-secondary-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"></div>
            <p className="text-lg text-secondary-600 mt-4 max-w-2xl mx-auto">
              Comprehensive solutions for AI governance, data privacy, and regulatory compliance
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-accent-500 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">AI Governance & Risk</h3>
              <p className="text-secondary-600 leading-relaxed">Risk tier mapping, AI lifecycle governance, audit checkpoints, and Responsible AI Frameworks.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-primary-500 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">DPDP Act Compliance</h3>
              <p className="text-secondary-600 leading-relaxed">Privacy Policies, Consent Frameworks, DPIAs, RoPAs, Data Registers, and implementation support.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-success-500 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-success-500 to-success-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">ISO/IEC 42001 (AIMS)</h3>
              <p className="text-secondary-600 leading-relaxed">Gap Assessment, Control Mapping, Policy Drafting, and Certification Readiness.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-accent-400 group hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Internal Controls for AI</h3>
              <p className="text-secondary-600 leading-relaxed">ICFR for AI workflows, auditing automation & agents, validation frameworks, and documentation.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 border-l-4 border-primary-400 group hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-3">Corporate Training</h3>
              <p className="text-secondary-600 leading-relaxed">DPDP Act & GDPR Workshops, Responsible AI for Finance, AI Automation in CA Practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">Achievements</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"></div>
            <p className="text-lg text-secondary-600 mt-4 max-w-2xl mx-auto">
              Recognized excellence in AI governance, data privacy, and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl p-6 md:p-8 shadow-soft border border-accent-200 hover:shadow-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medium">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Innovation Impact Award</h3>
                  <p className="text-secondary-700 leading-relaxed mb-3">
                    Awarded by <span className="font-semibold text-primary-800">Tally Solutions Pvt Ltd.</span> as Innovation Impact Award on CA Day 2025
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">CA Day 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 md:p-8 shadow-soft border border-primary-200 hover:shadow-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medium">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">AI in ICAI Hackathon Series</h3>
                  <p className="text-secondary-700 leading-relaxed mb-3">
                    Presented <span className="font-semibold text-primary-800">AI Readiness Assessment Tool</span> and <span className="font-semibold text-primary-800">DPDP Compliance Tool</span> in AI in ICAI hackathon Series
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="font-medium">ICAI Hackathon</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-success-50 to-accent-50 rounded-2xl p-6 md:p-8 shadow-soft border border-success-200 hover:shadow-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medium">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">National Speaker</h3>
                  <p className="text-secondary-700 leading-relaxed mb-3">
                    National Speaker at <span className="font-semibold text-primary-800">AI Innovation Summit 2025</span>, at Jaipur
                  </p>
                  <div className="flex items-center gap-2 text-sm text-success-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">Jaipur, 2025</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-success-50 rounded-2xl p-6 md:p-8 shadow-soft border border-accent-200 hover:shadow-strong transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-medium">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h10m-7 4h7M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2">Expert Speaker</h3>
                  <p className="text-secondary-700 leading-relaxed mb-3">
                    Several times speaker on the topic of <span className="font-semibold text-primary-800">Data Privacy</span> and <span className="font-semibold text-primary-800">AI Governance</span>
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-medium">Multiple Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-accent-400 to-accent-600 mx-auto rounded-full"></div>
            <p className="text-xl text-white/90 mt-6 max-w-2xl mx-auto">
              Connect for Strategy, Implementation, or Training.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-strong border border-white/20">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">CA Ranjan Singhal</h3>
                  <p className="text-white/80">AI Governance & Data Privacy Advisor</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Email</p>
                  <a href="mailto:ranjansinghal.ca@gmail.com" className="text-white hover:text-accent-200 font-medium transition-colors">
                    ranjansinghal.ca@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Phone</p>
                  <a href="tel:+919610131143" className="text-white hover:text-accent-200 font-medium transition-colors">
                    +91-9610131143
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-secondary-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <p className="text-white/90 mb-2">&copy; {new Date().getFullYear()} CA Ranjan Singhal. All Rights Reserved.</p>
            <p className="text-white/70 text-sm">Founder, AccruLabs.ai | DPDPA Unlocked</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
