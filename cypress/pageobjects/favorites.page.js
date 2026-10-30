import Page from './page.js';

class FavoritesPage extends Page {

    constructor() {
        super('/account/favorites');
    }

    get productName() {
        return cy.get('[data-test="product-name"]');
    }

    get favoriteProducts() {
        return cy.get('[data-test="product-name"]');
    }

    get removeBtn() {
        return cy.get('[data-test="remove-from-favorites"]');
    }


    resetFavorites() {
        if (Cypress.$('[data-test="remove-from-favorites"]').length > 0) {
            cy.get('[data-test="remove-from-favorites"]').click({multiple: true});
        }
    }
}

export default new FavoritesPage();