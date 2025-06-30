# Charts App

A React-based data visualization application built with Vite and Recharts. This app provides interactive charts for data visualization, currently featuring a radar chart for comparing different biking headwear options.

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher) or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone [your-repository-url]
   cd charts
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (Vite's default port).

## 🛠️ Available Scripts

### Development

```bash
npm run dev          # Start development server
```

### Build

```bash
npm run build        # Build for production
```

### Preview Production Build

```bash
npm run preview      # Preview production build locally
```

### Deploy

```bash
npm run deploy       # Build and deploy to GitHub Pages
```

## 🧩 Key Dependencies

- **React** (v18.3.1) - UI framework
- **React Router DOM** (v7.6.2) - Client-side routing
- **Recharts** (v3.0.1) - Chart library for React
- **PapaParse** (v5.5.3) - CSV parsing library
- **Vite** (v5.3.4) - Build tool and development server

## 🎨 Features

### Current Charts

- **Radar Chart**: Compare different biking headwear options across multiple criteria

### Navigation

The app uses React Router for navigation:

- `/` - Charts gallery index page
- `/radar` - Radar chart visualization

## 👨‍💻 Development Guide

### Adding a New Chart

1. **Create Chart Component**

   - Add your chart component in `src/components/`
   - Import necessary dependencies (React, Recharts components, etc.)
   - Create corresponding CSS file for styling

2. **Add Data Source**

   - Place your data file in `public/data/`
   - Supported formats: CSV (parsed with PapaParse)

3. **Update Routes**
   - Add a new route in `src/App.jsx`
   - Update the `charts` array in `src/components/ChartsIndex.jsx`

Example:

```jsx
// In ChartsIndex.jsx
const charts = [
  // ... existing charts
  {
    id: "your-chart-id",
    title: "Your Chart Title",
    description: "Brief description",
    path: "/your-chart-path",
  },
];

// In App.jsx
<Route path="/your-chart-path" element={<YourChartComponent />} />;
```

### Styling

- Global styles are in `src/index.css`
- Component-specific styles use corresponding `.css` files
- The app uses standard CSS (no preprocessors)

## 🚢 Deployment

The project is configured for GitHub Pages deployment:

1. Ensure `basename="/charts"` in the Router matches your repository name
2. Run `npm run deploy` to build and deploy

The build process:

- Creates optimized production build in `dist/`
- Deploys to GitHub Pages using `gh-pages` package

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Coding Standards

- Use functional React components with hooks
- Keep components modular and reusable
- Follow existing file naming conventions
- Add appropriate comments for complex logic

## 📝 License

[Add your license information here]

## 🐛 Troubleshooting

### Common Issues

**Port already in use**

- Vite runs on port 5173 by default
- If occupied, it will automatically try the next available port

**Module not found errors**

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Ensure you're using compatible Node.js version

**Build failures**

- Check console for specific error messages
- Verify all imports are correct
- Ensure data files are in the correct location
