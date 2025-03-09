import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login';
import { DashboardPage } from './pages/dashboard';
import { PimPage } from './pages/pim';

type myFixtures = {
    loginPage: LoginPage,
    dashboardPage: DashboardPage,
    pimPage: PimPage
}

export const test = base.extend<myFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    pimPage: async ({ page }, use) => {
        await use(new PimPage(page));
    },
})

export { expect } from '@playwright/test';