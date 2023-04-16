import BaseTest from "../NotExecute/baseTest";
import User_BD from "../../fixtures/data/User_BD";

/// <reference types="Cypress" />

describe("Test Disable Account",()=>{   
      const myTest = new BaseTest();
      
      before(() => {
        cy.copyOtherJsonFileToJsonFile()
        myTest.beforeHook();
        cy.clearCookies()  
             
      });

      beforeEach(() =>{  
        cy.reload()
      })

      it('Validate create account', () => {
        const user = new User_BD()
        const menu = myTest.homePage._goMenuLogin()
        const loginIframe = menu._goLoginIframe()
        loginIframe._goSignUp()
        loginIframe._createAccountAndReturnHome(user)
        myTest.homePage._verifyIcoLogin() 

      });
    

      it('Verify account disable', () => {
        const menu = myTest.homePage._goMenuLogin()
        const loginIframe = menu._goProfileAccount()
        loginIframe._deleteAccount()
        loginIframe._validateDeleteAccount()

      });
      

})

