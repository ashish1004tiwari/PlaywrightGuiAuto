import { Locator, Page} from '@playwright/test';

export class LoginPagePO {
   readonly page: Page;
    readonly usernameInput : Locator
    readonly passwordInput  : Locator
    readonly loginButton : Locator
    readonly usernameInputxpath : Locator
    readonly passwordInputxpath : Locator
    readonly loginButtonxpath : Locator
    readonly invalidtextXpath : Locator

    constructor(page: Page){
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'username' });
        this.passwordInput = page.getByRole('textbox', { name: 'password' });
        this.loginButton = page.getByRole('button', { name: ' Login ' });
        this.usernameInputxpath = page.locator('input[name="username"]');
        this.passwordInputxpath = page.locator('input[name="password"]');
        this.loginButtonxpath = page.locator('button[type="submit"]');
        this.invalidtextXpath = page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text')
    }



}
