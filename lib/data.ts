// Site configuration and content data

export const siteConfig = {
  name: 'Benjamin Nweke',
  title: 'Blockchain Researcher & Developer',
  description: 'PhD Candidate and Full-Stack Blockchain Developer specializing in DePIN, AI Agents, and Zero-Knowledge Cryptography.',
  tagline: 'Building the future one block at a time',
  email: 'bnweke.eng@gmail.com',
  url: 'https://bnweke.dev',
  resumeUrl: '/resume.pdf',
  location: 'Laramie, Wyoming',
  
  social: {
    github: 'https://github.com/CryptoGuy1',
    linkedin: 'https://www.linkedin.com/in/benjamin-c-nweke',
    twitter: 'https://x.com/ben_paragon',
    googleScholar: 'https://scholar.google.com/citations?user=benjamin-nweke',
    orcid: 'https://orcid.org/0009-0006-6780-9893',
  },
  
  navLinks: [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ],
}

export const aboutContent = {
  intro: `I'm a PhD Candidate in Energy & Petroleum Engineering at the University of Wyoming, 
  researching the intersection of blockchain technology, AI agents, and environmental sustainability.`,
  
  description: `With 7+ years of blockchain development experience, I specialize in building 
  decentralized systems that bridge the digital and physical worlds. My work focuses on 
  Decentralized Physical Infrastructure Networks (DePIN), autonomous agent frameworks, 
  and privacy-preserving protocols using zero-knowledge proofs.`,
  
  currentFocus: `Currently building the ADAM framework—Agentic Decentralized Autonomous Machines—which 
  integrates AI agents with blockchain governance for environmental monitoring. My research on 
  the zk-D3 framework was published at ICBTA 2025 in Japan.`,
  
  education: [
    {
      degree: 'PhD in Energy & Petroleum Engineering',
      institution: 'University of Wyoming',
      minor: 'Computer Science',
      status: 'Expected December 2026',
      gpa: '4.00/4.00',
    },
    {
      degree: 'PGP in AI Agents for Business Applications',
      institution: 'UT Austin McCombs',
      status: 'In Progress',
    },
    {
      degree: 'B.Eng in Chemical Engineering',
      institution: 'Federal University of Technology, Owerri',
      status: 'First Class Honors',
      gpa: '4.45/5.00',
    },
  ],
}

export const skills = {
  development: [
    'Solidity',
    'TypeScript',
    'React / Next.js',
    'Node.js',
    'Rust',
    'Go',
    'GraphQL',
    'Python',
  ],
  blockchain: [
    'Hyperledger Fabric',
    'Hyperledger Besu',
    'Hardhat / Foundry',
    'Web3.js / Ethers.js',
    'zkSNARKs (Circom)',
    'ERC Standards',
    'Chainlink Oracles',
    'IPFS',
  ],
  aiAndData: [
    'CrewAI',
    'LangChain',
    'Machine Learning',
    'TensorFlow',
    'FastAPI',
    'Data Analysis',
    'Pandas / NumPy',
    'PostgreSQL',
  ],
  infrastructure: [
    'Docker',
    'AWS / GCP',
    'Kubernetes',
    'Redis',
    'MQTT',
    'Raspberry Pi / IoT',
    'CI/CD',
    'Linux',
  ],
}

