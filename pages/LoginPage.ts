import {test,expect,Page, Locator,} from '@playwright/test';
import { LoginPagePO } from '../page-locators/LoginPagePO';
import process from 'process';
//import process from 'node:process';

export class LoginPage{
    readonly page: Page;
    readonly loginPagePO: LoginPagePO;

    constructor(page: Page){
        this.page = page;
        this.loginPagePO = new LoginPagePO(page);
    }

    async goToLoginPage(){
      //  await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      await this.page.goto(process.env.BASE_URL!); 
      await this.page.waitForLoadState('networkidle');
      await expect(this.page).toHaveTitle('OrangeHRM');
    }

    async login(username: string, password: string){
        await this.page.waitForLoadState('networkidle');

       // await this.loginPagePO.usernameInput.fill(process.env.USERNAME!);
       // await this.loginPagePO.passwordInput.fill(process.env.PASSWORD!);
        console.log("Username: " + username);
        await this.loginPagePO.usernameInput.pressSequentially(username,{delay: 100});
        console.log("Password: " + password);
        await this.loginPagePO.passwordInput.pressSequentially(password,{delay: 100});
        await this.loginPagePO.loginButton.click();
    }

    
    }
