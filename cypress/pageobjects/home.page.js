class HomePage {

    get productCards() {
        return cy.get('[data-test^="product"]');
    }

    //for favorites scenario
    selectFirstProduct() {
        this.productCards.first().click();
    }

    //for checkout scenario
    selectFirstProductInStock(){
        //add check if in stock
    }
}

export default new HomePage();