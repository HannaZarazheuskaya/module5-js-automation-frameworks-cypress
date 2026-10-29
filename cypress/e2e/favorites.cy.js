// #7 Feature: Favorites
//   Background:
//     Given the user is logged in

//   Scenario: Add a product to Favorites
//     Given the user is on the product detail page of the first product
//     When the user adds the product to Favorites
//     And the user opens the Favorites page
//     Then the added product should be displayed on the Favorites page
import Header from '../pageobjects/components/index.js';
import { Page, HomePage, LoginPage, ProductDetailPage, FavoritesPage } from '../pageobjects/index.js';
import testdata from '../fixtures/testdata.json';

describe('Favorites', () => {

    beforeEach(() => {

        const user = testdata.customer1;

        Page.open();
        Header.goToSignIn();
        LoginPage.login(user.email, user.password);
        Header.openHomePage();
    });

    it('should add a product to customer favorites', () => {
        HomePage.selectFirstProduct();
        
        ProductDetailPage.productName.invoke('text').then((expectedProductName) => {
            const expectedName = expectedProductName.trim();

            ProductDetailPage.addToFavorites();
            Header.openFavorites();

            FavoritesPage.productName.invoke('text').then((actualProductName) => {
                const actualName = actualProductName.trim();
                expect(actualName).to.equal(expectedName);
            })
        })
    })
})
