

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

test('user can complete checkout successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge).toHaveText('1');

  await inventoryPage.openCart();

  await cartPage.checkout();

  await checkoutPage.enterCustomerInfo(
    'Tester',
    'Tester',
    '12345'
  );

  await checkoutPage.continueCheckout();

  await checkoutPage.finishCheckout();

  await expect(checkoutPage.completeMessage).toBeVisible();

  await expect(checkoutPage.completeMessage).toContainText(
    'Your order has been dispatched'
  );

});

test('user sees error when first name is missing during checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.checkout();

  await checkoutPage.enterCustomerInfo(
    '',
    'Tester',
    '12345'
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toBeVisible();

  await expect(checkoutPage.errorMessage).toContainText(
    'Error: First Name is required'
  );
});

test('user sees error when last name is missing during checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.checkout();

  await checkoutPage.enterCustomerInfo(
    'Tester',
    '',
    '12345'
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toBeVisible();

  await expect(checkoutPage.errorMessage).toContainText(
    'Error: Last Name is required'
  );
});

test('user sees error when postal code is missing during checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await inventoryPage.addBackpackToCart();
  await inventoryPage.openCart();
  await cartPage.checkout();

  await checkoutPage.enterCustomerInfo(
    'Tester',
    'Tester',
    ''
  );

  await checkoutPage.continueCheckout();

  await expect(checkoutPage.errorMessage).toBeVisible();

  await expect(checkoutPage.errorMessage).toContainText(
    'Error: Postal Code is required'
  );
});