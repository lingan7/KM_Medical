# System Architecture

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: TailwindCSS with PostCSS
- **Routing**: React Router v6
- **Form Handling**: React Hook Form
- **Icons**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

### Development Tools
- **Type Checking**: TypeScript
- **Linting**: ESLint
- **Code Formatting**: Prettier
- **Version Control**: Git

## Project Structure

```
src/
├── assets/           # Static assets (images, fonts, etc.)
├── components/       # Reusable UI components
│   ├── common/      # Common components (buttons, inputs, etc.)
│   ├── layout/      # Layout components (header, footer, etc.)
│   └── sections/    # Page sections
├── pages/           # Page components
├── styles/          # Global styles and Tailwind configuration
├── types/           # TypeScript type definitions
├── utils/           # Utility functions and helpers
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Data Flow

1. **Static Content**: Most content is statically defined in the components.
2. **Contact Form**: Uses EmailJS for form submission without a backend server.
3. **State Management**: Primarily uses React's built-in state management (useState, useContext).

## Performance Considerations

- **Code Splitting**: Implemented through React.lazy() for route-based code splitting.
- **Image Optimization**: Images are optimized during build time.
- **Bundle Analysis**: Can be performed using `npm run build -- --report`.

## Security

- **Form Submission**: EmailJS handles form submissions securely.
- **Environment Variables**: Sensitive configuration is stored in environment variables.
- **Dependencies**: Regular updates to address security vulnerabilities.
