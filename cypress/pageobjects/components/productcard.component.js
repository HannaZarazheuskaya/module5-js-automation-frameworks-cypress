class ProductCard {

    getPrice(card) {
        return cy.wrap(card).find('[data-test="product-price"]').invoke('text').then((priceWithDollarSign) => {
            const priceString = priceWithDollarSign.replace('$', '');
            const price = parseFloat(priceString);
            return price;
        });
    }
}

export default new ProductCard();