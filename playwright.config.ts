import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 50000,
  retries: 0,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/'
  },
});
