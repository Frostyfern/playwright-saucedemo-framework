import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/InventoryPage';

test('user can add backpack to cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();

  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge).toHaveText('1');
  await expect(inventoryPage.removeBackpackButton).toBeVisible();
});

test('user can remove backpack from cart', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);

  await inventoryPage.goto();
  await inventoryPage.addBackpackToCart();

  await expect(inventoryPage.cartBadge).toHaveText('1');
  await expect(inventoryPage.removeBackpackButton).toBeVisible();

  await inventoryPage.removeBackpackFromCart();  
  await expect(inventoryPage.cartBadge).toBeHidden();
  await expect(inventoryPage.addBackpackButton).toBeVisible();
});