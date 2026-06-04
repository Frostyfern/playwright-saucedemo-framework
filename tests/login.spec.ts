import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('user can log in successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory.html/);
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

test('user sees error message with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('standard_user', 'wrongpassword');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(loginPage.errorMessage).toContainText(
    'Username and password do not match'
  );
});