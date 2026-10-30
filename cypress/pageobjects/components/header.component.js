class Header {
    get homeLink() {
        return cy.get('[data-test="nav-home"]');
    }

    get signInLink() {
        return cy.get('[data-test="nav-sign-in"]');
    }
    
    get userMenu() {
        return cy.get('[data-test="nav-menu"]');
    }
    
    get myFavoritesLink() {
        return cy.get('[data-test="nav-my-favorites"]'); 
    }
    
    get cartLink() {
        return cy.get('[data-test="nav-cart"]');
    }


    goToSignIn() {
        this.signInLink.should('be.visible').click();
    }

    getUserName() {
        return this.userMenu.invoke('text').then(text => text.trim());
    }

    openFavorites() {
        this.userMenu.should('be.visible').click();
        this.myFavoritesLink.click();
    }

    openHomePage() {
        this.homeLink.should('be.visible').click();
    }

    openCart() {
        this.cartLink.click();
    }
}

export default new Header();