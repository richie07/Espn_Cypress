const baseTest = require('../../e2e/NotExecute/baseTest')
const user = require('../../fixtures/data/User_BD');
const menu = require('../../support/pageObjects/Espn_MenuPage')
const loginIframe = require('../../support/pageObjects/Espn_LoginIframe')

/// <reference types="Cypress" />

describe("Test Login Espn",()=>{   
      
      before(() => {
        baseTest.beforeHook();
        cy.clearCookies()
               
      });

      beforeEach(() =>{  
        cy.reload()
        cy.writeJsonFileFromBDUser(user)
        cy.log(`Create account : Name > ${user.getFirstName()} , LastName > ${user.getLastName()} , Email > ${user.getEmail()} , Password > ${user.getPassword()}`)

      })

      it('Validate create account and log out', () => {
        baseTest.homePage._goMenuLogin()
        menu._goLoginIframe()
        loginIframe._goSignUp()
        loginIframe._createAccountAndReturnHome()
        baseTest.homePage._verifyIcoLogin()
        cy.reload() 
        baseTest.homePage._goMenuLogin()
        baseTest.homePage._logOutUser()
        baseTest.homePage._goMenuLogin()
        menu._validateNotLoginByUserName()
      });
    

      it('Verify login in EspnPage', () => {
        baseTest.homePage._goMenuLogin()
        menu._goLoginIframe()
        loginIframe._doLoginInPage()
        baseTest.homePage._verifyIcoLogin()
        cy.reload()
        baseTest.homePage._goMenuLogin()
        menu._validateLoginByUserName()       
      });
      

})

