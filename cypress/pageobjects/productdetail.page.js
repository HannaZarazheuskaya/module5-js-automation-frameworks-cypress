import Page from "./page.js";

class ProductDetailPage extends Page{
    constructor() {
        super('/product');
    }

    get productName() {
        return cy.get('[data-test="product-name"]');
    }

    get addToCartBtn() {
        return cy.get('[data-test="add-to-cart"]');
    }

    get addToFavoritesBtn() {
        return cy.get('[data-test="add-to-favorites"]');
    }

    addToCart() {
        this.addToCartBtn.should('be.visible').click();
    }

    addToFavorites() {
        this.addToFavoritesBtn.click();
    }
}

export default new ProductDetailPage();