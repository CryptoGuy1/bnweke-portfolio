'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ExternalLink,
  ArrowRight,
  ChevronDown,
  Download,
  BookOpen,
} from 'lucide-react'
import {
  siteConfig,
  aboutContent,
  skills,
  projects,
  research,
  experience,
  testimonials,
  stats,
} from '@/lib/data'
import { cn } from '@/lib/utils'

// Animation variants
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

// Section wrapper with animation
function Section({
  id,
  className,
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={cn('section', className)}
    >
      {children}
    </motion.section>
  )
}

// Hero Section
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-6 md:px-8 overflow-hidden">
      {/* Background gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 dark:bg-gold-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gold-500/5 dark:bg-gold-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-1000" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-16 h-px bg-gold-500" />
            <span className="text-gold-500 font-mono text-base md:text-lg tracking-widest uppercase">
              PhD Candidate • Blockchain Researcher
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-none mb-6"
          >
            <span className="text-dark-900 dark:text-white">Benjamin</span>
            <br />
            <span className="text-gradient">Nweke</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-dark-500 dark:text-dark-300 max-w-3xl mb-10 leading-relaxed"
          >
            {siteConfig.tagline}.{' '}
            <span className="text-dark-700 dark:text-white">Building decentralized systems</span> that bridge
            blockchain, <span className="text-gold-500">AI agents</span>, and environmental sustainability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Link href="#projects" className="btn-primary text-lg px-8 py-4">
              View Projects
              <ArrowRight size={20} />
            </Link>
            <Link href="#about" className="btn-secondary text-lg px-8 py-4">
              About Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-5"
          >
            {[
              { icon: Github, href: siteConfig.social.github, label: 'GitHub' },
              { icon: Linkedin, href: siteConfig.social.linkedin, label: 'LinkedIn' },
              { icon: Twitter, href: siteConfig.social.twitter, label: 'Twitter' },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target={social.label !== 'Email' ? '_blank' : undefined}
                className="p-3 rounded-full border border-dark-200 dark:border-dark-700 text-dark-500 dark:text-dark-400 hover:border-gold-500 hover:text-gold-500 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </Link>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-dark-400 dark:text-dark-500 tracking-widest">SCROLL</span>
        <ChevronDown size={20} className="text-gold-500 animate-bounce" />
      </motion.div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-8 border-y border-dark-100 dark:border-dark-800 bg-dark-50 dark:bg-dark-900/50">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold-500 mb-2">
                {stat.value}
              </div>
              <div className="text-base md:text-lg text-dark-500 dark:text-dark-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// About Section
function AboutSection() {
  const allSkills = [
    ...skills.development,
    ...skills.blockchain,
    ...skills.aiAndData,
    ...skills.infrastructure,
  ]

  return (
    <Section id="about">
      <div className="container-custom">
        <motion.div variants={fadeInUp} className="section-header text-left md:text-center">
          <span className="section-label">01. About</span>
          <h2 className="section-title">
            Building the Future
            <br />
            <span className="text-gradient">One Block at a Time</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 leading-relaxed">
              {aboutContent.intro}
            </p>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 leading-relaxed">
              {aboutContent.description}
            </p>
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 leading-relaxed">
              {aboutContent.currentFocus}
            </p>

            {/* Education */}
            <div className="pt-6 space-y-4">
              <h3 className="text-xl font-semibold text-dark-800 dark:text-white">Education</h3>
              {aboutContent.education.map((edu, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500 mt-2.5 flex-shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-dark-800 dark:text-white">
                      {edu.degree}
                    </p>
                    <p className="text-base text-dark-500 dark:text-dark-400">
                      {edu.institution} • {edu.status}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={fadeInUp}>
            <div className="p-6 md:p-8 rounded-2xl bg-dark-50 dark:bg-dark-900 border border-dark-100 dark:border-dark-800">
              <div className="flex items-center gap-3 mb-6">
                <div className="font-mono text-gold-500">$</div>
                <div className="text-lg text-dark-500 dark:text-dark-400 font-mono">
                  cat skills.txt
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {allSkills.slice(0, 16).map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-base text-gold-500 font-mono"
                  >
                    <span className="text-dark-400">→</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// Projects Section
function ProjectsSection() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <Section id="projects" className="bg-dark-50 dark:bg-dark-900/50">
      <div className="container-custom">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-label">02. Projects</span>
          <h2 className="section-title">
            Featured <span className="text-gradient">Work</span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={cn(
                'grid lg:grid-cols-2 gap-8 lg:gap-16 items-center',
                index % 2 === 1 && 'lg:flex-row-reverse'
              )}
            >
              {/* Image */}
              <div className={cn('relative', index % 2 === 1 && 'lg:order-2')}>
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
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                      >
                        <Github size={22} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </Link>
                    )}
                  </div>
                </div>
                
                {/* Decorative border */}
                <div
                  className="absolute -inset-4 rounded-2xl border-2 opacity-20 -z-10"
                  style={{ borderColor: project.color }}
                />
              </div>

              {/* Content */}
              <div className={cn(index % 2 === 1 && 'lg:order-1')}>
                <span
                  className="inline-block px-3 py-1 text-sm font-mono rounded-full mb-4"
                  style={{
                    backgroundColor: `${project.color}15`,
                    color: project.color,
                  }}
                >
                  Featured Project
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-gold-500 mb-4">{project.subtitle}</p>
                <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-6">
                  {project.longDescription || project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm font-mono bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-2xl font-bold text-dark-800 dark:text-white text-center mb-12">
            Other Noteworthy Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="card card-hover group"
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="text-sm font-mono"
                    style={{ color: project.color }}
                  >
                    0{index + 4}
                  </span>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="text-dark-400 hover:text-gold-500 transition-colors"
                      >
                        <Github size={22} />
                      </Link>
                    )}
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="text-dark-400 hover:text-gold-500 transition-colors"
                      >
                        <ExternalLink size={22} />
                      </Link>
                    )}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-gold-500 transition-colors">
                  {project.title}
                </h4>
                <p className="text-base text-dark-500 dark:text-dark-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-sm font-mono text-dark-500 dark:text-dark-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}

