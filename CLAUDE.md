# CLAUDE.md - Guidelines for Okaziya Wedding Project

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run preview` - Preview production build

## Code Style

- **TypeScript**: Use TS for type safety (strict mode disabled)
- **Imports**: Use absolute imports with `@/*` alias for src directory
- **Components**: Follow React functional component pattern with hooks
- **CSS**: Use Tailwind CSS for styling
- **Formatting**: Follow Prettier defaults (no custom config found)
- **Error Handling**: Use try/catch for async operations
- **Naming**: PascalCase for components, camelCase for variables/functions
- **UI Components**: Use shadcn/ui component system with Radix UI primitives
- **State Management**: React hooks for local state, no global state library
