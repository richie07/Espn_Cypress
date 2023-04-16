import BaseTest from "../NotExecute/baseTest";
import User_BD from "../../fixtures/data/User_BD";

/// <reference types="Cypress" />

describe("Test Login Espn",()=>{   
      const myTest = new BaseTest();
      
      before(() => {
        cy.copyOtherJsonFileToJsonFile()  
        myTest.beforeHook();
        cy.clearCookies()       
      });

      beforeEach(() =>{  
        cy.reload()
      })

      it('Validate create account and log out', () => {
        const user = new User_BD()
        const menu = myTest.homePage._goMenuLogin()
        const loginIframe = menu._goLoginIframe()
        loginIframe._goSignUp()
        loginIframe._createAccountAndReturnHome(user)
        myTest.homePage._verifyIcoLogin()
        cy.reload() 
        myTest.homePage._goMenuLogin()
        myTest.homePage._logOutUser()
        myTest.homePage._goMenuLogin()
        menu._validateNotLoginByUserName()
      });
    

      it('Verify login in EspnPage', () => {
        const menu = myTest.homePage._goMenuLogin()
        const loginIframe = menu._goLoginIframe()
        loginIframe._doLoginInPage()
        //myTest.homePage._verifyIcoLogin()
        cy.reload()
        myTest.homePage._goMenuLogin()
        menu._validateLoginByUserName()       
      });
      

})

