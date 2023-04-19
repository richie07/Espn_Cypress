const baseTest = require('../../e2e/NotExecute/baseTest')
const user = require('../../fixtures/data/User_BD');
const menu = require('../../support/pageObjects/Espn_MenuPage')
const loginIframe = require('../../support/pageObjects/Espn_LoginIframe')

/// <reference types="Cypress" />

describe("Test Disable Account",()=>{   
      
      before(() => {
        baseTest.beforeHook();
        cy.clearCookies()  
             
      });

      beforeEach(() =>{  
        cy.reload()
        cy.writeJsonFileFromBDUser(user)
        cy.log(`Create account : Name > ${user.getFirstName()} , LastName > ${user.getLastName()} , Email > ${user.getEmail()} , Password > ${user.getPassword()}`)
      
      })

      it('Validate create account', () => {
        baseTest.homePage._goMenuLogin()
        menu._goLoginIframe()
        loginIframe._goSignUp()
        loginIframe._createAccountAndReturnHome()
        baseTest.homePage._verifyIcoLogin() 

      });
    

      it('Verify account disable', () => {
        const menu = baseTest.homePage._goMenuLogin()
        const loginIframe = menu._goProfileAccount()
        loginIframe._deleteAccount()
        loginIframe._validateDeleteAccount()

      });
      

})

