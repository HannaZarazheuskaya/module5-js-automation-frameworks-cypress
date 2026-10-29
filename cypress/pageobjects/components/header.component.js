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
        this.signInLink.click();
    }

    getUserName() {
        return this.userMenu.invoke('text').then(text => text.trim());
    }

    openFavorites() {
        this.userMenu.click();
        this.myFavoritesLink.click();
    }

    openHomePage() {
        this.homeLink.click();
    }

    openCart() {
        this.cartLink.click();
    }
}

export default new Header();