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
    {
      name: 'setup',
      testMatch: /.*[\\\/]_setup[\\\/].*\.spec\.ts/,
      retries: 2,
    },
    {
      name: 'chromium',
      testMatch: /.*[\\\/]parallel[\\\/].*\.spec\.ts/,
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'], storageState: 'src/.auth/userA.json' },
    },
    {
      name: 'firefox',
      testMatch: /.*[\\\/]parallel[\\\/].*\.spec\.ts/,
      dependencies: ['setup'],
      use: { ...devices['Desktop Firefox'], storageState: 'src/.auth/userA.json' },
    },
    {
      name: 'webkit',
      testMatch: /.*[\\\/]parallel[\\\/].*\.spec\.ts/,
      dependencies: ['setup'],
      use: { ...devices['Desktop Safari'], storageState: 'src/.auth/userA.json' },
    },
    {
      name: 'sequential',
      testMatch: /.*[\\\/]sequential[\\\/].*\.spec\.ts/,
      dependencies: ['setup'],
      retries: 2,
      workers: 1,
      use: { ...devices['Desktop Chrome'], storageState: 'src/.auth/userA.json' },
    },
  ],
});
