'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Download } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-black/80 backdrop-blur-xl border-b border-dark-100 dark:border-dark-800'
            : 'bg-transparent'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 px-6 md:px-8">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-2xl md:text-3xl font-bold">
                <span className="text-gold-500">B</span>
                <span className="text-dark-900 dark:text-white">N</span>
              </span>
              <span className="text-gold-500 text-lg">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {siteConfig.navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-base text-dark-600 dark:text-dark-300 hover:text-gold-500 dark:hover:text-gold-500 transition-colors link-underline"
                >
                  <span className="text-gold-500 font-mono text-sm mr-1">
                    0{index + 1}.
                  </span>
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-lg text-dark-600 dark:text-dark-300 hover:text-gold-500 dark:hover:text-gold-500 hover:bg-dark-100 dark:hover:bg-dark-800 transition-all"
                aria-label="Toggle theme"
              >
                {mounted && (theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />)}
              </button>

              {/* Resume Button - Desktop */}
              <Link
                href={siteConfig.resumeUrl}
                target="_blank"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 border border-gold-500 text-gold-500 text-base font-medium rounded-lg hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                <Download size={18} />
                Resume
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2.5 rounded-lg text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-800 transition-all"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white dark:bg-dark-900 border-l border-dark-100 dark:border-dark-800 p-8"
            >
              <div className="flex flex-col gap-8 mt-16">
                {siteConfig.navLinks.map((link, index) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl text-dark-700 dark:text-dark-200 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
                  >
                    <span className="text-gold-500 font-mono text-base mr-2">
                      0{index + 1}.
                    </span>
                    {link.name}
                  </Link>
                ))}

                {/* Resume Button - Mobile */}
                <Link
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-black text-lg font-semibold rounded-lg hover:bg-gold-400 transition-all mt-4"
                >
                  <Download size={20} />
                  Download Resume
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
