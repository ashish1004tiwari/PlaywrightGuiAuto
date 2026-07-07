import {test as basetest} from  './common-fixture';

type HooksFixture = {
    gotToLoginURL: void;
    logoutApplication: void;
};

export const test = basetest.extend<HooksFixture>({
    gotToLoginURL: async ({ loginPage }, use) => {
        await loginPage.goToLoginPage();
        await use();
    },

    logoutApplication: async ({ userPage }, use) => {
        await use();
        await userPage.applictionLogout();
    },
})


