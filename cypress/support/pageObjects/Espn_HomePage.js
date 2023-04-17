import Espn_MenuPage from "./Espn_MenuPage";
/// <reference types="Cypress" />

class Espn_HomePage {
    constructor() {
        this.icoLogin = '#global-user-trigger';
        this.btnLogOut = "#global-header  ul.account-management a.small"
    }

    /**
     * Go Home Page
     */
    _visit() {
        cy.visit('/');
    }

    /**
     * Click IconLogin
     * @return {@link MenuPage}
     */
    _goMenuLogin() {
        cy.log("Click icon Menu")
        cy.get(this.icoLogin).should('exist').click({ force: true });
        return new Espn_MenuPage();
    }

    /**
     * Verify visible icoLogin
     */
    _verifyIcoLogin(){
        //cy.get(this.icoLogin).should('exist').invoke('css','position','static')
        cy.wait(3000)
        cy.get(this.icoLogin).should('be.visible')
    }

    /**
    * Log Out EspnPage
    */
    _logOutUser() {
        cy.log("Click menu logOut")
        cy.get(this.btnLogOut).click({force:true})
    }

}
export default Espn_HomePage