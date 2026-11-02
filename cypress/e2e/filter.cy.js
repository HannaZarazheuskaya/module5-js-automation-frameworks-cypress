// #6 Feature: Filtering
//   Scenario: Filter products by category and price range
//     Given the user is on the home page 
//     When the user filters products by price range from 20 to 80
//     And the user selects the first category
//     Then all displayed products should belong to the selected category
//     And all displayed products should have price from 20 to 80

import { HomePage } from '../pageobjects/index.js';

describe('Filter products', () => {

    it('should filter products by category and price range as a Guest', () => {
        HomePage.open();

        const minPrice = 20;
        const maxPrice = 80;
        HomePage.sidebar.filterByPriceRange(minPrice, maxPrice);

        HomePage.sidebar.firstCategoryCheckbox.should('exist');
        HomePage.sidebar.checkFirstCategory();

        HomePage.validatePricesFromMinToMax(minPrice, maxPrice);
    })
})