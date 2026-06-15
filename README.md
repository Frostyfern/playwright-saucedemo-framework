# Playwright SauceDemo Framework
[![Playwright Tests](https://github.com/Frostyfern/playwright-saucedemo-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/Frostyfern/playwright-saucedemo-framework/actions)

A Playwright + TypeScript automation framework built against SauceDemo to demonstrate modern QA Automation practices and end-to-end testing workflows.

## Overview

This project showcases a maintainable Playwright framework using the Page Object Model (POM) pattern. The framework includes UI and API automation, positive and negative test scenarios, cross-browser execution, and business-focused workflows commonly encountered in QA Automation roles.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub
- GitHub Actions (CI)

## Framework Design

- Page Object Model (POM)
- Cross-browser testing (Chromium, Firefox, WebKit)
- Dedicated API execution project
- Storage State authentication
- Positive and negative test coverage
- Business workflow-oriented test organization

## Test Coverage

### Login
- Successful login
- Invalid login validation

### Inventory
- Add backpack to cart
- Remove backpack from cart

### Checkout
- Successful checkout
- Missing first name validation
- Missing last name validation
- Missing postal code validation

### API
- Returns a list of products
- Returns expected details for a specific product
- Handles requests for nonexistent products

## Project Structure

```text
playwright-saucedemo-framework/
├── pages/
├── tests/
│   ├── api/
│   └── auth/
├── README.md
├── playwright.config.ts
├── package.json
└── package-lock.json
```

## Running the Tests

Install dependencies:

```bash
npm install
```

Run all tests:

```bash
npx playwright test
```

Open the HTML report:

```bash
npx playwright show-report
```

## Continuous Integration

GitHub Actions automatically executes the Playwright test suite on pushes and pull requests targeting the `main` branch. This ensures the framework is validated in a clean environment and demonstrates modern CI practices used by QA Automation teams.

## Current Status

- 11 automated test scenarios
- 28 passing tests
- Cross-browser UI execution with dedicated API execution
- Storage State authentication implemented
- GitHub Actions CI pipeline configured and passing
- UI and API automation within a single maintainable framework
- Framework built to demonstrate QA Automation engineering skills and best practices
