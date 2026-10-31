//   #8 Feature: Checkout
//   Background: 
//     Given the user is logged in
//     And the user has a product in the cart
//     And the user proceeds to checkout
//     And the user enters valid billing address

//   Scenario: Checkout with 'Cash on Delivery' payment
//     Given the user is on the payment page
//     When the user selects “Cash on Delivery” payment option
//     And the user confirms payment
//     Then the order confirmation with the invoice number should be displayed 

import { LoginPage, HomePage, ProductDetailPage, CheckoutPage, AccountPage } from "../pageobjects/index.js";
import testdata from '../fixtures/testdata.json';

describe('Checkout', () => {

    beforeEach(() => {
        const user = testdata.customer2;

        HomePage.open();
        HomePage.header.goToSignIn();

        LoginPage.login(user.email, user.password);
        AccountPage.header.userMenu.should('be.visible');
        AccountPage.header.openHomePage();

        HomePage.selectFirstProductInStock();
        
        ProductDetailPage.addToCart();
        ProductDetailPage.header.openCart();

        CheckoutPage.proceedToCheckout();
        CheckoutPage.confirmLogIn();
        CheckoutPage.setBillingAddress(user.address);
        CheckoutPage.confirmAddress();
    
    });

    it('should checkout with Cash on delivery payment method', () => {
        CheckoutPage.selectPaymentMethod('cash-on-delivery');
        CheckoutPage.confirmPaymentMethod();
        CheckoutPage.confirmPaymentMethod();

        CheckoutPage.orderConfirmationMsg.should('be.visible').should('contain.text', 'Thanks for your order! Your invoice number is');
    });
});