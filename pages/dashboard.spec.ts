import { Locator, Page } from '@playwright/test';

export class DashboardPage {
  userDropdownName: Locator;

  constructor(private page: Page) {
    this.userDropdownName = this.page.locator('.oxd-userdropdown-name');
  }
}
