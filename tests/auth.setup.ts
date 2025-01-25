import { test as setup, expect } from '@playwright/test';
import path from 'path';
import { LoginPage } from '../pages/login.spec';
import { DashboardPage } from '../pages/dashboard.spec';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {
  const username = 'Admin';
  const password = 'admin123';
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await page.goto('/');
  await loginPage.login(username, password);

  await page.waitForURL('**/dashboard/index');
  await expect(dashboardPage.userDropdownName).toBeVisible();
  await page.context().storageState({ path: authFile });
});
