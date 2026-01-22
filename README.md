# Benjamin Nweke Portfolio

A state-of-the-art personal portfolio website built with Next.js 14, featuring a stunning Noir Gold design system, dark/light mode, smooth animations, and a built-in blog.

Vercel: https://bnweke-portfolio.vercel.app

![Portfolio Preview](https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80)

## ✨ Features

- **Modern Design**: Noir Gold aesthetic with gold (#D4AF37) accents on black/white backgrounds
- **Dark/Light Mode**: Seamless theme switching with persistence
- **Responsive**: Fully responsive design optimized for all devices
- **Animations**: Smooth Framer Motion animations throughout
- **Blog System**: MDX-powered blog with code highlighting
- **SEO Optimized**: Full meta tags, Open Graph, and Twitter cards
- **Performance**: Optimized images, fonts, and Core Web Vitals

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Blog**: MDX with next-mdx-remote
- **Theme**: next-themes
- **Fonts**: DM Sans, Playfair Display, JetBrains Mono
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone/Download the project**
   ```bash
   cd bnweke-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```
bnweke-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts & theme
│   ├── page.tsx            # Home page with all sections
│   ├── globals.css         # Global styles & Tailwind
│   └── blog/
│       └── page.tsx        # Blog listing page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx      # Navigation with theme toggle
│   │   └── footer.tsx      # Footer with social links
│   └── theme-provider.tsx  # Dark/light mode provider
├── content/
│   └── blog/               # MDX blog posts go here
├── lib/
│   ├── data.ts             # All site content & data
│   └── utils.ts            # Utility functions
├── public/
│   ├── resume.pdf          # Your resume (add this!)
│   └── og-image.png        # Social share image (add this!)
└── package.json
```

## ✏️ Customization

### Update Your Information

Edit `lib/data.ts` to update:

- **Personal info**: Name, email, tagline, social links
- **Projects**: Add/edit your 8 projects
- **Skills**: Update your skill categories
- **Experience**: Add your work history
- **Research**: Add your publications
- **Testimonials**: Update testimonials

### Add Your Resume

Place your resume PDF at:
```
public/resume.pdf
```

### Add Your Photo

The headshot is referenced from an external URL in the code. To use your own:
1. Add your image to `public/images/headshot.jpg`
2. Update the image path in `app/page.tsx`

### Create Social Share Image

Create a 1200x630px image and save as:
```
public/og-image.png
```

## 📝 Writing Blog Posts

### Create a New Post

1. Create a new MDX file in `content/blog/`:
   ```
   content/blog/my-new-post.mdx
   ```

2. Add frontmatter and content:
   ```mdx
   ---
   title: 'My New Blog Post'
   date: '2024-01-20'
   excerpt: 'A brief description of the post.'
   image: 'https://images.unsplash.com/photo-xxx'
   tags: ['Blockchain', 'AI']
   ---

   # Introduction

   Your content here with **Markdown** support.

   ## Code Examples

   ```solidity
   contract MyContract {
       // Your code
   }
   ```

   ## Conclusion

   Wrap up your post.
   ```

3. The post will automatically appear on the blog page.

## 🎨 Design System

### Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Gold 500 | `#D4AF37` | Primary accent |
| Gold 400 | `#EBC33F` | Hover states |
| Dark 900 | `#0a0a0b` | Dark background |
| Dark 100 | `#ececf1` | Light borders |

### Typography

- **Display**: Playfair Display (headings)
- **Body**: DM Sans (paragraphs)
- **Mono**: JetBrains Mono (code, labels)

### Font Sizes

| Class | Size | Usage |
|-------|------|-------|
| `text-display-2xl` | 72px | Hero heading |
| `text-display-xl` | 60px | Section headings |
| `text-display-lg` | 48px | Sub-headings |
| `text-xl` | 20px | Body text |
| `text-lg` | 18px | Secondary text |
| `text-base` | 16px | Small text |

## 🚀 Deployment to Vercel

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/CryptoGuy1/bnweke-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js — click "Deploy"

3. **Add Custom Domain**
   - Go to Project Settings → Domains
   - Add `bnweke.dev`
   - Update DNS records as instructed

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 🔧 Environment Variables (Optional)

Create `.env.local` for any API keys:

```env
# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact form API (optional)
CONTACT_API_KEY=your_api_key
```

## 📱 Responsive Breakpoints

| Breakpoint | Width | Devices |
|------------|-------|---------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

## ⚡ Performance Tips

1. **Images**: All images are optimized via Next.js Image component
2. **Fonts**: Using `next/font` for optimal loading
3. **Code Splitting**: Automatic with Next.js App Router
4. **Caching**: Static pages are cached at the edge

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues

```bash
# Rebuild Tailwind
npx tailwindcss -o output.css --watch
```

### Font Loading Issues

Ensure you have a stable internet connection for Google Fonts to load during build.

## 📄 License

MIT License — feel free to use this template for your own portfolio!

## 🙏 Credits

- Design inspired by modern portfolio trends
- Icons by [Lucide](https://lucide.dev)
- Images from [Unsplash](https://unsplash.com)

---

**Built with ❤️ by Benjamin Nweke**

Questions? Reach out at [bnweke.eng@gmail.com](mailto:bnweke.eng@gmail.com)
