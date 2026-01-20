import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react'

// Sample blog posts data (in production, this would come from MDX files or a CMS)
const blogPosts = [
  {
    slug: 'what-is-depin',
    title: 'What is DePIN? The Future of Decentralized Physical Infrastructure',
    excerpt: 'An introduction to Decentralized Physical Infrastructure Networks and why they matter for the future of blockchain technology.',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    tags: ['DePIN', 'Blockchain', 'Infrastructure'],
  },
  {
    slug: 'ai-agents-blockchain',
    title: 'When AI Agents Meet Blockchain: Building Autonomous Systems',
    excerpt: 'Exploring the convergence of artificial intelligence and blockchain technology to create truly autonomous decentralized systems.',
    date: '2024-01-08',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['AI Agents', 'Blockchain', 'ADAM'],
  },
  {
    slug: 'zero-knowledge-proofs-explained',
    title: 'Zero-Knowledge Proofs: Privacy Without Compromise',
    excerpt: 'A deep dive into zkSNARKs and how they enable privacy-preserving verification in blockchain applications.',
    date: '2024-01-02',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['zkSNARKs', 'Privacy', 'Cryptography'],
  },
  {
    slug: 'carbon-markets-blockchain',
    title: 'Fixing Carbon Markets with Blockchain Technology',
    excerpt: 'How decentralized systems can bring transparency and accountability to global carbon credit markets.',
    date: '2023-12-20',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    tags: ['Carbon Credits', 'Sustainability', 'TRACC'],
  },
]

export const metadata = {
  title: 'Blog',
  description: 'Thoughts on blockchain, AI agents, DePIN, and building decentralized systems for the real world.',
}

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-gold-500 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back home
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Blog & <span className="text-gradient">Writing</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-500 dark:text-dark-400 leading-relaxed">
            Thoughts on blockchain technology, AI agents, DePIN, zero-knowledge proofs,
            and building decentralized systems that work in the real world.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group card card-hover overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video -mx-6 -mt-6 mb-6 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={16} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white group-hover:text-gold-500 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-base text-dark-500 dark:text-dark-400 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-sm font-mono bg-gold-500/10 text-gold-500 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read more */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-gold-500 font-medium hover:gap-3 transition-all"
                >
                  Read more
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* How to Write Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <div className="card bg-gold-500/5 border-gold-500/20">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              ✍️ How to Add Blog Posts
            </h3>
            <div className="space-y-4 text-dark-600 dark:text-dark-300">
              <p>
                Adding new blog posts is simple. Create a new MDX file in the{' '}
                <code className="px-2 py-0.5 bg-dark-100 dark:bg-dark-800 rounded text-gold-500 font-mono text-sm">
                  content/blog/
                </code>{' '}
                directory.
              </p>
              <div className="p-4 bg-dark-900 rounded-lg overflow-x-auto">
                <pre className="text-sm text-dark-300 font-mono">
{`---
title: 'Your Post Title'
date: '2024-01-20'
excerpt: 'A brief description of your post.'
image: '/images/blog/your-image.jpg'
tags: ['Tag1', 'Tag2']
---

# Your content here

Write your post using **Markdown** syntax.
You can include code blocks, images, and more!`}
                </pre>
              </div>
              <p>
                The blog system supports MDX, so you can also include React components
                directly in your posts for interactive content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
