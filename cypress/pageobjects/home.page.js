import Page from './page.js';
import {Header, Sidebar, ProductCard} from'./components/index.js';

class HomePage extends Page {
    constructor() {
        super('/');
    }

    open() {
        super.open();
    }

    get header() {
        return Header;
    }

    get productCard() {
        return ProductCard;
    }

    get sidebar() {
        return Sidebar;
    }

    get allCards() { 
        return cy.get('a.card[data-test^="product-"]');
    }


    sortByPriceHighToLowAndWaitCardsReload() {
        this.allCards.first().find('[data-test="product-price"]').invoke('text').then((previousPrice) => {
            const initialPrice = parseFloat(previousPrice.replace('$', ''));

            this.sidebar.sortByPriceHighToLow();
            
            this.allCards.first().find('[data-test="product-price"]').should(($firstPrice) => {
                const currentPrice = parseFloat($firstPrice.text().replace('$', ''));
                expect(currentPrice).to.not.equal(initialPrice);
            });
        });
    }

    getPricesList() {
        const prodPrices = [];
        return this.allCards.each(($card) => {
            this.productCard.getPrice($card).then((price) => {
                prodPrices.push(price);
            });
        }).then(() => {
            return prodPrices;
        })
    }

    selectFirstProduct() {
        this.allCards.first().click();
    }

    selectFirstProductInStock(){
        this.allCards.not(':has([data-testid="out-of-stock"])').first().click();
    }

}

export default new HomePage();