import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.spec';
import { DashboardPage } from '../pages/dashboard.spec';

test.describe('Login tests', async () => {
  const validUsername = 'Admin';
  const validPassword = 'admin123';
  const loginFailMessage = 'Invalid credentials';

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.goto('/');
  });

  test('login with valid credentials', async ({ page }) => {
    const dashboardPage = new DashboardPage(page);

    await loginPage.login(validUsername, validPassword);
    await expect(dashboardPage.userDropdownName).toBeVisible();
  });

  test('login with invalid username', async () => {
    const invalidUsername = 'harry';

    await loginPage.login(invalidUsername, validPassword);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(loginFailMessage);
  });

  test('login with invalid password', async () => {
    const invalidPassword = 'abc123';

    await loginPage.login(validUsername, invalidPassword);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(loginFailMessage);
  });
});
