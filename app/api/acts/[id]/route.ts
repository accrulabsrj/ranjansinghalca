import { NextResponse } from 'next/server'
import { getActDashboardDataAsync } from '@/data/acts/loader'
import { ActId } from '@/data/acts.meta'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params
    const actId = resolvedParams.id as ActId
    const data = await getActDashboardDataAsync(actId)
    
    if (!data) {
      return NextResponse.json({ error: 'Act data not found' }, { status: 404 })
    }
    
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error loading act data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

