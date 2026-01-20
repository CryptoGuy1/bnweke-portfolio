'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'
import { siteConfig } from '@/lib/data'

const socialLinks = [
  { name: 'GitHub', href: siteConfig.social.github, icon: Github },
  { name: 'LinkedIn', href: siteConfig.social.linkedin, icon: Linkedin },
  { name: 'Twitter', href: siteConfig.social.twitter, icon: Twitter },
  { name: 'Email', href: `mailto:${siteConfig.email}`, icon: Mail },
]

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-8 border-t border-dark-100 dark:border-dark-800">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-base text-dark-500 dark:text-dark-400 text-center md:text-left">
            © {new Date().getFullYear()}{' '}
            <span className="text-dark-700 dark:text-dark-200">Benjamin Nweke</span>.
            Built with{' '}
            <span className="text-gold-500">♥</span> and{' '}
            <Link
              href="https://nextjs.org"
              target="_blank"
              className="text-gold-500 hover:underline"
            >
              Next.js
            </Link>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target={link.name !== 'Email' ? '_blank' : undefined}
                rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                className="p-2.5 text-dark-500 dark:text-dark-400 hover:text-gold-500 dark:hover:text-gold-500 transition-colors"
                aria-label={link.name}
              >
                <link.icon size={22} />
              </Link>
            ))}
          </div>

          {/* Version */}
          <p className="text-sm font-mono text-dark-400 dark:text-dark-500">
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
