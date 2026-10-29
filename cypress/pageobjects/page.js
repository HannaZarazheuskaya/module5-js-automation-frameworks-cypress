class Page {
    constructor(path) {
        this.path = path;
    }

    open() {
        return cy.visit(this.path);
    }
}

export default Page;