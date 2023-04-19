/// <reference types="Cypress" />

class Espn_LoginIframe {
  constructor() {
    this.btnSignUp = "#BtnCreateAccount";
    this.txtName = "#InputFirstName";
    this.txtLastName = "#InputLastName";
    this.txtEmail = "#InputEmail";
    this.txtPassword = "#password-new";
    this.frmLogin = ".form-section";
    this.btnSignUpAccount = "#BtnSubmit";
    this.txtUserName = "#InputLoginValue";
    this.txtUserPass = "#InputPassword";
    this.txtInputPassword = "#input-InputPassword";

    this.frameWrapper = "oneid-wrapper";
    this.btnDeleteAccount = "#AccountDeleteLink";
    this.btnThisAccount = "#BtnSubmit";
    this.lblTitle = "#Title > span";
  }

  /**
   * Click Sign Up for create AccountPage
   */
  _goSignUp() {
    cy.log("Click button Sign up");
    cy.get("@iframe").find(this.btnSignUp).should("be.visible").click();
    cy.log("Account Login Page");
  }

  /**
   * Create New Account EspnPage
   * @param user User
   */
  _createAccountAndReturnHome() {
    cy.fixture("dataUser").then((dataJson) => {
      cy.log(
        "Create account : " +
          dataJson.first_name +
          " " +
          dataJson.last_name +
          " " +
          dataJson.email +
          " " +
          dataJson.password
      );
      cy.get("@iframe")
        .find(this.txtName)
        .should("be.visible")
        .type(dataJson.first_name);
      cy.get("@iframe").find(this.txtLastName).type(dataJson.last_name);
      cy.get("@iframe").find(this.txtEmail).type(dataJson.email);
      cy.get("@iframe").find(this.txtPassword).type(dataJson.password);
      cy.log("Click SignUp Account");
      cy.get("@iframe").find(this.btnSignUpAccount).click();

      cy.log("create account");
      cy.get("@iframe").should("not.have.class", "state-active");
      cy.get("@iframe").find("#loading-indicator").should("not.exist");
      cy.wait(1000);
    });
  }

  /**
   * Do log in Page Espn
   */
  _doLoginInPage() {
    cy.fixture("dataUser").then((dataJson) => {
      cy.log(
        `Login with Name :${dataJson.first_name} and Password ${dataJson.password}`
      );
      cy.get("@iframe")
        .find(this.txtUserName)
        .should("be.visible")
        .type(dataJson.email);
      cy.get("@iframe").find(this.txtUserPass).type(dataJson.password);
      cy.get("@iframe").find(this.btnSignUpAccount).click({ force: true });

      cy.get("@iframe").should("not.have.class", "state-active");
      cy.get("@iframe").find("#loading-indicator").should("not.exist");
      cy.wait(1000);
    });
  }

  /**
   * Delete account in EspnPage
   */
  _deleteAccount() {
    cy.wait(1000);
    cy.get("@iframe").find("#loading-indicator").should("not.exist");
    cy.document().then((doc) => {
      // Verificar que se ha cargado todo el documento HTML
      expect(doc.documentElement).to.exist;
      // Realizar la búsqueda de elementos aquí
      cy.get("@iframe").find(this.lblTitle).contains("Update Your Account");
      cy.get("@iframe")
        .find(this.btnDeleteAccount)
        .scrollIntoView({ easing: "linear" })
        .should("be.visible")
        .wait(1000)
        .click({ force: true });
    });

    cy.wait(1000);
    cy.get("@iframe").find("#loading-indicator").should("not.exist");
    cy.get("@iframe").find(this.lblTitle).contains("Are you sure?");
    cy.get("@iframe").find(this.btnThisAccount).click({ force: true });
    cy.get("@iframe").find("#loading-indicator").should("not.exist");
  }

  /**
   * Verify account has been deleted
   */
  _validateDeleteAccount() {
    cy.get("@iframe")
      .find(this.lblTitle)
      .should("contain.text", "Your account has been deleted.");
  }
}
module.exports = new Espn_LoginIframe();
