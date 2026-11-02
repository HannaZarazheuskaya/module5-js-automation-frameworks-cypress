import Page from './page.js';

class CheckoutPage extends Page {
    constructor() {
        super ('/checkout');
    }


    get proceedCartBtn() {
        return cy.get('[data-test="proceed-1"]');
    }

    get proceedLogIntBtn() {
        return cy.get('[data-test="proceed-2"]');
    }

    get countryDropdown() {
        return cy.get('[data-test="country"]');
    }

    get postalCode() {
        return cy.get('[data-test="postal_code"]');
    }

    get houseNum() {
        return cy.get('[data-test="house_number"]');
    }

    get proceedBillingBtn() {
        return cy.get('[data-test="proceed-3"]');
    }
    

    get paymentMethod() {
        return cy.get('[data-test="payment-method"]');
    }

    get confirmBtn() {
        return cy.get('[data-test="finish"]');
    }

    get orderConfirmationMsg() {
        return cy.get('#order-confirmation');
    }

    get paymentStatusMsg() {
        return cy.get('.alert, [data-test="payment-status-message"]');
    }


    waitForPaymentStatus() {
        this.paymentStatusMsg.should('be.visible').should('contain.text', 'successful');
    }

    proceedToCheckout() {
        this.proceedCartBtn.should('be.visible').click();
    }

    confirmLogIn() {
        this.proceedLogIntBtn.should('be.visible').click();
    }

    confirmAddress() {
        this.proceedBillingBtn.should('be.visible').click();
    }

    setBillingAddress(address) {
        this.countryDropdown.should('be.visible').select(1)
        this.postalCode.type(address.postCode);
        this.houseNum.type(address.houseNumber);
    }

    selectPaymentMethod(method) {
        this.paymentMethod.should('be.visible').select(method);
    }

    confirmPaymentMethod() {
        this.confirmBtn.should('be.visible').click();
    }
}

export default new CheckoutPage();