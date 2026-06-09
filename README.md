# Playwright SauceDemo Framework

A Playwright + TypeScript automation framework built against SauceDemo to demonstrate modern QA Automation practices and end-to-end testing workflows.

## Overview

This project showcases a maintainable Playwright framework using the Page Object Model (POM) pattern. The framework includes positive and negative test scenarios, cross-browser execution, and business-focused workflows commonly encountered in QA Automation roles.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git
- GitHub

## Framework Design

- Page Object Model (POM)
- Cross-browser testing (Chromium, Firefox, WebKit)
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

## Project Structure

```text
playwright-saucedemo-framework/
├── pages/
├── tests/
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

## Current Status

- 8 automated test scenarios
- 24 passing cross-browser tests
- Framework built to demonstrate QA Automation engineering skills and best practices