export const projects = [
  {
    id: 'tracc',
    title: 'TRACC',
    subtitle: 'Carbon Emission Tracking via DePIN',
    description: 'Real-time carbon emission tracking system using Decentralized Physical Infrastructure Networks. Introduces Carbon Burden Tokens (CBTs) that represent environmental liability, creating immediate financial consequences for pollution events.',
    longDescription: `Unlike traditional carbon credits that reward good behavior retrospectively, TRACC introduces Carbon Burden Tokens (CBTs) that represent environmental liability. When IoT sensors detect emissions exceeding thresholds, CBTs are automatically minted and assigned to polluters, creating immediate financial accountability. The system achieves sub-2-second response times with 99%+ reliability.`,
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80',
    tags: ['Solidity', 'React', 'Polygon', 'IoT', 'DePIN'],
    liveUrl: 'https://trac-alpha.vercel.app',
    githubUrl: '',
    featured: true,
    color: '#22c55e',
  },
  {
    id: 'adam',
    title: 'ADAM Framework',
    subtitle: 'Agentic Decentralized Autonomous Machines',
    description: 'AI agents integrated with blockchain governance for environmental monitoring. Autonomous agents coordinate sensor networks, validate data, and execute on-chain transactions without human intervention.',
    longDescription: `ADAM represents the convergence of AI and blockchain—autonomous agents that can monitor environmental conditions, make decisions, and execute blockchain transactions independently. Built with CrewAI for multi-agent orchestration, the framework enables trustless coordination of physical infrastructure through smart contracts.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Python', 'CrewAI', 'Solidity', 'Hyperledger', 'IoT'],
    liveUrl: '',
    githubUrl: 'https://github.com/CryptoGuy1/Agentic-Decentralized-Autonomous-Machines-ADAM-',
    featured: true,
    color: '#f59e0b',
  },
  {
    id: 'defi-agents',
    title: 'DeFi Agents',
    subtitle: 'Multi-Agent DeFi Strategy Execution',
    description: 'Autonomous DeFi strategy framework with specialized agents for yield optimization, arbitrage hunting, liquidation protection, and risk management—all with explainable AI and human oversight.',
    longDescription: `A sophisticated multi-agent system for decentralized finance. Features Yield Optimizer, Arbitrage Hunter, Liquidation Protector, and Risk Manager agents working in concert. Every decision includes logged reasoning for transparency, and high-value actions require human approval. Built with ERC-4626 vaults and protocol adapters for Aave, Uniswap, and Compound.`,
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    tags: ['Python', 'LangChain', 'Solidity', 'FastAPI', 'React'],
    liveUrl: '',
    githubUrl: 'https://github.com/CryptoGuy1/DeFi-Agents',
    featured: true,
    color: '#8b5cf6',
  },
  {
    id: 'mev-shield',
    title: 'MEV Shield',
    subtitle: 'AI-Powered MEV Protection',
    description: 'Machine learning-powered MEV detection and protection protocol. Classifies transaction risk in under 100ms and routes high-risk transactions through private mempools.',
    longDescription: `MEV Shield uses an ensemble of Random Forest and Gradient Boosting models to analyze transactions in real-time. High-risk transactions are automatically routed through Flashbots-style private relays, protecting users from sandwich attacks and frontrunning. Includes a drop-in Web3 provider SDK and real-time dashboard showing "dollars saved from MEV."`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Python', 'ML', 'TypeScript', 'Solidity', 'Flashbots'],
    liveUrl: '',
    githubUrl: 'https://github.com/CryptoGuy1/mev-shield',
    featured: false,
    color: '#ec4899',
  },
  {
    id: 'zk-carbon',
    title: 'zkCarbon Registry',
    subtitle: 'Privacy-Preserving Carbon Credits',
    description: 'Zero-knowledge carbon credit registry using zkSNARKs. Companies prove emissions reductions without revealing proprietary operational data.',
    longDescription: `Built with Circom circuits and deployed on Polygon zkEVM, zkCarbon enables companies to participate in carbon markets while protecting trade secrets. Features 4 Groth16 circuits for verification, ERC-1155 fractional credits, a Rust prover service achieving <10s proof generation, and IoT sensor integration for automated verification.`,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
    tags: ['Circom', 'Rust', 'zkSNARKs', 'Solidity', 'Polygon'],
    liveUrl: '',
    githubUrl: 'https://github.com/CryptoGuy1/zkCarbonRegistry',
    featured: false,
    color: '#06b6d4',
  },
  {
    id: 'energy-grid',
    title: 'Energy Grid Marketplace',
    subtitle: 'P2P Energy Trading Platform',
    description: 'Decentralized marketplace for peer-to-peer solar energy trading. Households sell excess energy to neighbors with automatic 15-minute settlement cycles.',
    longDescription: `A complete P2P energy trading platform featuring ERC-20 Energy Tokens representing kWh units, dynamic surge pricing based on supply/demand, Chainlink oracles for real-time price feeds, and Raspberry Pi edge nodes for metering. Automatically issues carbon credits for clean energy sharing.`,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    tags: ['Solidity', 'React', 'IoT', 'Chainlink', 'Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/CryptoGuy1/Energy-Grid-MarketPlace',
    featured: false,
    color: '#eab308',
  },
  {
    id: 'enviro-comply',
    title: 'EnviroComply',
    subtitle: 'AI-Powered EPA Compliance',
    description: 'Multi-agent system for automated environmental compliance monitoring. Four specialized AI agents track regulations, assess impacts, identify gaps, and generate reports.',
    longDescription: `Built for Oil & Gas companies facing 100+ pages of EPA regulations. EnviroComply uses specialized AI agents: Regulation Monitor (scans Federal Register), Impact Assessor (maps regulations to facilities), Gap Analyzer (identifies compliance issues), and Report Generator (creates Title V certifications). Reduces compliance monitoring costs from $35K to $8K annually.`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['Python', 'CrewAI', 'FastAPI', 'React', 'Weaviate'],
    liveUrl: '',
    githubUrl: 'https://github.com/CryptoGuy1/Enviro-Comply',
    featured: false,
    color: '#10b981',
  },
  {
    id: 'luxe-commerce',
    title: 'LuxeCommerce',
    subtitle: 'Luxury E-Commerce Platform',
    description: 'State-of-the-art e-commerce platform with 13+ pages, Stripe/PayPal/Klarna integration, and refined luxury aesthetics built with Next.js 14.',
    longDescription: `A complete luxury e-commerce solution featuring product galleries, cart management, multi-step checkout, wishlists, user accounts, and order tracking. Implements multiple payment providers including Stripe (cards, Apple Pay, Google Pay), PayPal, and Klarna buy-now-pay-later. Designed with a premium gold and black aesthetic.`,
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PayPal', 'Tailwind'],
    liveUrl: 'https://luxe-commerce-94c7aa1ll-benjamins-projects-0bc5a52f.vercel.app',
    githubUrl: '',
    featured: false,
    color: '#d4af37',
  },
]

export const research = [
  {
    title: 'zk-D3 Framework: Privacy-Preserving DePIN Coordination',
    venue: 'ICBTA 2025, Kanazawa, Japan',
    status: 'Published',
    statusColor: '#22c55e',
    description: 'Comprehensive survey of DePIN projects and a novel framework using zero-knowledge proofs for privacy-preserving data sharing.',
  },
  {
    title: 'TRACC: On-Chain Emission Tracking via DePIN',
    venue: 'IEEE Transactions on Network Science & Engineering',
    status: 'Under Review',
    statusColor: '#f59e0b',
    description: 'Real-time environmental accountability through automated carbon burden tokenization.',
  },
  {
    title: 'ADAM: Agentic Decentralized Autonomous Machines',
    venue: 'IEEE Internet of Things Journal',
    status: 'Under Review',
    statusColor: '#f59e0b',
    description: 'Integrating AI agents with blockchain governance for intelligent environmental monitoring.',
  },
  {
    title: 'Veri-ADAM: Verifiable Agentic AI for DePIN',
    venue: 'IEEE Transactions on Dependable & Secure Computing',
    status: 'In Progress',
    statusColor: '#3b82f6',
    description: 'Secure and verifiable computation for autonomous agent systems in critical infrastructure.',
  },
]

export const experience = [
  {
    role: 'Graduate Research Assistant',
    company: 'University of Wyoming',
    companyUrl: 'https://www.uwyo.edu',
    period: '2022 - Present',
    description: 'Leading research on blockchain-IoT integration for environmental monitoring at SEDIC.',
  },
  {
    role: 'Blockchain Developer',
    company: 'FidesInnova',
    companyUrl: 'https://fidesinnova.io',
    period: '2021 - 2022',
    description: 'Built decentralized identity solutions and cross-chain interoperability protocols.',
  },
  {
    role: 'Smart Contract Developer',
    company: 'Siddha.io',
    companyUrl: 'https://siddha.io',
    period: '2020 - 2021',
    description: 'Developed and audited DeFi protocols on Ethereum, BSC, and Polygon.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Palremit',
    companyUrl: 'https://palremit.com',
    period: '2019 - 2020',
    description: 'Built blockchain payment solutions for cross-border remittance services.',
  },
]

export const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Research Director',
    company: 'Stanford Blockchain Research',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=90',
    content: "Benjamin's work on the zk-D3 framework represents a significant contribution to the DePIN space. His ability to bridge theoretical cryptography with practical implementation is exceptional.",
  },
  {
    name: 'Michael Torres',
    role: 'CTO',
    company: 'ChainVentures Capital',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=90',
    content: "One of the most technically capable blockchain developers I've worked with. His ADAM framework showed us what's possible when AI meets decentralized infrastructure.",
  },
  {
    name: 'Dr. Emily Watson',
    role: 'Lead Scientist',
    company: 'GreenTech Labs',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=90',
    content: "Benjamin's TRACC system is exactly what the carbon market needs—real-time accountability with cryptographic guarantees. His research is shaping the future of environmental compliance.",
  },
]

export const stats = [
  { value: '7+', label: 'Years Experience' },
  { value: '4', label: 'Research Papers' },
  { value: '15+', label: 'Projects Built' },
  { value: '4.0', label: 'GPA' },
]
