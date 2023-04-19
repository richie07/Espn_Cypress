import BaseTest from "../NotExecute/baseTest";
import User_BD from "../../fixtures/data/User_BD";

/// <reference types="Cypress" />

describe("Test Disable Account",()=>{   
      const myTest = new BaseTest();
      
      before(() => {
        myTest.beforeHook();
        cy.clearCookies()  
             
      });

      beforeEach(() =>{  
        cy.reload()
        const user = new User_BD() //instancia de la clase es unica y se guarda en memoria.(=Before)
        cy.writeJsonFileFromBDUser(user)
        cy.log(`Create account : Name > ${user.getFirstName()} , LastName > ${user.getLastName()} , Email > ${user.getEmail()} , Password > ${user.getPassword()}`)
      
      })

      it('Validate create account', () => {
        const menu = myTest.homePage._goMenuLogin()
        const loginIframe = menu._goLoginIframe()
        loginIframe._goSignUp()
        loginIframe._createAccountAndReturnHome()
        myTest.homePage._verifyIcoLogin() 

      });
    

      it('Verify account disable', () => {
        const menu = myTest.homePage._goMenuLogin()
        const loginIframe = menu._goProfileAccount()
        loginIframe._deleteAccount()
        loginIframe._validateDeleteAccount()

      });
      

})

