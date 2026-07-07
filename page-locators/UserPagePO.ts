import { Locator, Page} from '@playwright/test';

export class USerPagePO {
   readonly page: Page;
   readonly profileButton : Locator
   readonly LogoutButton : Locator

    constructor(page: Page){
        this.page = page;
        this.profileButton = page.locator('.oxd-userdropdown-tab')
        this.LogoutButton = page.getByRole('button', { name: 'Logout' });
    }
    
}
