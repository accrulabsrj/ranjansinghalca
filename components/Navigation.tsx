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
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white font-bold text-sm">
              CA
            </div>
            <span className="font-semibold text-lg text-gray-900">Ranjan Singhal</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {isHomePage ? (
              <>
                <a 
                  href="#about" 
                  onClick={(e) => handleAnchorClick(e, '#about')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  About
                </a>
                <a 
                  href="#services" 
                  onClick={(e) => handleAnchorClick(e, '#services')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  Services
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleAnchorClick(e, '#contact')}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  Contact
                </a>
                
                {/* Regulations and Acts Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setActsDropdownOpen(!actsDropdownOpen)}
                    className={`text-gray-600 hover:text-gray-900 px-3 py-2 text-sm flex items-center gap-1 ${
                      pathname?.startsWith('/dashboard/acts') ? 'text-blue-600 font-medium' : ''
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
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href="/dashboard"
                        onClick={() => setActsDropdownOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                      >
                        All Acts Dashboard
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setActsDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                            pathname === `/dashboard/acts/${act.id}` ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'
                          }`}
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link 
                  href="/#about"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  About
                </Link>
                <Link 
                  href="/#services"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  Services
                </Link>
                <Link 
                  href="/#contact"
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                >
                  Contact
                </Link>
                
                {/* Regulations and Acts Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setActsDropdownOpen(!actsDropdownOpen)}
                    className={`text-gray-600 hover:text-gray-900 px-3 py-2 text-sm flex items-center gap-1 ${
                      pathname?.startsWith('/dashboard/acts') ? 'text-blue-600 font-medium' : ''
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
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                      <Link
                        href="/dashboard"
                        onClick={() => setActsDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm hover:bg-gray-50 font-medium ${
                          pathname === '/dashboard' ? 'bg-blue-50 text-blue-700' : 'text-gray-700'
                        }`}
                      >
                        All Acts Dashboard
                      </Link>
                      <div className="border-t border-gray-200 my-1"></div>
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setActsDropdownOpen(false)}
                          className={`block px-4 py-2 text-sm hover:bg-gray-50 ${
                            pathname === `/dashboard/acts/${act.id}` ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-600'
                          }`}
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {isHomePage ? (
                <>
                  <a 
                    href="#about" 
                    onClick={(e) => handleAnchorClick(e, '#about')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                  >
                    About
                  </a>
                  <a 
                    href="#services" 
                    onClick={(e) => handleAnchorClick(e, '#services')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                  >
                    Services
                  </a>
                  <a 
                    href="#contact" 
                    onClick={(e) => handleAnchorClick(e, '#contact')}
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                  >
                    Contact
                  </a>
                  <div className="px-3 py-2">
                    <div className="text-gray-600 text-sm font-medium mb-2">Regulations and Acts</div>
                    <Link 
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-blue-600 hover:text-blue-700 px-4 py-2 text-sm font-medium"
                    >
                      All Acts Dashboard
                    </Link>
                    <div className="mt-2 space-y-1">
                      {acts.map((act) => (
                        <Link
                          key={act.id}
                          href={`/dashboard/acts/${act.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-gray-600 hover:text-gray-900 px-4 py-1.5 text-sm"
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link 
                    href="/#about"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                  >
                    About
                  </Link>
                  <Link 
                    href="/#services"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                  >
                    Services
                  </Link>
                  <Link 
                    href="/#contact"
                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
                  >
                    Contact
                  </Link>
                  <div className="px-3 py-2">
                    <div className="text-gray-600 text-sm font-medium mb-2">Regulations and Acts</div>
                    <Link 
                      href="/dashboard"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 text-sm font-medium ${
                        pathname === '/dashboard'
                          ? 'text-blue-700 bg-blue-50'
                          : 'text-blue-600 hover:text-blue-700'
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
                          className={`block px-4 py-1.5 text-sm ${
                            pathname === `/dashboard/acts/${act.id}`
                              ? 'text-blue-700 bg-blue-50 font-medium'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {act.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
