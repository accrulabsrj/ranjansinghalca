'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import { getAllActs } from '@/data/acts.meta'

export default function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [actsDropdownOpen, setActsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const acts = getAllActs()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActsDropdownOpen(false)
      }
    }

    if (actsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [actsDropdownOpen])

  const isHomePage = pathname === '/'

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="bg-white border-b border-secondary-200 sticky top-0 z-50 shadow-soft backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-900 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-medium group-hover:shadow-strong transition-all duration-300 group-hover:scale-105">
              CA
            </div>
            <span className="font-semibold text-lg text-primary-900 group-hover:text-primary-700 transition-colors">Ranjan Singhal</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isHomePage ? (
              <>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  Services
                </a>
                <a 
                  href="#achievements" 
                  onClick={(e) => handleAnchorClick(e, '#achievements')}
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  Achievements
                </a>
                
                {/* AccruLabs.ai Link */}
                <a 
                  href="https://www.AccruLabs.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  AccruLabs.ai
                </a>
                
                {/* Regulations and Acts Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setActsDropdownOpen(!actsDropdownOpen)}
                    className={`px-3 py-2 text-sm flex items-center gap-1 font-medium transition-colors rounded-md ${
                      pathname?.startsWith('/dashboard/acts') 
                        ? 'text-accent-600 bg-accent-50' 
                        : 'text-secondary-600 hover:text-primary-700 hover:bg-secondary-50'
                    }`}
                  >
                    Regulations and Acts
                    <svg 
                      className={`w-4 h-4 transition-transform ${actsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {actsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-strong border border-secondary-200 py-2 z-50 overflow-hidden">
                      <Link
                        href="/dashboard"
                        onClick={() => setActsDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-secondary-700 hover:bg-accent-50 hover:text-accent-700 font-medium transition-colors"
                      >
                        All Acts Dashboard
                      </Link>
                      <div className="border-t border-secondary-200 my-1"></div>
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setActsDropdownOpen(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === `/dashboard/acts/${act.id}` 
                              ? 'bg-accent-50 text-accent-700 font-medium border-l-4 border-accent-500' 
                              : 'text-secondary-600 hover:bg-secondary-50 hover:text-primary-700'
                          }`}
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <a 
                  href="#about" 
                  onClick={(e) => handleAnchorClick(e, '#about')}
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  About
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  Contact
                </a>
              </>
            ) : (
              <>
                <Link 
                  href="/#services"
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  Services
                </Link>
                <Link 
                  href="/#achievements"
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  Achievements
                </Link>
                
                {/* AccruLabs.ai Link */}
                <a 
                  href="https://www.AccruLabs.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  AccruLabs.ai
                </a>
                
                {/* Regulations and Acts Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setActsDropdownOpen(!actsDropdownOpen)}
                    className={`px-3 py-2 text-sm flex items-center gap-1 font-medium transition-colors rounded-md ${
                      pathname?.startsWith('/dashboard/acts') 
                        ? 'text-accent-600 bg-accent-50' 
                        : 'text-secondary-600 hover:text-primary-700 hover:bg-secondary-50'
                    }`}
                  >
                    Regulations and Acts
                    <svg 
                      className={`w-4 h-4 transition-transform ${actsDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {actsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-strong border border-secondary-200 py-2 z-50 overflow-hidden">
                      <Link
                        href="/dashboard"
                        onClick={() => setActsDropdownOpen(false)}
                        className={`block px-4 py-2.5 text-sm transition-colors font-medium ${
                          pathname === '/dashboard' 
                            ? 'bg-accent-50 text-accent-700 border-l-4 border-accent-500' 
                            : 'text-secondary-700 hover:bg-accent-50 hover:text-accent-700'
                        }`}
                      >
                        All Acts Dashboard
                      </Link>
                      <div className="border-t border-secondary-200 my-1"></div>
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setActsDropdownOpen(false)}
                          className={`block px-4 py-2.5 text-sm transition-colors ${
                            pathname === `/dashboard/acts/${act.id}` 
                              ? 'bg-accent-50 text-accent-700 font-medium border-l-4 border-accent-500' 
                              : 'text-secondary-600 hover:bg-secondary-50 hover:text-primary-700'
                          }`}
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  href="/#about"
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  About
                </Link>
                <Link 
                  href="/#contact"
                  className="text-secondary-600 hover:text-primary-700 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-secondary-50"
                >
                  Contact
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary-600 hover:text-primary-700 p-2 rounded-md hover:bg-secondary-50 transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-200 bg-secondary-50/50">
            <div className="flex flex-col space-y-1">
              {isHomePage ? (
                <>
                  <a 
                    href="#services" 
                    onClick={(e) => handleAnchorClick(e, '#services')}
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    Services
                  </a>
                  <a 
                    href="#achievements" 
                    onClick={(e) => handleAnchorClick(e, '#achievements')}
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    Achievements
                  </a>
                  
                  {/* AccruLabs.ai Link */}
                  <a 
                    href="https://www.AccruLabs.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    AccruLabs.ai
                  </a>
                  
                  <div className="px-3 py-3 mt-2">
                    <div className="text-secondary-700 text-sm font-semibold mb-3">Regulations and Acts</div>
                    <Link 
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-accent-600 hover:text-accent-700 hover:bg-white px-4 py-2.5 text-sm font-medium rounded-md transition-colors"
                    >
                      All Acts Dashboard
                    </Link>
                    <div className="mt-2 space-y-1">
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-secondary-600 hover:text-primary-700 hover:bg-white px-4 py-2 text-sm rounded-md transition-colors"
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href="#about" 
                    onClick={(e) => handleAnchorClick(e, '#about')}
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleAnchorClick(e, '#contact')}
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    Contact
                  </a>
                </>
              ) : (
                <>
                  <Link 
                    href="/#services"
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/#achievements"
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    Achievements
                  </Link>
                  
                  {/* AccruLabs.ai Link */}
                  <a 
                    href="https://www.AccruLabs.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    AccruLabs.ai
                  </a>
                  
                  <div className="px-3 py-3 mt-2">
                    <div className="text-secondary-700 text-sm font-semibold mb-3">Regulations and Acts</div>
                    <Link 
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        pathname === '/dashboard'
                          ? 'text-accent-700 bg-accent-50'
                          : 'text-accent-600 hover:text-accent-700 hover:bg-white'
                      }`}
                    >
                      All Acts Dashboard
                    </Link>
                    <div className="mt-2 space-y-1">
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-4 py-2 text-sm rounded-md transition-colors ${
                            pathname === `/dashboard/acts/${act.id}`
                              ? 'text-accent-700 bg-accent-50 font-medium'
                              : 'text-secondary-600 hover:text-primary-700 hover:bg-white'
                          }`}
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="/#about"
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    About
                  </Link>
                  <Link 
                    href="/#contact"
                    className="text-secondary-700 hover:text-primary-700 hover:bg-white px-3 py-2.5 text-sm font-medium rounded-md transition-colors"
                  >
                    Contact
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
