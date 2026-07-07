import {test,expect,Page, Locator,} from '@playwright/test';
import { LoginPagePO } from '../page-locators/LoginPagePO';
import { DashboardPagePO } from '../page-locators/DashBoardPagePO';

export class DashboardPage {
    readonly page: Page
    readonly dashboardPagePO: DashboardPagePO

    constructor(page: Page){
        this.page = page;
        this.dashboardPagePO = new DashboardPagePO(page);
    }




}
