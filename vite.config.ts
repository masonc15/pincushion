import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Allow JSX in .js files (CRA-style) for tests that still use .js
      include: /\.(js|jsx|ts|tsx)$/,
    }),
  ],
  base: '/pincushion/',
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/__testing__/setupTests.ts'],
    fakeTimers: {
      // Match Jest's default: don't fake setTimeout that waitFor/act use for polling
      shouldAdvanceTime: true,
    },
    include: [
      'src/**/__tests__/**/*.{js,jsx,ts,tsx}',
      'src/**/*.{spec,test}.{js,jsx,ts,tsx}',
      'src/__testing__/**/*.{spec,test}.{js,jsx,ts,tsx}',
    ],
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['src/**/__tests__/**', 'src/__testing__/**', 'src/index.tsx'],
      thresholds: {
        branches: 70,
        functions: 70,
        lines: 70,
        statements: 70,
      },
    },
  },
});
