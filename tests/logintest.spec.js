import {expect} from '@playwright/test';
//import {test} from '../fixture/pom-fixture';
//import {test} from '../fixture/common-fixture';
import {test} from '../fixture/hooks'
//import CommonUtils from '../pages/utils/CommonUtils';


test('Login Tests', async({page}) => {
 // console.log(process.env.BASE_URL);
//   const ud = commonUtils.decryptData(process.env.USERNAME);
//   const pd = commonUtils.decryptData(process.env.PASSWORD);
//   console.log('Decrypted Username:', ud);
//   console.log('Decrypted Password:', pd);

  //await loginPage.goToLoginPage();
  console.log(page.title());
  //await loginPage.login(ud, pd);

})

test('Login Tests 2 ', async({page, gotToLoginURL}) => {
  await expect(page).toHaveTitle('OrangeHRMs');
})

test('Login Tests 3 ', async({page,gotToLoginURL,logoutApplication}) => {
  await expect(page).toHaveTitle('OrangeHRM');
})


