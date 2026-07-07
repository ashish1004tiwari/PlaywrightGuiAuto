import {test,expect,Page, Locator,} from '@playwright/test';
import { LoginPagePO } from '../page-locators/LoginPagePO';
import process from 'process';
import { USerPagePO } from '../page-locators/UserPagePO';
//import process from 'node:process';

export class UserPage{
    readonly page: Page;
    readonly userPagePO: USerPagePO;

    constructor(page: Page){
        this.page = page;
        this.userPagePO = new USerPagePO(page);
    }

    async applictionLogout(){
        await this.page.waitForLoadState('networkidle');
        await this.userPagePO.profileButton.isVisible()
        await this.userPagePO.profileButton.click();
        await this.userPagePO.LogoutButton.isVisible();
        await this.userPagePO.profileButton.click();
        await this.page.waitForLoadState('networkidle')
        console.log("Logout button clicked...")
    }

   
    
    }
