import {expect} from '@playwright/test';
import {test} from '../../fixture/hooks'


test('Login Tests', async({page}) => {
  console.log(page.title());

})

test('Login Tests 2 ', async({page, gotToLoginURL}) => {
  await expect(page).toHaveTitle('OrangeHRMs');
})

test('Login Tests 3 ', async({page,gotToLoginURL,logoutApplication}) => {
  await expect(page).toHaveTitle('OrangeHRM');
})


