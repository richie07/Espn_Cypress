require('cypress-wait-until');
export default class Espn_MenuPage{
    constructor() {
        this.btnLogin = "div.global-user:first-of-type a[data-affiliatename='espn']";
        this.ifrLogin = '#oneid-iframe'
        this.lblUser = "li[class='user hover'] li[class='display-user'] span"
        this.btnEspnProfile = "#global-header a[tref$='/members/v3_1/modifyAccount']"
        this.menu = "#global-user-trigger"
    }

    /**
     * Go LoginIframe
     * @return {@link LoginIframe}
     */
    _goLoginIframe(){
        cy.log("Click menu login")
        cy.get(this.menu).should('be.visible')
        cy.waitElementVisibleAndClick(this.btnLogin)
        cy.getIframe(this.ifrLogin)

    }

    /**
     * Verify contains name user
     */
    _validateLoginByUserName(){
        cy.fixture("dataUser").then((dataJson)=>{
            cy.get(this.lblUser).should('contain',dataJson.first_name)
        })       
    }

    /**
     * Verify contains not name user
     */
    _validateNotLoginByUserName(){
        cy.get(this.lblUser).should('not.exist')
    }

    /**
     * Click on the option menur profile account
     */
    _goProfileAccount(){
        cy.get(this.btnEspnProfile).click({force:true})
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000)
        cy.get(this.menu).parent().should('not.have.css', 'hover')
        cy.getIframe(this.ifrLogin)

    }

}
module.exports = new Espn_MenuPage()