// Research Section
function ResearchSection() {
  return (
    <Section id="research">
      <div className="container-custom">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-label">03. Research</span>
          <h2 className="section-title">
            Publications & <span className="text-gradient">Papers</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {research.map((paper, index) => (
            <motion.div
              key={paper.title}
              variants={fadeInUp}
              className="card card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <BookOpen size={20} className="text-gold-500 flex-shrink-0" />
                    <h3 className="text-lg md:text-xl font-semibold text-dark-900 dark:text-white">
                      {paper.title}
                    </h3>
                  </div>
                  <p className="text-base text-dark-500 dark:text-dark-400 ml-8">
                    {paper.venue}
                  </p>
                  <p className="text-base text-dark-400 dark:text-dark-500 ml-8 mt-1">
                    {paper.description}
                  </p>
                </div>
                <span
                  className="self-start md:self-center px-4 py-1.5 text-sm font-medium rounded-full whitespace-nowrap"
                  style={{
                    backgroundColor: `${paper.statusColor}15`,
                    color: paper.statusColor,
                  }}
                >
                  {paper.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ORCID and Scholar links */}
        <motion.div variants={fadeInUp} className="flex justify-center gap-6 mt-12">
          <Link
            href={siteConfig.social.orcid}
            target="_blank"
            className="btn-ghost text-base"
          >
            ORCID Profile →
          </Link>
          <Link
            href={siteConfig.social.googleScholar}
            target="_blank"
            className="btn-ghost text-base"
          >
            Google Scholar →
          </Link>
        </motion.div>
      </div>
    </Section>
  )
}

// Testimonials Section
function TestimonialsSection() {
  return (
    <Section className="bg-dark-50 dark:bg-dark-900/50">
      <div className="container-custom">
        <motion.div variants={fadeInUp} className="section-header">
          <span className="section-label">04. Testimonials</span>
          <h2 className="section-title">
            What People <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="card"
            >
              {/* Quote */}
              <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold text-dark-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-base text-dark-500 dark:text-dark-400">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

// Contact Section
function ContactSection() {
  return (
    <Section id="contact">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.span variants={fadeInUp} className="section-label">
            05. Contact
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-8"
          >
            Let's Build
            <br />
            <span className="text-gradient">Something Great</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-dark-500 dark:text-dark-400 mb-12 leading-relaxed"
          >
            Open to research collaborations, consulting opportunities, and conversations
            about blockchain, AI agents, and sustainable technology. Let's connect!
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`mailto:${siteConfig.email}`}
              className="btn-primary text-xl px-10 py-5"
            >
              <Mail size={24} />
              Say Hello
            </Link>
            <Link
              href={siteConfig.resumeUrl}
              target="_blank"
              className="btn-secondary text-xl px-10 py-5"
            >
              <Download size={24} />
              Download Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

// Main Page Component
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <ResearchSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
