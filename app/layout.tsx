import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bnweke.dev'),
  title: {
    default: 'Benjamin Nweke | Blockchain Researcher & Developer',
    template: '%s | Benjamin Nweke',
  },
  description:
    'PhD Candidate and Full-Stack Blockchain Developer specializing in DePIN, AI Agents, and Zero-Knowledge Cryptography. Building decentralized systems for real-world impact.',
  keywords: [
    'Benjamin Nweke',
    'Blockchain Developer',
    'DePIN',
    'AI Agents',
    'Zero Knowledge Proofs',
    'Smart Contracts',
    'Solidity',
    'Web3',
    'PhD Researcher',
    'University of Wyoming',
  ],
  authors: [{ name: 'Benjamin Nweke', url: 'https://bnweke.dev' }],
  creator: 'Benjamin Nweke',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bnweke.dev',
    siteName: 'Benjamin Nweke',
    title: 'Benjamin Nweke | Blockchain Researcher & Developer',
    description:
      'PhD Candidate and Full-Stack Blockchain Developer specializing in DePIN, AI Agents, and Zero-Knowledge Cryptography.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Benjamin Nweke - Blockchain Researcher & Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Benjamin Nweke | Blockchain Researcher & Developer',
    description:
      'PhD Candidate and Full-Stack Blockchain Developer specializing in DePIN, AI Agents, and Zero-Knowledge Cryptography.',
    creator: '@ben_paragon',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Noise texture overlay */}
          <div className="noise-overlay" />
          
          {/* Main content */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
