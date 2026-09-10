# Orbit — Frontend Architecture

## Starter Page

### Purpose
The Starter Page is the application entry experience. It establishes Orbit's identity on first launch and provides the primary navigation into the application.

### Component Hierarchy
```
StarterPage
├── OrbitLoader
├── OrbitWordmark (h1)
├── StarterIntro (p)
└── EnterOrbitButton (button)
```

### State
- No internal state.
- Uses `react-router-dom` `useNavigate` to transition to `/integrations`.

### Navigation Behavior
- The primary action button navigates to `/integrations`.
- The Starter Page is accessible at `/` (default route) and `/starter`.

### Visual Structure
- White canvas with centered vertical composition.
- Large wordmark "ORBIT" in Space Grotesk, bold, letter-spaced.
- Four-ring animated loader as a brand object.
- Concise intro text in muted color.
- Single primary CTA button with thick black border, magenta fill, hard-offset shadow.

### Motion
- Loader uses continuous SVG/CSS keyframe animation.
- Button transitions: 100ms for hover lift, 100ms for active press.
- No page entrance animations.

---

## OrbitLoader

### Purpose
Reusable four-ring animated loader. Core Orbit visual primitive. Intended for use across the entire application in future phases (startup, loading states, page transitions, data loading, integration loading, backend operations).

### Props
```ts
interface OrbitLoaderProps {
  size?: number;
  className?: string;
  label?: string;
}
```

- `size`: SVG width/height in pixels. Default `240`.
- `className`: Additional CSS class names for wrapper styling.
- `label`: Accessible label for screen readers and `role="status"`. Default `"Orbit"`.

### Animation Architecture
- Pure SVG + CSS keyframes. No JavaScript animation loops.
- Four independent keyframe animations: `ringA`, `ringB`, `ringC`, `ringD`.
- Each ring animates `stroke-dasharray` and `stroke-dashoffset` to create the continuous circular motion.
- Relative timing preserved from the original four-ring design.
- Continuous looping via `infinite`.

### Color Tokens
- Ring A, C: `var(--primary)` (magenta `#ff0066`)
- Ring B, D: `var(--purple)` (purple `#8a2be2`)
- Background: transparent (renders on white canvas)

### Accessibility Behavior
- Wrapper uses `role="status"` and `aria-label={label}`.
- SVG uses `aria-hidden="true"` to prevent duplicate announcements.
- Screen-reader-only text (`.sr-only`) provides accessible label.
- Respects `prefers-reduced-motion`: animation duration increases to 6s for reduced motion preference.

### Intended Future Usage
- Application startup overlay
- Page transition placeholders
- Integration connection loading
- Data fetch loading states
- Backend operation indicators

### Current Usage
- Starter Page primary visual element.

---

## Backend Boundary

The Starter Page currently does NOT depend on:
- Backend services
- Authentication
- Filesystem access
- External APIs
- Database connections

It is a pure frontend entry experience. All future backend integration should be added at the application entry point after the Starter Page transition.

---

## Routing

- `/` → StarterPage
- `/starter` → StarterPage (direct access)
- `/integrations` → Integrations (with Sidebar)
- `/activity` → Activities (with Sidebar)
- `/` catch-all inside AppLayout → Home

The AppLayout wraps all non-Starter routes with the Sidebar. The Starter Page is rendered outside the AppLayout to maintain a clean entry experience without navigation chrome.