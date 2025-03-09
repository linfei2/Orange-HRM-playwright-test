import { test, expect } from '../base.ts';

const notAuthenticated = { cookies: [], origins: [] };

test.describe('Login tests', async () => {
  test.use({ storageState: notAuthenticated });

  const validUsername = 'Admin';
  const validPassword = 'admin123';
  const loginFailMessage = 'Invalid credentials';

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.goTo();
  });

  test('login with valid credentials', async ({ loginPage, dashboardPage }) => {
    await loginPage.login(validUsername, validPassword);
    await expect(dashboardPage.userDropdownName).toBeVisible();
  });

  test('login with invalid username', async ({ loginPage }) => {
    const invalidUsername = 'harry';

    await loginPage.login(invalidUsername, validPassword);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(loginFailMessage);
  });

  test('login with invalid password', async ({ loginPage }) => {
    const invalidPassword = 'abc123';

    await loginPage.login(validUsername, invalidPassword);
    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toHaveText(loginFailMessage);
  });
});
