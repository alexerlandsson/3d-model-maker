# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a CSS voxel editor built with Next.js that allows users to create pixelated 3D models using HTML and CSS. The application renders 3D cubes (cuboids) that can be positioned, sized, and styled in a 3D space using pure CSS transforms.

## Development Commands

- `npm run dev` - Start development server (runs on http://localhost:3000)
- `npm run build` - Build the application for production
- `npm start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## Development Notes

- **Background Build**: The development server runs with hot reloading in the background. No need to manually run `npm run build` after code changes as the dev server automatically rebuilds and reloads.
- **Linting**: Always run `npm run lint` to check code quality before completing tasks.

## Architecture Overview

### State Management Architecture
The application uses React Context providers in a nested hierarchy for state management:
- **RotationProvider** - Manages 3D scene rotation (X, Y, Z axes)
- **ZoomProvider** - Handles zoom level for the 3D scene
- **ModelProvider** - Core state for managing cuboids/cubes (add, edit, delete, selection)
- **CanvasProvider** - Controls canvas display options (frame visibility)

All providers are nested in `src/providers/index.tsx` and wrap the entire application.

### Component Structure
The application follows a container/component pattern:

**Layout Components:**
- `Root` - Main application wrapper
- `Editor` - Main editor layout container
- `Scene` - 3D scene viewport wrapper

**3D Rendering Components:**
- `Canvas` - 3D container with optional wireframe boundaries
- `Cuboid` - Individual 3D cube/cuboid with 6 CSS faces
- `Model` - Renders collection of cuboids from ModelProvider state

**Control Components:**
- `EditorControls` - Canvas controls (zoom, frame toggle)
- `CuboidControls` - Active cuboid editing (position, size, color)
- `Rotation` - Scene rotation controls with sliders

### 3D Rendering System
The app creates 3D effects using CSS transforms without WebGL:
- Each `Cuboid` component renders 6 div faces (front, back, top, bottom, left, right)
- 3D positioning uses CSS custom properties (`--x`, `--y`, `--z`, `--w`, `--h`, `--d`)
- Scene rotation applied at container level using CSS transforms
- Maximum of 99 cuboids enforced (MAX_CUBOIDS constant)

### Styling Architecture
- SCSS modules for component-scoped styles
- Global styles in `src/styles/` (reset, globals, utils)
- Helper functions and mixins in `src/styles/helpers/`
- CSS custom properties extensively used for dynamic 3D positioning
- Cousine font loaded from Google Fonts

### Key State Patterns
- Cuboid selection: `activeCuboidId` tracks currently selected cuboid
- Cuboid management: CRUD operations through ModelProvider context
- 3D transformations: CSS custom properties updated via React state
- Input controls: Range inputs bound to rotation/position state

## Important Conventions

- All components use TypeScript with strict mode enabled
- SCSS modules for styling with BEM-like class naming
- CSS custom properties for dynamic styling values
- Context hooks pattern: `useModel()`, `useCanvas()`, etc.
- Component file structure: `index.tsx` + `ComponentName.module.scss`
- Path alias `@/*` maps to `src/*`

## Key Files to Understand

- `src/providers/ModelProvider.tsx` - Core cuboid/cube state management
- `src/components/Cuboid/index.tsx` - 3D cube rendering component
- `src/containers/Model/index.tsx` - Cuboid collection renderer
- `src/app/page.tsx` - Main application layout and component composition