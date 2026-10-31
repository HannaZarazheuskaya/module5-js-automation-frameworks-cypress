// #5 Feature: Sorting
//   Scenario: Sort products by price from high to low
//     Given the user is on the home page
//     When the user sorts products by price from highest to lowest
//     Then the products should be displayed in descending order by price
//     And the first product should have the highest price

import { HomePage } from '../pageobjects/index.js';

describe('Sort products', () => {

    it('should sort products by price from high to low as a Guest', () => {
        HomePage.open();
        HomePage.sortByPriceHighToLowAndWaitCardsReload();

        HomePage.getPricesList().then((prodPrices) => {
            expect(prodPrices.length).to.be.greaterThan(0);
            
            const expectedPricesSorted = [...prodPrices].sort((a,b) => b-a);
            expect(prodPrices).to.deep.equal(expectedPricesSorted);

            const maxPrice = Math.max(...prodPrices);
            expect(prodPrices[0]).to.equal(maxPrice);
        })        
    })
})