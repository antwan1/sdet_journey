import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  testDir: './src/test/',
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { open: 'never' }], ['list']],
  use: {
    baseURL: process.env.BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true,
  },
  projects: [
    // Auth setup project generates storage state at src/.auth/userA.json
    {
      name: 'setup',
      testMatch: /.*\/_setup\/.*\.spec\.ts/,
      retries: 2,
    },
    // UI projects depend on setup and reuse storage state
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], storageState: 'src/.auth/userA.json' },
      dependencies: ['setup'],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], storageState: 'src/.auth/userA.json' },
      dependencies: ['setup'],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], storageState: 'src/.auth/userA.json' },
      dependencies: ['setup'],
    },
  ],
});
