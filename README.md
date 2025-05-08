# Dev Craft - AI Solutions Website

A modern, responsive website for Dev Craft, showcasing our AI-powered application development services. Built with React, TypeScript, and Tailwind CSS.

## Features

- Modern, responsive design
- Smooth animations with Framer Motion
- SEO-friendly structure
- Mobile-first approach
- Accessible navigation
- Performance optimized

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Framer Motion
- Heroicons

## Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm (v8.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/dev-craft.git
   cd dev-craft
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_INTERCOM_APP_ID=your_intercom_app_id_here
   VITE_GA_TRACKING_ID=your_ga_tracking_id_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

## Project Structure

```
dev-craft/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── assets/        # Static assets
│   ├── App.tsx        # Main App component
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── public/            # Public assets
├── index.html         # HTML template
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.ts     # Vite configuration
```

## Development

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Follow the BEM methodology for custom CSS
- Use Tailwind CSS utility classes when possible

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build process or auxiliary tool changes

## Environment Variables

The following environment variables are required for full functionality:

### Intercom Chat
```
VITE_INTERCOM_APP_ID=your_intercom_app_id_here
```
This enables the live chat support feature. If not provided, the chat functionality will be disabled.

### Google Analytics
```
VITE_GA_TRACKING_ID=your_ga_tracking_id_here
```
This enables Google Analytics tracking. If not provided, analytics will be disabled.

## Features

- Live chat support via Intercom
- Interactive AI solution demos
- AI solution calculator
- Progressive image loading
- Error boundary for graceful error handling
- Google Analytics integration

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact [your-email@example.com](mailto:your-email@example.com).
