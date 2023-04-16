import Espn_HomePage from "../../support/pageObjects/Espn_HomePage";

/// <reference types="Cypress" />

class BaseTest {
    
    constructor() {
       this.homePage = new Espn_HomePage();
    }

    beforeHook() {
      cy.log("Ejecutando el beforeHook...");
      this.homePage._visit()
    }
  
  }
  export default BaseTest;