import { test, expect } from '@playwright/test';
import { DashboardPage } from '../pages/dashboard';
import { PimPage } from '../pages/pim';

test.describe('PIM page tests', async () => {
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    dashboardPage = new DashboardPage(page);

    await expect(dashboardPage.userDropdownName).toBeVisible();
    await dashboardPage.sideMenu.selectOption('PIM');
  });

  test('add employee', async ({ page }) => {
    const employeeFirstName = 'Neville';
    const employeeLastName = 'Longbottom';

    const pimPage = new PimPage(page);

    await pimPage.addEmployee(employeeFirstName, employeeLastName);
    await page.waitForURL('**/viewPersonalDetails/**');

    await expect(pimPage.employeeCardName).toHaveText(
      `${employeeFirstName} ${employeeLastName}`,
    );
  });
});
