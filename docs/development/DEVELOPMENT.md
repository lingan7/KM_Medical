# Development Guide

## Prerequisites

- Node.js (v16 or later)
- npm (v8 or later)
- Git

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/KM_Medical.git
   cd KM_Medical
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following variables:
   ```
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run build:gh` - Build for GitHub Pages deployment
- `npm run deploy` - Deploy to GitHub Pages

## Code Style

- Follow the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- Use TypeScript for all new code
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Keep components small and focused on a single responsibility

## Git Workflow

1. Create a new branch for each feature/fix:
   ```bash
   git checkout -b feature/feature-name
   ```

2. Make your changes and commit them:
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Push your changes and create a pull request

## Testing

### Running Tests
```bash
npm test
```

### Writing Tests
- Place test files next to the component they test with `.test.tsx` extension
- Use React Testing Library for component testing
- Write unit tests for utility functions

## Code Review Process

1. Create a pull request
2. Request review from at least one team member
3. Address all review comments
4. Ensure all tests pass
5. Get approval before merging
