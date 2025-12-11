import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '600', '700'] })

export const metadata: Metadata = {
  title: 'CA Ranjan Singhal - AI Governance & Data Privacy Advisor',
  description: 'I help organizations become AI-Ready, DPDP-Compliant, and ISO 42001-aligned by bridging the gap between technology, internal controls, and regulatory compliance.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

