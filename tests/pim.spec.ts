import { test, expect } from '../base.ts';
import { PimPage } from '../pages/pim.ts';

test.describe('PIM page tests', async () => {
  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.goTo();
    await expect(dashboardPage.userDropdownName).toBeVisible();
    await dashboardPage.sideMenu.selectOption('PIM');
  });

  test('add employee', async ({ pimPage }) => {
    const employeeFirstName = 'Neville';
    const employeeLastName = 'Longbottom';

    await pimPage.addEmployee(employeeFirstName, employeeLastName);
    await expect(pimPage.employeeCardName).toHaveText(
      `${employeeFirstName} ${employeeLastName}`,
    );
  });
});
