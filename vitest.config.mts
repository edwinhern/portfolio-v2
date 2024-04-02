import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      exclude: ['**/vitest.setup.ts', '**/next.config.mjs', '**/postcss.config.js', '**/tailwind.config.ts'],
      provider: 'v8',
      reporter: ['text', 'html'],
      thresholds: {
        branches: 10,
        functions: 10,
        lines: 10,
        statements: 10,
      },
    },
    globals: true,
    environment: 'jsdom',
    reporters: ['verbose'],
    restoreMocks: true,
    exclude: [...configDefaults.exclude],
    setupFiles: ['vitest.setup.ts'],
  },
});
