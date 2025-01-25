import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard';

test('Test auto login', async ({ page }) => {
  const dashboardPage = new DashboardPage(page);

  await page.goto('/');
  await expect(dashboardPage.userDropdownName).toBeVisible();
});
