import { server } from '@/test/setup';

import '@testing-library/jest-dom/vitest';

vi.stubEnv('NODE_ENV', 'test');
vi.stubEnv('NEXT_PUBLIC_APP_URL', 'http://localhost:3000');
vi.stubEnv('NEXT_PUBLIC_DISCORD_ID', '123456789012345678');
vi.stubEnv('DISCORD_ID', '123456789012345678');
vi.stubEnv('WAKATIME_API_KEY', 'waka_123456789012345678');

// Mock IntersectionObserver
export class IntersectionObserver {
  root = null;
  rootMargin = '';
  thresholds = [];

  disconnect() {
    return null;
  }

  observe() {
    return null;
  }

  takeRecords() {
    return [];
  }

  unobserve() {
    return null;
  }
}
window.IntersectionObserver = IntersectionObserver;
global.IntersectionObserver = IntersectionObserver;

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
