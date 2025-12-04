# Turbo Setup Home

A modern landing page showcasing the Turbo Setup boilerplate projects with Next.js, TypeScript, TailwindCSS, and advanced features.

## Features

- 🚀 Next.js 16.0.7
- ⚛️ **React Compiler** enabled for automatic optimization
- 📝 TypeScript
- 🎨 TailwindCSS v4
- 🔍 ESLint + Prettier
- 🪝 Husky Git Hooks
- 🏷️ Conventional Commits
- 🔄 Environment Configuration
- 📦 Zustand State Management
- 🎯 Path Aliases
- 🔒 Type-Safe API Calls
- ⚡ **Custom useFetch hook** for data fetching
- 🎨 **Framer Motion** for animations
- 🎭 **Three.js & React Three Fiber** for 3D graphics
- ✨ **TSParticles** for particle effects

## Getting Started

### Prerequisites

- Node.js 18+
- Bun

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/turbo-setup-nextjs-ts-tailwind.git
```

2. Install dependencies:

```
bun install
```

3. Create environment files:

```
cp .env.example .env.dev
cp .env.example .env.staging
cp .env.example .env.prod
```

### Development

Start the development server:

```bash
# Development
bun run dev

# Staging
bun run dev:staging

# Production
bun run dev:prod
```

The application will be available at `http://localhost:8000`

### Building

```bash
# Development
bun run build:dev

# Staging
bun run build:staging

# Production
bun run build
```

### Start Server

```bash
# Production
bun run start

# Staging
bun run start:staging

# Development
bun run start:dev
```

## Project Structure

```
src/
├── app/ # Next.js app directory
│   ├── layout.tsx
│   ├── page.tsx
│   ├── home/ # Home page route
│   └── framework/ # Framework showcase route
├── components/ # Reusable components
│   ├── Button/
│   ├── CodeBlock/
│   ├── CodeInline/
│   ├── Dock/
│   ├── FrameworkCard/
│   └── ui/ # UI components
├── configs/ # Configuration files
│   ├── api-url.config.ts
│   ├── app-url.config.ts
│   ├── env.config.ts
│   └── http.ts
├── constants/ # Constants and enums
│   └── common.constant.ts
├── data/ # Static data
│   └── frameworks.tsx
├── hooks/ # Custom React hooks
│   └── useFetch.ts
├── providers/ # React context providers
│   └── AppProvider.tsx
├── services/ # API services
│   ├── auth.service.ts
│   └── localStorage.service.ts
├── styles/ # Global styles
│   └── globals.css
├── types/ # TypeScript types
├── utils/ # Utility functions
└── views/ # Page-specific view components
    ├── FrameworkView/
    └── HomeNewView/
```

## React Compiler

The project uses [React Compiler](https://react.dev/learn/react-compiler) for automatic optimization of React components. The compiler is enabled in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
	distDir: 'build',
	reactCompiler: true,
	// ... other config
}
```

### Benefits

- **Automatic Memoization**: Components and hooks are automatically memoized
- **Performance Optimization**: Reduces unnecessary re-renders
- **Zero Configuration**: Works out of the box with Next.js 16
- **Type Safety**: Full TypeScript support

### How It Works

The React Compiler automatically optimizes your React code during the build process. It analyzes your components and hooks to determine when memoization is beneficial, eliminating the need for manual `useMemo`, `useCallback`, and `React.memo` in most cases.

**Note**: The compiler is enabled via the `reactCompiler: true` option in Next.js config. No additional Babel plugins or configuration needed - Next.js 16 handles it natively.

## Git Hooks

This project uses Husky for Git hooks:

- Pre-commit: Runs TypeScript compilation, lint-staged, and build
- Commit message: Enforces conventional commit messages

## Development Workflow

### Available Scripts

```bash
# Development
bun run dev          # Start development server
bun run dev:staging   # Start with staging environment
bun run dev:prod      # Start with production environment

# Building
bun run build         # Build for production
bun run build:staging # Build for staging
bun run build:dev     # Build for development

# Production Server
bun run start         # Start production server
bun run start:staging # Start staging server
bun run start:dev     # Start development server

# Linting
bun run lint          # Run ESLint
```

### Development Features

- **Webpack**: Stable development builds with Next.js 16
- **React Compiler**: Automatic optimization of React components
- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type checking and IntelliSense
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for quality assurance

## Environment Variables

The project supports multiple environments with centralized configuration:

### Environment Files

- `.env.local` - Local development overrides
- `.env.dev` - Development environment
- `.env.staging` - Staging environment
- `.env.prod` - Production environment

### Required Variables

```env
# Environment
NEXT_PUBLIC_ENV=development|staging|production

# API Configuration
NEXT_PUBLIC_USER_API_URL=https://api.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Optional: Analytics, Sentry, etc.
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Configuration Management

Environment variables are managed through `src/configs/env.config.ts`:

```typescript
export const PUBLIC_ENV = {
	ENV: process.env.NEXT_PUBLIC_ENV || 'development',
	USER_API_URL: process.env.NEXT_PUBLIC_USER_API_URL || '',
	API_URL: process.env.NEXT_PUBLIC_API_URL || '',
} as const
```

## Technologies Used

- **Next.js 16**: React framework with App Router
- **React 19.2**: Latest React with compiler optimizations
- **TypeScript**: Type-safe development
- **TailwindCSS v4**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Three.js & React Three Fiber**: 3D graphics
- **TSParticles**: Particle effects
- **Zustand**: Lightweight state management
- **Axios**: HTTP client
- **Day.js**: Date manipulation

## License

This project is licensed under the MIT License - see the LICENSE file for details.
