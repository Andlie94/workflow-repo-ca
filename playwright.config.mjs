import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], headless: true },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], headless: true },
    },
    {
      name: 'google-chrome',
      use: { ...devices['Desktop Chrome'], headless: true },
    },
  ],

  outputDir: 'test-results/',
  retries: 2, 
  reporter: [['html', { open: 'never' }]], 
});