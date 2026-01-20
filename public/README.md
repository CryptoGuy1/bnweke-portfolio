# Public Assets Folder

Place your static assets here. These files will be served at the root URL.

## Required Files

### 1. `resume.pdf`
Your resume/CV file. Will be accessible at `https://bnweke.dev/resume.pdf`

**How to add:**
- Export your resume as PDF
- Name it `resume.pdf`
- Place it in this folder

---

### 2. `og-image.png`
Social media share image (appears when sharing your site on Twitter, LinkedIn, etc.)

**Specifications:**
- Size: 1200 × 630 pixels
- Format: PNG or JPG
- Content: Your name, title, and a visual that represents you

**Quick option:** Use [og-image.vercel.app](https://og-image.vercel.app) to generate one quickly.

---

### 3. `favicon.ico` (Optional)
Browser tab icon. If not provided, browsers will use default.

**Specifications:**
- Size: 32×32 or 16×16 pixels
- Format: ICO or PNG

**Quick option:** Use [favicon.io](https://favicon.io) to generate from text or image.

---

### 4. `images/headshot.jpg` (Optional)
Your professional photo for the About section.

**Specifications:**
- Size: At least 400×400 pixels
- Format: JPG or PNG
- Square aspect ratio works best

---

## Folder Structure

```
public/
├── resume.pdf          ← Your resume
├── og-image.png        ← Social share image
├── favicon.ico         ← Browser tab icon
└── images/
    └── headshot.jpg    ← Your photo
```

## Current Placeholders

The site currently uses:
- Unsplash images for testimonials
- External URLs for project images
- No resume (button will 404 until you add one)

Add your files here before deploying to production!
