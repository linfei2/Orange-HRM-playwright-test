import { test, expect } from '@playwright/test';

test('login with valid credentials', async ({ page }) => {
  const username = 'Admin';
  const password = 'admin123';
  const userFullName = 'Rania Hamed';

  await page.goto('https://opensource-demo.orangehrmlive.com');
  await page.getByPlaceholder('Username').fill(username);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('.oxd-userdropdown-name')).toHaveText(userFullName);
});
