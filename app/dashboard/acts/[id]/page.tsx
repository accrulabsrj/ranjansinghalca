import { notFound } from 'next/navigation'
import { getActById, getAllActs } from '@/data/acts.meta'
import { getActDashboardDataAsync } from '@/data/acts/loader'
import Navigation from '@/components/Navigation'
import ActDashboard from '@/components/ActDashboard'

export const dynamicParams = true

export async function generateStaticParams() {
  const acts = getAllActs()
  return acts.map((act) => ({
    id: act.id,
  }))
}

export default async function ActPage({ params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params
    const actId = resolvedParams.id
    
    if (!actId) {
      notFound()
    }

    const act = getActById(actId as any)

    if (!act) {
      notFound()
    }

    // Fetch dashboard data server-side with error handling
    let dashboardData = null
    try {
      dashboardData = await getActDashboardDataAsync(act.id)
      console.log(`Loaded dashboard data for ${act.id}:`, dashboardData ? 'Success' : 'Null')
    } catch (error) {
      console.error(`Error loading dashboard data for ${act.id}:`, error)
      // Continue with null data - component will handle it
    }

    return (
      <div className="min-h-screen bg-accru-bg">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          {/* Debug: Ensure page is rendering */}
          <div style={{ display: 'none' }} data-testid="act-page-loaded">
            Act page loaded for: {act.id}
          </div>
          <ActDashboard act={act} dashboardData={dashboardData} />
        </div>
      </div>
    )
  } catch (error: any) {
    console.error('Error rendering ActPage:', error)
    // Don't throw - let the error boundary handle it
    return (
      <div className="min-h-screen bg-accru-bg">
        <Navigation />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <h2 className="text-xl font-bold text-red-800 mb-2">Error Loading Act</h2>
            <p className="text-red-700 mb-2">
              There was an error loading this act. Please try again or go back to the home page.
            </p>
            <p className="text-red-600 text-sm">
              Error: {error?.message || 'Unknown error'}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

