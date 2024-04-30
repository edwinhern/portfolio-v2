import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    env: loadEnv('', process.cwd(), ''),
    coverage: {
      exclude: [
        '**/node_modules/**',
        '**/vitest.setup.ts',
        '**/next.config.mjs',
        '**/postcss.config.js',
        '**/tailwind.config.ts',
        '**/release.config.cjs',
        '**/.commitlintrc.ts',
      ],
    },
    globals: true,
    environment: 'jsdom',
    restoreMocks: true,
    exclude: [...configDefaults.exclude],
    setupFiles: ['vitest.setup.ts'],
  },
});
