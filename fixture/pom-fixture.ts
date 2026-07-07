import {test as basetest} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { UserPage } from '../pages/UserPage';

type POMFixture = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    userPage : UserPage;

};

export const test = basetest.extend<POMFixture>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },

    userPage : async({page} , use) => {
        await use ( new UserPage(page));
    }
    
});


