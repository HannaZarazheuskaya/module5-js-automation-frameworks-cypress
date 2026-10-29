class ProductDetailPage{
    get productName() {
        return cy.get('[data-test="product-name"]');
    }

    get productQuantity() {
        return cy.get('[data-test="quantity"]');
    }

    get increaseQuantityBtn() {
        return cy.get('[data-test="increase-quantity"]');
    }

    get addToCartBtn() {
        return cy.get('[data-test="add-to-cart"]');
    }

    get addToFavoritesBtn() {
        return cy.get('[data-test="add-to-favorites"]');
    }


    increaseQuantity(count) {
        const clicksRequired = count-1;        
        for (let i = 0; i < clicksRequired; i++) {
            this.increaseQuantityBtn.click();
        }
    }

    addToCart() {
        this.addToCartBtn.waitForClickable();
        this.addToCartBtn.click();
    }

    addToFavorites() {
        this.addToFavoritesBtn.click();
    }
}

export default new ProductDetailPage();