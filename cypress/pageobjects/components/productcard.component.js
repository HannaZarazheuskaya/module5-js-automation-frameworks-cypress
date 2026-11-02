class ProductCard {

    getPrice(card) {
        return cy.wrap(card).find('[data-test="product-price"]').invoke('text').then((priceWithDollarSign) => {
            const priceString = priceWithDollarSign.replace('$', '');
            const price = parseFloat(priceString);
            return price;
        });
    }

    getName(card) {
        return cy.wrap(card).find('[data-test="product-name"]').invoke('text').then((name) => name.trim());
    }
}

export default new ProductCard();