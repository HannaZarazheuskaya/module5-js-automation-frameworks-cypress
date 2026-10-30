import Page from './page.js';

class HomePage extends Page {
    constructor() {
        super('/');
    }

    open() {
        super.open();
    }

    get productCards() {
        return cy.get('a.card[data-test^="product-"]');
    }

    selectFirstProduct() {
        this.productCards.first().click();
    }

    selectFirstProductInStock(){
        this.productCards.not(':has([data-testid="out-of-stock"])').first().click();
    }
}

export default new HomePage();