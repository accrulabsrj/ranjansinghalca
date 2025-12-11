/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // CRITICAL: Only use standalone output in production builds
  // This prevents webpack chunk resolution issues (like './276.js' errors) in development
  // NEVER enable standalone in development mode - it breaks webpack chunk loading
  ...(process.env.NODE_ENV === 'production' && { output: 'standalone' }),
}

// Additional safeguard: Explicitly prevent standalone in development
if (process.env.NODE_ENV !== 'production' && nextConfig.output === 'standalone') {
  delete nextConfig.output
  console.warn('⚠️  WARNING: Standalone output disabled in development mode to prevent webpack errors')
}

module.exports = nextConfig

