class Sidebar {

    get sortDropdown() {
        return cy.get('[data-test="sort"]');
    }

    sortByPriceHighToLow() {
        this.sortDropdown.should('be.visible').select('price,desc');
    }
}

export default new Sidebar();