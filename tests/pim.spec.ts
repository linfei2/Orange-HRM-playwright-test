import { test, expect } from '../base.ts';

test.describe('PIM page tests', async () => {
  const employeeFirstName = 'Neville';
  const employeeLastName = 'Longbottom';
  const employeeFullName = `${employeeFirstName} ${employeeLastName}`;

  test.beforeEach(async ({ dashboardPage }) => {
    await dashboardPage.goTo();
    await dashboardPage.sideMenu.selectOption('PIM');
  });

  test('add employee', async ({ pimPage }) => {
    await pimPage.addEmployee(employeeFirstName, employeeLastName);
    await expect(pimPage.employeeCardName).toHaveText(employeeFullName);
  });

  test('search for employee and edit personal details', async ({ pimPage }) => {
    const driverLicenseNumber = '12345';

    await pimPage.searchEmployeeInformation(employeeFullName);
    expect(pimPage.employeeRecord).toContainText(employeeFullName);

    await pimPage.openEmployeeEdit();
    await pimPage.editDriversLicenseNumber(driverLicenseNumber);
    await pimPage.savePersonalDetails();
    expect(pimPage.driverLicenseInput).toHaveValue(driverLicenseNumber);
  })
});
