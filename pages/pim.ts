import { Locator, Page } from '@playwright/test';

export class PimPage {
  addEmployeeButton: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  saveButton: Locator;
  employeeCardName: Locator;

  constructor(private page: Page) {
    this.addEmployeeButton = this.page.getByRole('button', { name: 'Add' });
    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.saveButton = this.page.getByRole('button', { name: 'Save' });
    this.employeeCardName = this.page.locator('.orangehrm-edit-employee-name');
  }

  async addEmployee(firstName: string, lastName: string) {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
  }
}
