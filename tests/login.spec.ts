import { test, expect } from '@playwright/test'

test('login flow works', async ({ page }) => {
  await page.goto('https://example.com/login')
  await page.fill('[data-testid="username"]', 'testuser')
  await page.fill('[data-testid="password"]', 'password')
  await page.click('[data-testid="login-button"]')
  await expect(page.locator('[data-testid="welcome"]')).toBeVisible()
})