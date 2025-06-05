# 8. Use Zod for Schema Validation and Type Inference

Date: 2025-06-05

## Status

Proposed

## Context

We need a reliable and developer-friendly way to validate data throughout the application, including:

* Form validation on the client
* API request/response validation
* Shared types between backend and frontend
* Type-safe default values for forms and composables

## Decision

We propose using **[Zod](https://github.com/colinhacks/zod)** for schema definition, parsing, and validation.

### Why Zod?
* 🧠 **Type inference first**: TypeScript support is native and automatic (no duplication of types)
* 🔁 **Single source of truth**: One schema can drive validation + types + error messages
* 🛠️ **Tiny and fast**: No runtime dependencies, works well in both browser and server
* 🔒 **Safe parsing**: Validation returns a success/failure object — no exceptions by default
* 🧪 Ideal for integrating with composables, `useForm`, or custom hooks
* Recommended by the Nuxt team for its simplicity and power

## Consequences

* We’ll install Zod as a dependency:
  ```bash
  pnpm add zod
    ```