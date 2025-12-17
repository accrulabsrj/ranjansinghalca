import { ActDashboardData } from '../act-structure'
import { ActId } from '../acts.meta'

// Server-side JSON loading
async function loadJSON(filePath: string): Promise<any> {
  try {
    // Only use fs on server-side
    if (typeof window === 'undefined') {
      // Use dynamic require for Node.js modules
      const fs = require('fs')
      const path = require('path')
      const fullPath = path.join(process.cwd(), 'data', 'acts', filePath)
      
      // Check if file exists
      if (!fs.existsSync(fullPath)) {
        console.error(`File not found: ${fullPath}`)
        return null
      }
      
      const data = fs.readFileSync(fullPath, 'utf-8')
      const parsed = JSON.parse(data)
      return parsed
    }
    return null
  } catch (error: any) {
    console.error(`Error loading ${filePath}:`, error?.message || error)
    return null
  }
}

export async function getActDashboardDataAsync(actId: ActId): Promise<ActDashboardData | null> {
  try {
    switch (actId) {
      case 'dpdpa':
        return await loadJSON('dpdpa.json')
      case 'dpdp_rules':
        return await loadJSON('dpdp-rules.json')
      case 'eu_ai_act':
        return await loadJSON('eu-ai-act.json')
      case 'it_act_2000':
        return await loadJSON('it-act-2000.json')
      case 'saaa100':
        return await loadJSON('saaa100.json')
      case 'pdpl':
        return await loadJSON('pdpl.json')
      case 'gdpr':
        return await loadJSON('gdpr.json')
      case 'cgst_act':
        return await loadJSON('cgst-act.json')
      case 'rgst_act':
        return await loadJSON('rgst-act.json')
      case 'igst_act':
        return await loadJSON('igst-act.json')
      case 'income_tax_1961':
        return await loadJSON('income-tax-1961.json')
      case 'income_tax_new':
        return await loadJSON('income-tax-new.json')
      default:
        return null
    }
  } catch (error) {
    console.error(`Error loading dashboard data for ${actId}:`, error)
    return null
  }
}

// For client-side, we'll use a different approach
const actDataCache: Record<ActId, ActDashboardData | null> = {
  dpdpa: null,
  dpdp_rules: null,
  gdpr: null,
  eu_ai_act: null,
  pdpl: null,
  it_act_2000: null,
  saaa100: null,
  cgst_act: null,
  rgst_act: null,
  igst_act: null,
  income_tax_1961: null,
  income_tax_new: null,
}

export function getActDashboardData(actId: ActId): ActDashboardData | null {
  // This will be populated by fetching from API route
  return actDataCache[actId] || null
}

export function hasDashboardData(actId: ActId): boolean {
  return actDataCache[actId] !== null
}

