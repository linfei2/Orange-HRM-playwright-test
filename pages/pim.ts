import { Locator, Page } from '@playwright/test';

export class PimPage {
  addEmployeeButton: Locator;
  firstNameInput: Locator;
  lastNameInput: Locator;
  saveButton: Locator;
  employeeCardName: Locator;
  employeeInfoName: Locator;
  searchEmployeeButton: Locator;
  employeeRecord: Locator;
  editIcon: Locator;
  driverLicenseInput: Locator;
  savePersonalDetailsButton: Locator;

  constructor(private page: Page) {
    this.addEmployeeButton = this.page.getByRole('button', { name: 'Add' });
    this.firstNameInput = this.page.getByPlaceholder('First Name');
    this.lastNameInput = this.page.getByPlaceholder('Last Name');
    this.saveButton = this.page.getByRole('button', { name: 'Save' });
    this.employeeCardName = this.page.locator('.orangehrm-edit-employee-name');
    this.employeeInfoName = this.page.locator('.oxd-form-row input').first();
    this.searchEmployeeButton = this.page.getByRole('button', { name: 'Search' });
    this.employeeRecord = this.page.locator('.oxd-table-card').first();
    this.editIcon = this.employeeRecord.locator('.bi-pencil-fill');
    this.driverLicenseInput = this.page.locator('.oxd-input-group', { hasText: "Driver's License Number" }).locator('input');
    this.savePersonalDetailsButton = this.page.locator('.oxd-form-actions button').first();
  }

  async addEmployee(firstName: string, lastName: string): Promise<void> {
    await this.addEmployeeButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.saveButton.click();
    await this.page.waitForURL('**/viewPersonalDetails/**');
  }

  async searchEmployeeInformation(name: string): Promise<void> {
    await this.employeeInfoName.fill(name);
    await this.searchEmployeeButton.click();
    await this.page.waitForLoadState();
  }

  async openEmployeeEdit(): Promise<void> {
    await this.editIcon.click();
    await this.page.waitForURL('**/viewPersonalDetails/**');
    await this.page.waitForTimeout(2000);
  }

  async editDriversLicenseNumber(number: string): Promise<void> {
    await this.driverLicenseInput.fill(number);
  }

  async savePersonalDetails(): Promise<void> {
    await this.savePersonalDetailsButton.click();
  }

}
