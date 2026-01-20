import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    slug: 'what-is-depin',
    title: 'What is DePIN? The Future of Decentralized Physical Infrastructure',
    excerpt: 'An introduction to Decentralized Physical Infrastructure Networks and why they matter for the future of blockchain technology.',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80',
    tags: ['DePIN', 'Blockchain', 'Infrastructure'],
    content: `
## What is DePIN?

**DePIN** stands for **Decentralized Physical Infrastructure Networks**. It represents a paradigm shift in how we build, operate, and maintain real-world infrastructure using blockchain technology and token incentives.

Instead of relying on centralized corporations to build and control critical infrastructure, DePIN enables anyone to contribute resources—whether that's wireless coverage, computing power, storage capacity, or sensor data—and earn rewards for their participation.

## The Problem with Traditional Infrastructure

Traditional infrastructure models have served us for decades, but they come with significant limitations:

### Centralized Control

When a single company controls an entire network—whether it's telecommunications, energy, or data storage—users are at their mercy. Prices are dictated, not negotiated. Service quality depends on corporate priorities, not user needs.

### High Barriers to Entry

Building infrastructure traditionally requires massive capital investment. Only well-funded corporations can participate, creating oligopolies that stifle innovation and competition.

### Single Points of Failure

Centralized systems are inherently vulnerable. A server outage, natural disaster, or cyberattack can bring entire networks down, affecting millions of users simultaneously.

## How DePIN Solves These Problems

DePIN flips the traditional model through three key mechanisms:

### 1. Token Incentives

Participants earn cryptocurrency tokens for contributing resources to the network. This creates a powerful economic incentive for individuals to deploy and maintain infrastructure.

### 2. Decentralized Coordination

Smart contracts automatically manage the network—verifying contributions, distributing rewards, and enforcing quality standards. No central authority is needed.

### 3. Community Ownership

Token holders collectively govern the network through decentralized governance mechanisms. Users aren't just customers; they're stakeholders.

## Real-World DePIN Applications

- **Helium**: Decentralized wireless network with 900,000+ hotspots
- **Filecoin**: Decentralized storage with 20+ exabytes capacity
- **Render Network**: Decentralized GPU computing
- **TRACC**: My project for decentralized environmental monitoring

## Why DePIN Matters

DePIN will be transformative for climate action, digital inclusion, resilience, and economic opportunity. The infrastructure of the future won't be built by corporations alone—it will be built by all of us, one node at a time.
    `,
  },
  {
    slug: 'ai-agents-blockchain',
    title: 'When AI Agents Meet Blockchain: Building Autonomous Systems',
    excerpt: 'Exploring the convergence of artificial intelligence and blockchain technology to create truly autonomous decentralized systems.',
    date: '2024-01-08',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['AI Agents', 'Blockchain', 'ADAM'],
    content: `
## When AI Agents Meet Blockchain

The convergence of artificial intelligence and blockchain technology is creating something entirely new: autonomous systems that can perceive, decide, and act without human intervention—while maintaining transparency and accountability.

This is the focus of my **ADAM Framework** (Agentic Decentralized Autonomous Machines).

## The Limitations of Each Technology Alone

### AI Without Blockchain

Traditional AI systems are powerful but opaque. When an AI makes a decision, users must trust the operator. There's no independent verification, no tamper-proof audit trail.

### Blockchain Without AI

Blockchain provides transparency and immutability, but smart contracts are deterministic—they can only execute predefined logic. They can't adapt or make nuanced decisions.

## The Power of Convergence

When AI agents operate on blockchain infrastructure, we get:

- **Verifiable Execution**: Every action recorded on-chain
- **Decentralized Control**: Community governance via tokens
- **Trustless Coordination**: Smart contracts enforce agreements
- **Economic Alignment**: Token incentives shape behavior

## The ADAM Architecture

### Perception Layer
AI agents receive data from IoT sensors—temperature, air quality, emissions. Multiple agents cross-validate readings.

### Decision Layer
Using LLMs and ML models, agents interpret data in context. Crucially, they log reasoning on-chain for auditing.

### Action Layer
Agents execute blockchain transactions—minting tokens, triggering alerts, updating records.

### Governance Layer
Token holders vote on parameters: thresholds, protocols, model updates.

## The Future

AI-blockchain convergence will enable autonomous systems that are more capable and more trustworthy than either technology alone.
    `,
  },
  {
    slug: 'zero-knowledge-proofs-explained',
    title: 'Zero-Knowledge Proofs: Privacy Without Compromise',
    excerpt: 'A deep dive into zkSNARKs and how they enable privacy-preserving verification in blockchain applications.',
    date: '2024-01-02',
    readTime: '15 min read',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    tags: ['zkSNARKs', 'Privacy', 'Cryptography'],
    content: `
## Zero-Knowledge Proofs: Privacy Without Compromise

Imagine proving you're over 21 without revealing your birthdate. Or proving your factory meets emission standards without revealing proprietary data.

This is the magic of **zero-knowledge proofs**—a cornerstone of my **zkCarbon Registry** project.

## What is a Zero-Knowledge Proof?

A zero-knowledge proof allows one party (the prover) to convince another party (the verifier) that a statement is true, without revealing any information beyond the truth of that statement.

Three properties define it:

- **Completeness**: If true, the verifier will be convinced
- **Soundness**: If false, no cheating prover can convince the verifier
- **Zero-Knowledge**: The verifier learns nothing beyond the statement's truth

## zkSNARKs Explained

**zkSNARK** = Zero-Knowledge Succinct Non-Interactive Argument of Knowledge

- **Succinct**: Proofs are small and fast to verify
- **Non-Interactive**: One message from prover to verifier
- **Argument of Knowledge**: Prover must actually "know" the secret

## zkCarbon: Privacy-Preserving Carbon Credits

Companies can prove:
- Emissions decreased by X%
- Methodology follows standards
- Calculations are correct

**Without revealing**:
- Actual emission levels
- Production volumes
- Operational details

## Applications Beyond Carbon

- **Financial Privacy**: Prove sufficient funds without revealing balance
- **Identity**: Prove citizenship without revealing ID number
- **Healthcare**: Prove vaccination without medical history
- **Voting**: Prove valid vote without revealing choice

Zero-knowledge proofs will become as fundamental to the internet as encryption.
    `,
  },
  {
    slug: 'carbon-markets-blockchain',
    title: 'Fixing Carbon Markets with Blockchain Technology',
    excerpt: 'How decentralized systems can bring transparency and accountability to global carbon credit markets.',
    date: '2023-12-20',
    readTime: '10 min read',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    tags: ['Carbon Credits', 'Sustainability', 'TRACC'],
    content: `
## Fixing Carbon Markets with Blockchain

Carbon markets are broken. Despite billions traded, they've failed to meaningfully reduce emissions. The problems: opacity, fraud, double-counting, and disconnect from actual impact.

Blockchain offers solutions. This is what my **TRACC** system addresses.

## What's Wrong with Carbon Markets

### The Verification Problem
Annual audits are slow, expensive, gameable, and inconsistent.

### The Double-Counting Problem
Same reduction claimed by project developer, buyer, host country, and intermediaries.

### The Fraud Problem
Forest projects where trees don't exist. Credits sold multiple times.

## How Blockchain Fixes This

- **Transparent Records**: Every credit on a public ledger. Double-counting impossible.
- **Real-Time Verification**: IoT sensors feed smart contracts directly.
- **Automated Compliance**: Rules enforced automatically.

## TRACC: Real-Time Accountability

### Carbon Burden Tokens (CBTs)

Traditional credits reward good behavior. TRACC introduces the opposite: **CBTs represent environmental liability**.

When sensors detect excessive emissions, CBTs are automatically minted to the polluter. Immediate financial consequences.

### How It Works

1. Sensor detects excessive emissions
2. Data validated by multiple nodes
3. Smart contract mints CBTs
4. Company's liability increases instantly

### DePIN Sensor Networks

Independent operators deploy sensors, earning rewards for accurate data. Dense coverage, redundancy, aligned incentives.

## The Path Forward

Blockchain-based carbon markets are more accurate, trustworthy, efficient, and transparent. TRACC demonstrates that real-time carbon accountability is possible today.
    `,
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-8">
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-gold-500 transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Back to blog
        </Link>

        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm font-mono bg-gold-500/10 text-gold-500 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-dark-900 dark:text-white mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-dark-500 dark:text-dark-400">
            <span className="flex items-center gap-2">
              <User size={18} />
              Benjamin Nweke
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={18} />
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={18} />
              {post.readTime}
            </span>
          </div>
        </div>

        <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="prose prose-lg dark:prose-invert prose-headings:font-display prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-dark-600 dark:prose-p:text-dark-300 prose-p:leading-relaxed prose-strong:text-dark-900 dark:prose-strong:text-white prose-ul:text-dark-600 dark:prose-ul:text-dark-300 prose-li:my-1 max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-2xl md:text-3xl font-bold text-dark-900 dark:text-white mt-12 mb-4">{paragraph.replace('## ', '')}</h2>
            }
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-xl md:text-2xl font-bold text-dark-900 dark:text-white mt-8 mb-3">{paragraph.replace('### ', '')}</h3>
            }
            if (paragraph.startsWith('- ')) {
              return <li key={index} className="text-lg text-dark-600 dark:text-dark-300 ml-6">{paragraph.replace('- ', '')}</li>
            }
            if (paragraph.trim() === '') {
              return null
            }
            return <p key={index} className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed mb-4">{paragraph}</p>
          })}
        </div>

        <div className="mt-16 pt-8 border-t border-dark-200 dark:border-dark-700">
          <p className="text-dark-500 dark:text-dark-400 mb-4">
            Want to discuss this topic?
          </p>
          <div className="flex gap-4">
            
              href="https://x.com/ben_paragon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Twitter
            </a>
            
              href="mailto:bnweke.eng@gmail.com"
              className="btn-primary"
            >
              Email Me
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}