import { cleanup } from '@testing-library/react';

import '@testing-library/jest-dom';

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

afterEach(() => {
  cleanup();
});
