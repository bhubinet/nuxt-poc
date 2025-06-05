# 7. Use DaisyUI as the UI Component Library

Date: 2025-06-05

## Status

Proposed

## Context

We are building a design system based on Tailwind CSS and the atomic design principle. To avoid reinventing common UI components (like buttons, modals, tabs, etc.) and accelerate development, we evaluated UI libraries compatible with Tailwind CSS.

We considered several options:

- Building all components from scratch
- Headless UI + custom components
- Tailwind UI (commercial)
- Flowbite (commercial)
- DaisyUI

## Decision

We choose to use **DaisyUI** as our component framework.

### Reasons:

- ✅ Fully built on Tailwind CSS (no CSS overrides)
- 🎨 Provides a theme system compatible with Tailwind’s utility classes
- ⚡ Rapid prototyping with ready-to-use components
- 💅 Highly customizable via Tailwind classes (no locked-in styles)
- 📦 Zero-runtime overhead (just Tailwind plugins)
- 🤝 Compatible with Nuxt 3, Vue 3, and Vite

## Consequences

- Developers will be expected to **check if a needed component already exists in DaisyUI** before creating one from scratch.
- Our team must remain cautious about overusing DaisyUI defaults if they conflict with the visual direction from our Figma design system.
- The design team and devs will need to coordinate on **theming** if the default DaisyUI themes don’t align with brand tokens.
