# 6. Use pnpm as the Preferred Package Manager

Date: 2025-06-05

## Status

Accepted

## Context

The project requires a fast, reliable, and space-efficient package manager. While `npm` and `yarn` are widely used, we aim to optimize both developer experience and CI performance. Our stack includes Nuxt 3, Vue 3, and Tailwind CSS, and we want to enforce consistent dependency resolution across environments.

## Decision

We will adopt `pnpm` as the default package manager for this project.

Reasons include:
* **Speed**: pnpm is significantly faster due to its caching mechanism and optimized dependency resolution.
* **Disk Efficiency**: Uses a content-addressable storage system to avoid duplicating files.
* **Strictness**: Enforces stricter rules than npm/yarn, preventing issues like phantom dependencies.
* **Monorepo-ready**: First-class support for workspaces, useful for potential modularization or microfrontend setups.

## Consequences

* Contributors must install pnpm locally.
