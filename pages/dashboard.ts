import { Locator, Page } from '@playwright/test';
import { SideMenu } from '../components/side-menu';

export class DashboardPage {
  sideMenu: SideMenu;
  userDropdownName: Locator;

  constructor(private page: Page) {
    this.sideMenu = new SideMenu(page);
    this.userDropdownName = this.page.locator('.oxd-userdropdown-name');
  }
}
