class Sidebar {

    get sortDropdown() {
        return cy.get('[data-test="sort"]');
    }

    get priceSliderMin() {
        return cy.get('.ngx-slider-pointer-min');
    }

    get priceSliderMax() {
        return cy.get('.ngx-slider-pointer-max');
    }

    get firstCategoryCheckbox() {
        return cy.get('[data-test="category-id"]:first, [class*="checkbox"] input[type="checkbox"]:first');
    }

    get cardsSelector() {
        return 'a.card[data-test^="product-"]';
    }
    
    

    sortByPriceHighToLow() {
        this.sortDropdown.should('be.visible').select('price,desc');
    }

    setSliderValue(pointer, target) {

        cy.wrap(pointer).scrollIntoView().click({ force: true });

        return cy.wrap(pointer).invoke('attr', 'aria-valuenow').then((currentValue) => {
            const current = Number(currentValue);

            if (current === target) {
                return; 
            }

            const stepsCount = Math.abs(target - current);
            const key = current > target ? '{leftArrow}' : '{rightArrow}';

            const keysSequence = key.repeat(stepsCount);

            cy.focused().type(keysSequence, { delay: 5 });
        });
    }

    filterByPriceRange(min, max) {
        this.priceSliderMin.should('be.visible');
        
        cy.get(this.cardsSelector).should('have.length.greaterThan', 0);

        cy.get(this.cardsSelector).first().find('[data-test="product-price"]').invoke('text').then((oldPriceText) => {
            const initialFirstPrice = parseFloat(oldPriceText.replace('$', ''));
            
            if (min > 0) {
                this.priceSliderMin.then(($el) => {
                    this.setSliderValue($el, min);
                })
            }
            
            this.priceSliderMax.then(($el) => {
                this.setSliderValue($el, max);
            });
            
            cy.get(this.cardsSelector).first().find('[data-test="product-price"]').should(($firstPrice) => {
                const currentPrice = parseFloat($firstPrice.text().replace('$', ''));
                expect(currentPrice).to.not.equal(initialFirstPrice);
            })
        })
    }

    checkFirstCategory() {
        this.firstCategoryCheckbox.should('be.visible').check();
    }
}

export default new Sidebar();