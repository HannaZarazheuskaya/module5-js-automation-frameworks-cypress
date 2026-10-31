// #6 Feature: Filtering
//   Scenario: Filter products by category and price range
//     Given the user is on the home page 
//     When the user filters products by price range from 20 to 80
//     And the user selects the first category
//     Then all displayed products should belong to the selected category
//     And all displayed products should have price from 20 to 80

import { HomePage } from '../pageobjects/index.js';

describe('Filter products', () => {

    it('should filter products by category and price range', () => {
        
        HomePage.open();
        //get Price range: 20-80;
        //cy.get('.ngx-slider-pointer-min') // set 20
        //cy.get('.ngx-slider-pointer-max') // set 80
        //get 1st category checkbox
        //cy.get(':nth-child(13) > :nth-child(2) > :nth-child(1)')
        //expect products displayed = selected category
        //expect products price >20 <80
    })
})