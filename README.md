# Humsafar - Tour & Travel Booking Platform

A modern, feature-rich tour and travel booking website built with React, TypeScript, and Vite.

**Live Demo:** [https://nested-kode-hamsafar.vercel.app/](https://nested-kode-hamsafar.vercel.app/)

## 📋 Project Status

✅ **Verified and Fully Functional** - Last checked: February 12, 2026

- 📄 [Quick Summary](./VERIFICATION_SUMMARY.md) - Overview of project status
- 📊 [Detailed Report](./PROJECT_VERIFICATION_REPORT.md) - Comprehensive verification details
- ✅ [Health Checklist](./PROJECT_HEALTH_CHECKLIST.md) - Ongoing maintenance checklist

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🛠️ Technology Stack

- **Frontend:** React 18.3.0 + TypeScript 5.8.3
- **Build Tool:** Vite 6.3.5
- **State Management:** Redux Toolkit 2.7.0
- **Routing:** React Router DOM 7.5.3
- **Styling:** SASS 1.87.0 + Bootstrap 5.3.6
- **UI Libraries:** Swiper, React Range, React CountUp, and more

## 📦 Features

- ✨ Multiple home page layouts
- 🏨 Hotel and tour listing pages
- 🗺️ Map-based property listings
- 🛒 Shopping cart and wishlist functionality
- 💳 Checkout and payment flow
- 📧 Contact forms with EmailJS integration
- 📱 Fully responsive design
- ⭐ Rating and review system
- 📅 Date picker integration
- 🎨 Modern UI with animations

---

## 🔧 Development Notes

This project uses a minimal React + TypeScript + Vite setup with HMR and ESLint rules.

### Official Vite Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
