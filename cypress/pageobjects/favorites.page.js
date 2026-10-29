import Page from './page.js';

class Favorites extends Page{
    constructor() {
        super('/account/favorites');
    }

    get productName() {
        return cy.get('[data-test="product-name"]');
    }
}

export default new Favorites();