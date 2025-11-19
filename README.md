# Houcem Belkhiria - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimalist design with dark theme
- 📱 Fully responsive for all screen sizes
- ⚡ Smooth animations and micro-interactions using Framer Motion
- 🎯 Smooth scrolling navigation
- 💼 Showcase of projects, skills, education, and experience
- 📧 Contact form (configure Formspree or EmailJS)
- 🌙 Dark mode optimized

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typography**: Inter & Montserrat (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

### Contact Form

To enable the contact form, you need to:

1. **Option 1: Formspree**
   - Sign up at [Formspree](https://formspree.io/)
   - Create a new form and get your form ID
   - Replace `YOUR_FORM_ID` in `components/Contact.tsx` with your actual form ID

2. **Option 2: EmailJS**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Follow their setup guide
   - Update the form submission logic in `components/Contact.tsx`

### Customization

All personal data, projects, skills, education, and experience are stored in `data/index.ts`. Simply update this file to customize the portfolio content.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Hero.tsx             # Hero section with typing effect
│   ├── About.tsx            # About section
│   ├── Skills.tsx          # Skills showcase
│   ├── Projects.tsx         # Projects grid
│   ├── EducationExperience.tsx # Timeline component
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer with social links
├── data/
│   └── index.ts             # Central data file
└── public/                  # Static assets
```

## License

This project is open source and available under the MIT License.

