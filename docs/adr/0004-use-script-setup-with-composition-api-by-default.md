# 4. Use `<script setup>` with Composition API by Default

Date: 2025-05-21

## Status

Accepted

## Context

Vue 3 supports both Options API and Composition API.

## Decision

We adopt `<script setup>` for components unless there's a specific need for Options API (e.g., 3rd-party libs).

## Consequences

- Consistent and modern syntax
- Slight learning curve for new contributors
