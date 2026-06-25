# React Error Boundary

A React demo project that implements Error Boundaries -> a React pattern for catching JavaScript errors in the component tree and displaying a fallback UI instead of crashing the entire app.

## What is an Error Boundary?

In React, if a component throws an error during rendering, the whole app breaks. An Error Boundary is a class component that uses `componentDidCatch` and `getDerivedStateFromError` lifecycle methods to catch those errors gracefully and show a user-friendly fallback instead.

## Features

- Custom `ErrorBoundary` class component implementation
- Catches runtime errors in child components
- Displays a fallback UI when an error is detected
- Demonstrates how to isolate broken components without crashing the whole app

## Tech Stack

- **Library:** React.js
- **Language:** JavaScript
- **Styling:** CSS
- **Bootstrapped with:** Create React App

## Getting Started

```bash
git clone https://github.com/KrishnaAkbari77/React-error-boundry.git
cd React-error-boundry
npm install
npm start
```

App runs on `http://localhost:3000`

## How It Works

```jsx
<ErrorBoundary fallback={<h2>Something went wrong.</h2>}>
  <ComponentThatMightCrash />
</ErrorBoundary>
```

Wrap any component in `<ErrorBoundary>` and it will catch errors thrown by that component or its children, preventing the entire app from crashing.

## What I Learned

- How React's error boundary lifecycle methods work (`getDerivedStateFromError`, `componentDidCatch`)
- Why error boundaries must be class components (hooks cannot replace them yet)
- How to scope error handling to specific parts of the UI
- Production-safe error handling patterns in React apps
