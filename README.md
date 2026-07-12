# Playwright Automation Framework

## Overview

This repository contains an end-to-end automation framework built using **Microsoft Playwright** with **TypeScript**. The framework supports both **UI (GUI)** and **API** automation testing and is integrated with **Azure DevOps** for Continuous Integration and Continuous Deployment (CI/CD).

The framework is designed to be scalable, maintainable, and reusable using industry best practices such as the Page Object Model (POM), environment-based configurations, reporting, and pipeline execution.

---

# Features

- UI Automation using Playwright
- API Automation using Playwright Request Context
- TypeScript Support
- Page Object Model (POM)
- Environment-based Configuration
- Cross Browser Execution
  - Chromium
  - Firefox
  - WebKit
- Parallel Test Execution
- Retry Mechanism
- Screenshots on Failure
- Video Recording
- Trace Collection
- HTML Report
- Allure Report
- Azure DevOps Pipeline Integration
- GitHub Source Control
- Data Driven Testing
- Reusable Utilities
- Global Setup & Teardown
- Custom Fixtures
- API Request/Response Validation

---

# Technology Stack

| Technology | Version |
|------------|----------|
| Playwright | Latest |
| TypeScript | Latest |
| Node.js | 18+ |
| npm | Latest |
| Azure DevOps | CI/CD |
| GitHub | Source Control |
| Allure | Reporting |

---

# Project Structure

```
PlaywrightFramework
│
├── tests
│   ├── gui
│   └── api
│
├── pages
│
├── api
│
├── utils
│
├── fixtures
│
├── test-data
│
├── reports
│
├── allure-results
│
├── playwright-report
│
├── screenshots
│
├── videos
│
├── traces
│
├── env-files
│
├── .github
│
├── azure-pipelines.yml
│
├── playwright.config.ts
│
├── package.json
│
└── README.md
```

---

# Prerequisites

Install the following before running the project:

- Node.js (18 or above)
- npm
- Git
- Visual Studio Code
- Playwright

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to project

```bash
cd PlaywrightFramework
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

# Running Tests

## Run All Tests

```bash
npx playwright test
```

---

## Run GUI Tests

```bash
npx playwright test tests/gui
```

---

## Run API Tests

```bash
npx playwright test tests/api
```

---

## Run Specific Test

```bash
npx playwright test tests/gui/login.spec.ts
```

---

## Run Using Tag

```bash
npx playwright test --grep "@smoke"
```

```bash
npx playwright test --grep "@regression"
```

---

## Run in Headed Mode

```bash
npx playwright test --headed
```

---

## Run in Debug Mode

```bash
npx playwright test --debug
```

---

## Run on Specific Browser

Chromium

```bash
npx playwright test --project=chromium
```

Firefox

```bash
npx playwright test --project=firefox
```

WebKit

```bash
npx playwright test --project=webkit
```

---

# Environment Configuration

Environment variables are stored inside:

```
env-files/
```

Example:

```
.env.dev
.env.qa
.env.stage
.env.prod
```

Run using environment

```bash
ENV_NAME=qa npx playwright test
```

---

# Reporting

## HTML Report

Generate report

```bash
npx playwright show-report
```

---

## Allure Report

Generate results

```bash
npx allure generate allure-results --clean
```

Open report

```bash
npx allure open
```

---

# Azure DevOps Integration

The framework is integrated with Azure DevOps.

Pipeline performs:

- Checkout code from GitHub
- Install Node.js
- Install npm dependencies
- Install Playwright browsers
- Execute tests
- Publish HTML Report
- Publish Allure Report
- Publish Test Results
- Archive Execution Artifacts

Pipeline file:

```
azure-pipelines.yml
```

---

# GitHub Workflow

Source code is maintained in GitHub.

Recommended branching strategy:

```
main
develop
feature/*
release/*
hotfix/*
```

---

# Test Data Management

Test data is maintained inside

```
test-data/
```

Supports

- JSON
- CSV
- Environment Variables

---

# Framework Components

### Page Object Model

Reusable page classes.

Example

```
pages/LoginPage.ts
```

---

### API Layer

Reusable API methods

```
api/UserAPI.ts
```

---

### Utilities

Contains helper methods

Examples

- Date Utility
- Random Data
- File Utility
- API Helper
- Logger

---

### Fixtures

Reusable fixtures

```
fixtures/baseFixture.ts
```

---

# Logging

Framework supports logging for

- Test Execution
- API Request
- API Response
- Errors
- Browser Actions

---

# Screenshots

Captured automatically for failed tests.

Location

```
screenshots/
```

---

# Video Recording

Execution videos are stored in

```
videos/
```

---

# Trace Viewer

Playwright traces are generated for failed tests.

Open trace

```bash
npx playwright show-trace trace.zip
```

---

# Best Practices Followed

- Page Object Model
- Reusable Components
- Clean Code
- Environment Separation
- Data Driven Testing
- Parallel Execution
- API & UI Separation
- CI/CD Ready
- Modular Design
- Scalable Architecture

---

# Future Enhancements

- Slack Notifications
- Email Reports
- Docker Execution
- Kubernetes Support
- BrowserStack Integration
- LambdaTest Integration
- AI-based Test Analysis
- Self-Healing Locators

---

# Contributing

1. Create a feature branch
2. Commit changes
3. Raise Pull Request
4. Code Review
5. Merge into Develop/Main

---

# Author

**Ashish Kumar Tiwari**

Senior QA Automation Engineer

Specializations

- Playwright
- Selenium
- API Testing
- Azure DevOps
- CI/CD
- TypeScript
- Java
- Automation Framework Design

---

# License

This project is intended for educational and organizational automation purposes.
