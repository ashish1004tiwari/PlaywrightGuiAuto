import {expect} from '@playwright/test';
import {test} from '../fixture/hooks'
import CommonUtils from '../utils/CommonUtils';
import loginpagedata from '../data/loginpagedata.json';
//import { LoginPage } from '../pages/LoginPage';


test.use({storageState:{
    cookies:[],
    origin:[]
}})

test.describe.only('TestCases Related to [Login Page]', ()=>{

test('[Login] Verify that the user can log in with valid username and password', {tag : ['@Smoke','@Regression','@TCID_2341'],
     annotations : { 
        type : 'Test Case Link',
        description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-3'}
    }
     ,async({page,gotToLoginURL}) => {
    console.log(page.title());
}) //test ends

test('[Login] Verify that the user cannot log in with an invalid username.',{tag : ['@TCID_2342','@smoke','@Regression'],
    annotations : {
        type: 'Test Case Link',
        description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-4'
    }
}, async({page,gotToLoginURL,loginPage,commonUtils}) => {
  //const pd = commonUtils.decryptData(process.env.PASSWORD)
  const pd = process.env.PASSWORD
  console.log("UserID pass "+loginpagedata.invalidUserId+" Password "+pd)
  await loginPage.login(loginpagedata.invalidUserId,pd)
  await expect(loginPage.loginPagePO.invalidtextXpath).toHaveText(loginpagedata.invalidCredentialsTextDetails)
  await page.waitForLoadState('networkidle');

})

test('[Login] Verify that the user cannot log in with an invalid password',{tag : ['@TCID_2343','@smoke','@Regression'],
    annotations : {
        type : 'Test Case Desription',
        description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-5'
    }

}, async({page,gotToLoginURL,loginPage,commonUtils}) => {
  const id = process.env.USER_NAME;
  console.log("UserID pass "+id+"Password "+loginpagedata.invalidPassword)
  await loginPage.login(process.env.USER_NAME,loginpagedata.invalidPassword)
  await expect(loginPage.loginPagePO.invalidtextXpath).toHaveText(loginpagedata.invalidCredentialsTextDetails)
   await page.waitForLoadState('networkidle');
})

test('[Login] Verify that the user cannot log in with both an invalid username and password',{tag : ['@TCID_2344','@smoke','@Regression','@UAT'],
    annotations: {
        type : 'Test Case Descption',
        description : 'https://ashish1004tiwari-1783267471955.atlassian.net/browse/KAN-6'
    }
} ,async({page,gotToLoginURL, loginPage,commonUtils}) => {
  await page.waitForLoadState('networkidle');
  await loginPage.login(loginpagedata.invalidUserId,loginpagedata.invalidPassword);
  await expect(loginPage.loginPagePO.invalidtextXpath).toHaveText(loginpagedata.invalidCredentialsTextDetails)
  await page.waitForLoadState('networkidle');
})


}) //test descibe ends