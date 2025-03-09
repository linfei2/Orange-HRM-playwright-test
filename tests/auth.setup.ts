import { test as setup, expect } from '../base.ts';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page, loginPage, dashboardPage }) => {
  const username = 'Admin';
  const password = 'admin123';

  await loginPage.goTo();
  await loginPage.login(username, password);
  await expect(dashboardPage.userDropdownName).toBeVisible();
  
  await page.context().storageState({ path: authFile });
});
