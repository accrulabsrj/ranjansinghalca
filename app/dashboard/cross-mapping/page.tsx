import Navigation from '@/components/Navigation'
import { getAllActs } from '@/data/acts.meta'
import CrossMappingView from '@/components/CrossMappingView'

export default function CrossMappingPage() {
  const acts = getAllActs()
  const saa100 = acts.find(act => act.id === 'saaa100')
  const otherActs = acts.filter(act => act.id !== 'saaa100')

  return (
    <div className="min-h-screen bg-accru-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-accru-dark mb-4">
            Cross-Mapping: Laws & SAAA-100
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Understand how different legal frameworks relate to the SAAA-100 audit standard.
            This mapping helps CAs and AI governance consultants identify compliance requirements
            across multiple jurisdictions.
          </p>
        </div>

        {saa100 && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 mb-8">
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
                  Important: SAAA-100 is a Draft Proposal
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>
                    <strong>SAAA-100</strong> is a draft proposal by <strong>CA Ranjan Singhal</strong> and
                    is not a final standard. This cross-mapping is provided for reference purposes only
                    and should not be considered as an official or finalized standard.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <CrossMappingView saa100={saa100} otherActs={otherActs} />
      </main>
    </div>
  )
}

