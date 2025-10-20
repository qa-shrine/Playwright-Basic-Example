# Playwright Basic Example

A minimal Playwright Test example repository showing a simple test structure, Playwright config, and npm scripts to run tests and view reports. This repo is intended as a learning starting point or quick template for writing end-to-end tests with @playwright/test.

## Table of contents

- About
- Prerequisites
- Install
- Run tests
- Playwright configuration highlights
- Tests and examples
- Project structure
- Troubleshooting & tips
- Contributing
- License


## About

This repository demonstrates how to set up Playwright Test with a small number of example tests. It includes:

- A `playwright.config.ts` with multi-browser projects (Chromium, Firefox, WebKit).
- Example tests in the `tests/` directory.
- Useful npm scripts for running tests and viewing the built-in HTML report.


## Prerequisites

- Node.js 18 or newer (recommended). Check with `node -v`.
- npm (comes with Node.js) or a compatible package manager.


## Install

1. Clone the repository (if you haven't already):

	 git clone https://github.com/qa-shrine/Playwright-Basic-Example.git

2. Install dependencies:

```bash
npm install
```

Note: Playwright browsers are downloaded automatically when you install `@playwright/test`. If you prefer to manage browser downloads manually, see Playwright docs.


## Run tests

Available npm scripts (defined in `package.json`):

- `npm test` — run Playwright tests (headless by default).
- `npm run test:headed` — run tests in headed mode (browser windows visible).
- `npm run test:report` — open the Playwright HTML report from the last run.

Examples:

Run the full test suite (headless):

```bash
npm test
```

Run tests with visible browsers (handy for debugging):

```bash
npm run test:headed
```

After a run you can view the HTML report:

```bash
npm run test:report
```


## Playwright configuration highlights

Key settings are in `playwright.config.ts`:

- `testDir: './tests'` — where tests live.
- `timeout` and `expect.timeout` — global test and assertion timeouts.
- `fullyParallel: true` — runs tests in parallel across workers.
- `retries` — set to `2` when running in CI (controlled by `process.env.CI`).
- `reporter` — console `list` + an `html` report written to `playwright-report`.
- `use.baseURL` — configured as `http://localhost:3000` (useful for local apps).

The config also defines three projects to run the suite in Chromium, Firefox and WebKit.


## Tests and examples

There are two example tests in `tests/`:

- `basic.spec.ts` — simple smoke test that navigates to `https://example.com` and asserts the page title contains "Example Domain".
- `login.spec.ts` — a small illustrative login flow that fills username/password inputs and verifies a welcome element. It uses `data-testid` selectors as a recommended practice for test stability.

These tests are intentionally minimal. Use them as templates when adding real tests for your application.


## Project structure

At a glance:

```
package.json                # npm scripts and dev dependencies
playwright.config.ts        # Playwright Test configuration
tests/                      # Example test files
	basic.spec.ts
	login.spec.ts
README.md                   # (this file)
```


## Troubleshooting & tips

- Browser not launching / tests failing locally:
	- Ensure Node.js and npm are up-to-date.
	- Reinstall deps and browsers: `npm ci` then `npx playwright install`.
	- Try headed mode to see what the browser is doing: `npm run test:headed`.

- Tests are flaky:
	- Prefer stable selectors (e.g., `data-testid`) over brittle CSS/XPath.
	- Increase timeouts in `playwright.config.ts` or use explicit waits when necessary.
	- Use `trace` (configured as `on-first-retry`) and the HTML report to debug failures.

- Running against a local app:
	- If your app runs on a specific port, update `use.baseURL` in `playwright.config.ts` or call `page.goto()` with the full URL.