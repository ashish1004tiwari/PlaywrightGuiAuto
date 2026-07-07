import { Locator, Page} from '@playwright/test';
//import { constructor } from 'path/win32';

export class DashboardPagePO {
    readonly page: Page;
    readonly dashboardHeader : Locator

    constructor(page: Page){
        this.page = page;
        this.dashboardHeader = page.getByRole('heading', { name: 'Dashboard' });    
}
}
