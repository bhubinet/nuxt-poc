# 11. Use Composables for Managing All External API Calls

Date: 2025-06-05

## Status

Proposed

## Context

Our Nuxt 3 frontend communicates with a Symfony backend powered by API Platform, exposing REST/JSON:API endpoints.

To build a maintainable and scalable frontend codebase, we want a unified and consistent approach to external API calls, covering:

- Server-side rendering (SSR) safety
- TypeScript support and type inference
- Clear separation of concerns between UI and data fetching
- Easy mocking and testing
- Reusability of data fetching logic
- Consistent error and loading state management
- Integration with Nuxt 3 ecosystem (e.g., `useFetch`, `useAsyncData`)

## Decision

We will standardize on **composables as the single source of truth for all external data fetching and mutation**.

### Key principles:
* Each API resource has its own set of composables responsible for all CRUD operations and queries.
* Composables internally use `useFetch`, `$fetch` leveraging Nuxt 3's SSR-friendly data fetching.
* Composables expose reactive data, loading states, and error objects for consumption by UI components.
* Types are either hand-written or generated automatically from API Platform's OpenAPI schema, with type inference used throughout.
* Common fetch logic (base URL, headers, error handling, retries, auth) is centralized in a shared composable (`useApiClient`).
* State management libraries like Pinia are used only when shared global state is necessary; otherwise, composables manage local reactive state.
* All UI components consume data exclusively through these composables, never calling API fetches directly.
* Testing is easier because composables can be mocked or stubbed during unit and integration tests.

## Consequences

* Every external data operation will be encapsulated in a composable — improving separation of concerns. 
* Components become cleaner and easier to test by mocking composables. 
* Easier to implement consistent behaviors such as caching, error handling, loading indicators. 
* Enables SSR and CSR parity as composables use Nuxt’s SSR-friendly fetching utilities. 
* Requires discipline in the dev team to not bypass composables and fetch directly. 
* Potential for creating composable helpers for caching, pagination, and retries.