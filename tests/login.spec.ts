import { test, expect } from '@playwright/test'

test('login flow works', async ({ page }) => {
  await page.goto('/practice-test-login/')
  await page.getByRole('textbox', { name: 'Username' }).fill('student');
  await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation')
  await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

})


