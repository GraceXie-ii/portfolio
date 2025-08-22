# Grace's Portfolio 🐱
Based heavily off of  [Soumyajit's Portfolio](https://soumyajit.vercel.app/) - They are amazing please check them out

A modern, responsive portfolio website built with React and deployed on GitHub Pages. Features a beautiful space-themed design with interactive animations and smooth navigation.

## 🌟 Live Demo

Visit the live portfolio: [https://gracexie-ii.github.io/portfolio/](https://gracexie-ii.github.io/portfolio/)

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Interactive Animations**: Typewriter effects and smooth transitions
- **Modern UI**: Glassmorphism design with space-themed background
- **Single Page Application**: Client-side routing with React Router
- **Accessible Navigation**: Keyboard and screen reader friendly
- **Custom Branding**: Unique cat logo and personalized styling

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0
- **Routing**: React Router DOM 7.8.1
- **Styling**: Bootstrap 5.3.7 + Custom CSS
- **Animations**: Typewriter Effect
- **Build Tool**: Vite 7.0.6
- **Deployment**: GitHub Pages with GitHub Actions

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GraceXie-ii/portfolio.git
cd portfolio/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173` (Or whatever it says to)

## 📁 Project Structure
(Will fix the structure one day...)

```
portfolio/
├── public/
│   ├── vite.svg
│   └── 404.html              # GitHub Pages routing fallback
├── src/
│   ├── components/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Home/
│   │   ├── Projects/
│   │   ├── Background.jsx     # Animated space background
│   │   └── NavBar.jsx         # Navigation component
│   ├── App.jsx               # Main app with routing
│   ├── main.jsx              # Entry point
│   ├── App.css               # Component styles
│   ├── index.css             # Global styles
│   └── styles.css            # Custom theme styles
├── .github/
│   └── workflows/
│       └── main.yml          # GitHub Actions deployment
├── package.json
├── vite.config.js            # Vite configuration
└── README.md
```

## 🎨 Key Components

### Navigation
- **Responsive navbar** with cat logo
- **Smooth client-side routing** between pages
- **Mobile-friendly** collapsible menu

### Pages
- **Home**: Welcome section with typewriter animation
- **Projects**: Showcase of development projects
- **Contact**: Contact information and social links

### Styling
- **Roboto font** for clean typography
- **Glassmorphism effects** for modern UI elements
- **Space theme** with animated background particles
- **Custom color scheme** with purple/pink gradients

## 🔧 Available Scripts

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build locally
npm run lint       # Run ESLint for code quality
```

## 🚢 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions:

1. **Automatic Deployment**: Push to `main` branch triggers deployment
2. **Build Process**: Vite builds the project in the workflow
3. **GitHub Pages**: Serves the built files from the `gh-pages` branch

### Manual Deployment

To deploy manually:

```bash
npm run build
# Deploy the dist/ folder to your hosting platform
```

## 🔗 GitHub Pages Configuration

The project is configured for GitHub Pages deployment with:
- **Base URL**: `/portfolio/` for proper routing
- **Client-side routing**: 404.html handles direct URL access
- **Automated workflow**: `.github/workflows/main.yml`

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Mobile Responsive

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👩‍💻 Author

**Grace Xie**
- GitHub: [@GraceXie-ii](https://github.com/GraceXie-ii)
- Portfolio: [https://gracexie-ii.github.io/portfolio/](https://gracexie-ii.github.io/portfolio/)

## 🙏 Acknowledgments

- Space background effects powered by [TSParticles](https://particles.js.org/)
- Typewriter animations using [typewriter-effect](https://www.npmjs.com/package/typewriter-effect)
- UI components from [React Bootstrap](https://react-bootstrap.github.io/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/) and [Flat Icons](https://www.flaticon.com/)

---

⭐ If you found this project helpful, please give it a star!
