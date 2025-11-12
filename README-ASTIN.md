# Astin Analytics - Company Website

A modern, clean company website for Astin Analytics, built with React, Vite, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean Y Combinator-inspired design with blue and orange accent colors
- **Fully Responsive**: Works seamlessly across desktop, tablet, and mobile devices
- **Smooth Navigation**: Fixed navbar with smooth scroll-to-section functionality
- **Component-Based**: Modular architecture using React components
- **Type-Safe**: Built with TypeScript for enhanced code quality
- **shadcn/ui Components**: Professional UI components for buttons, cards, and forms

## 📋 Sections

1. **Navbar** - Fixed top navigation with mobile menu
2. **Hero** - Eye-catching headline with CTAs
3. **About** - Company mission and vision
4. **Solutions** - Three main service offerings in card format:
   - Smart Access Control
   - Central Authentication Service (CAS)
   - Custom AI Solutions
5. **Key Strengths** - 8 competitive advantages
6. **Contact** - Contact form and information
7. **Footer** - Dark footer with links and social media

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **shadcn/ui** - Component library
- **Lucide React** - Icon library

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/               # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── Navbar.tsx        # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Services.tsx      # Solutions/Services
│   ├── KeyStrengths.tsx  # Key strengths
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── lib/
│   └── utils.ts          # Utility functions
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## 🎨 Design Guidelines

- **Primary Color**: Blue (`#2563eb` / `blue-600`)
- **Secondary Color**: Orange (`#ea580c` / `orange-600`)
- **Font**: Inter (Google Fonts)
- **Spacing**: Consistent padding and margins
- **Border Radius**: Rounded corners (8px default)
- **Shadows**: Soft shadows for depth

## 📧 Contact Information

- **Email**: contact@astinanalytics.com
- **Website**: [Your deployed URL]

## 📝 License

All rights reserved © 2025 Astin Analytics

---

Built with ❤️ using React + Vite + TypeScript + Tailwind CSS
