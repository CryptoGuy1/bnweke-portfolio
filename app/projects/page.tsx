'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/data'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-8">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg text-dark-500 dark:text-dark-400 hover:text-gold-500 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back home
          </Link>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            All <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-500 dark:text-dark-400 leading-relaxed">
            A collection of blockchain, AI, and full-stack projects I've built—from 
            DePIN environmental monitoring to DeFi automation and luxury e-commerce.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid gap-12"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-video rounded-2xl overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Overlay links */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github size={24} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                        aria-label={`View ${project.title} live`}
                      >
                        <ExternalLink size={24} />
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Decorative border */}
                <div
                  className="absolute -inset-3 rounded-2xl border-2 opacity-20 -z-10"
                  style={{ borderColor: project.color }}
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="px-4 py-1.5 text-base font-mono rounded-full"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                    }}
                  >
                    0{index + 1}
                  </span>
                  {project.featured && (
                    <span className="px-3 py-1 text-sm bg-gold-500/10 text-gold-500 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-xl text-gold-500 mb-4">{project.subtitle}</p>
                <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                  {project.longDescription || project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 text-base font-mono bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 border border-dark-200 dark:border-dark-700 text-dark-700 dark:text-dark-200 rounded-lg hover:border-gold-500 hover:text-gold-500 transition-all text-lg"
                    >
                      <Github size={20} />
                      View Code
                    </Link>
                  )}
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-black rounded-lg hover:bg-gold-400 transition-all text-lg font-medium"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
