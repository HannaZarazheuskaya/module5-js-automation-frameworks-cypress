import Page from "./page.js";
import { Header } from "./components/index.js";

class ProductDetailPage extends Page{
    constructor() {
        super('/product');
    }

    get header() {
        return Header;
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