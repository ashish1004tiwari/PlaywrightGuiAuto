/// <reference types="node" />
import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';  
import path from 'path/win32';


/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

 // Load environment variables from .env file
 dotenv.config(
  { //path: path.resolve(__dirname, 'env-files/.env.' +  (process.env.ENV_NAME || 'demo'))
  // path : process.env.ENV_NAME ? './env-files/.env.${process.env.ENV_NAME}':'./env-files/.env.demo'   
   path: `env-files/.env.${process.env.ENV_NAME}`
  
  });   

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests/ui-test',
  timeout: 600 * 1000, 
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 3 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html',{open:'always'}],['allure-playwright' , {open : 'never'}],   ['junit' , {outputFile : 'test-results/junit-report.xml'}] ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: process.env.API_BASE_URL,
    // extraHTTPHeaders:{
    //     Accept : 'application/json',
    //     'Content-Type': 'application/json',
    //    // Authorization : 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    // },
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
   navigationTimeout : 30*5*1000,
   actionTimeout: 100*1000,
  },
  expect: {
     timeout: 100 *1000,
   },
  /* Configure projects for major browsers */
  projects: [
    {
      name : 'Setup',
      testMatch : /.*global.setp.ts/
    },

    {
      name: 'chromium',
      dependencies: ['Setup'],
      use: { ...devices['Desktop Chrome'],
        storageState: './playwright/.auth/storageState.json'
      },
    },

    {
      name: 'firefox',
      dependencies: ['Setup'],
      use: { ...devices['Desktop Firefox'],
         storageState: './playwright/.auth/storageState.json'
       },
    },

    {
      name: 'webkit',
      dependencies: ['Setup'],
      use: { ...devices['Desktop Safari'],
        storageState: './playwright/.auth/storageState.json'
      },
    },

     {
      name: 'apiTest',
      testDir : './tests/api-test',
      use :{
         baseURL: process.env.API_BASE_URL,
    extraHTTPHeaders:{
        Accept : 'application/json',
        'Content-Type': 'application/json',
       // Authorization : 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    },
      }
    },



    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
