# Playwright Test Automation Framework for Login Testing

This project implements a test automation framework using Playwright with TypeScript to test the login functionality of a demo web application.

## Features

- Page Object Model (POM) for capturing locators
- Environment variables for secure credential handling
- Reusable login fixture for easy test setup
- Allure reporting for detailed test results
- Test steps for clearer reporting and readability
- Utilities for common functions

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Install Playwright browsers: `npx playwright install`
4. Create a `.env` file with demo credentials (see `.env.example` if available).
5. Run tests: `npm test`
6. Generate Allure report: `npm run allure:generate`
7. Open Allure report: `npm run allure:open`

Note: A `.gitignore` file is included to exclude dependencies, test results, and other unnecessary files from version control.

## Test Cases

- Positive: Login with valid credentials
- Negative: Login with invalid password
- Negative: Login with invalid username

## Design Choices

- Used Playwright for robust web automation
- POM to separate locators and actions for maintainability
- Fixtures for reusable login logic
- Test steps (`test.step`) to organize test actions for better report readability
- Allure for comprehensive reporting
- TypeScript for type safety and better development experience

## Improvements

- Add more test cases for edge cases
- Implement CI/CD pipeline
- Add parallel execution optimization
- Enhance error handling and logging
- Integrate with test management tools