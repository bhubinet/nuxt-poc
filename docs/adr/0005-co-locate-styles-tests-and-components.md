# 5. Co-locate Styles, Tests, and Components

Date: 2025-05-21

## Status

Accepted

## Context

To improve developer experience and discoverability of component-related files.

## Decision

To improve developer experience and discoverability of component-related files.
Decision: We keep each component in its own folder:
```
components/
└── atoms/
    └── Alert/
        ├── Alert.vue
        └── Alert.test.ts
```
The change that we're proposing or have agreed to implement.

## Consequences

* More folders, but easier to maintain
* Encourages writing styles and tests early