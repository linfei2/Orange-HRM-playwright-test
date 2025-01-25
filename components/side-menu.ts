import { Page } from '@playwright/test';

export class SideMenu {
  constructor(private page: Page) {}

  async selectOption(
    name:
      | 'Admin'
      | 'PIM'
      | 'Leave'
      | 'Time'
      | 'Recruitment'
      | 'My Info'
      | 'Performance'
      | 'Dashboard'
      | 'Directory'
      | 'Maintenance'
      | 'Claim'
      | 'Buzz',
  ): Promise<void> {
    await this.page.getByRole('navigation').getByText(name).click();
  }
}
