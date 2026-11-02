import Page from './page.js';

class LoginPage extends Page {
    constructor() {
        super('/auth/login');
    }

    get emailField() {
        return cy.get('[data-test="email"]');
    }

    get passwordField() {
        return cy.get('[data-test="password"]');
    }
    
    get loginButton() {
        return cy.get('[data-test="login-submit"]');
    }   
    
    login(email, password) {
        this.emailField.should('be.visible').type(email);
        this.passwordField.should('be.visible').type(password);
        this.loginButton.click();
    }
        
}
export default new LoginPage();