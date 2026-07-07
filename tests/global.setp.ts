import {test} from '../fixture/common-fixture';
import {expect} from '@playwright/test';

test('Global Setup for Auto Login', async ({page, loginPage, commonUtils,dashboardPage}) => { 

    //const ud = commonUtils.decryptData(process.env.USER_NAME!);
    const ud = process.env.USER_NAME!;
    //const pd = commonUtils.decryptData(process.env.PASSWORD!);
    const pd = process.env.PASSWORD!;

    await loginPage.goToLoginPage();
    //await page.waitForURL(process.env.BASE_URL + 'web/index.php/dashboard/index');
    await page.waitForLoadState('networkidle');
  

    await loginPage.login(ud, pd);

    await page.waitForLoadState('networkidle');

    await expect(dashboardPage.dashboardPagePO.dashboardHeader).toHaveText('Dashboard');
    await page.context().storageState({ path: './playwright/.auth/storageState.json' });

}) 
