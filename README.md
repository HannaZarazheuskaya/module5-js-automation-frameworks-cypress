# Module 5.JS Automation frameworks: Cypress

## Task Description
<details>
<summary><b> Please click here to expand the full task</b></summary>

Task description:
1. Walk through the provided materials (official documentation, video) to understand how Cypress works and the main benefits of the tool.
2. Create an initial setup of Cypress on the local machine
3. Create Cypress config if it does not exist and familiarize
4. Create first specs using the existing BDD scenario created in Module 2 (automate the remaining 4 tests of BDD scenarios)
5. Execute these tests using CLI in different browsers (Chrome, Firefox, Edge) in headless mode
6. Push the code to remote repository and create Merge Request

Assessment criteria (pass rate is 70%):
1. Cypress set up with trivial mistakes (-10%)
2. Not all scenarios from Module 2 are codded (each test -5%)
3. Tests are not run in all mentioned browsers (-10%)
5. Tests are not run in headless mode (-5%)
</details>


## Scenarios Under Test 

<details>
<summary><b> Please click here to expand the scenarios</b></summary>

### Scenario 5: Sort products by price from high to low

    Given the user is on the home page
    When the user sorts products by price from highest to lowest
    Then the products should be displayed in descending order by price
    And the first product should have the highest price

### Scenario 6: Filter products by category and price range

    Given the user is on the home page 
    When the user filters products by price range from 20 to 80
    And the user selects the first category
    Then all displayed products should belong to the selected category
    And all displayed products should have price from 20 to 80
    
### Scenario 7: Add a product to Favorites

    Background:
        Given the user is logged in

    Scenario: Add a product to Favorites
        Given the user is on the product detail page of the first product
        When the user adds the product to Favorites
        And the user opens the Favorites page
        Then the added product should be displayed on the Favorites page


### Scenario 8: Checkout with 'Cash on Delivery' payment
    
    Background: 
        Given the user is logged in
        And the user has a product in the cart
        And the user proceeds to checkout
        And the user enters valid billing address

    Scenario: Checkout with 'Cash on Delivery' payment
        Given the user is on the payment page
        When the user selects “Cash on Delivery” payment option
        And the user confirms payment
        Then the order confirmation with the invoice number should be displayed 

</details>

## Project structure
```
module5-js-automation-frameworks-cypress/
├── cypress          
│   └── e2e/          tests            
│   └── fixtures/     test data: credentials, address
├── pageobjects/      page objects
│   └── components/   page object components    
├── .gitignore
├── playwright.config.js
├── package-lock.json
├── package.json
└── README.md
```
* **pageobjects**: page classes with locators as per cypress practices, getters and methods.
* **components**: components: header, sidebar and product card.
* **e2e**: test flow .
* **fixtures**: contains user and admin credentials.
* **cypress.config.js**: base url.


## Tools 
* **Core Framework:** Cypress v16.2.0
* **Design Pattern:** Page Object Model
* **Test Runner:** Cypress Test Runner
* **Test Framework:** Mocha (built-in)
* **Assertions:** Chai
* **Selectors:** CSS/XPath selectors, `cy.get('[data-testid="value"]')`
* **Browsers**: Google Chrome, Firefox, Microsoft Edge

## Instructions to run 

As a prerequisite, you need to have Node.js installed. 

**1. Install the dependencies**

Open the project folder and run in terminal:
`npm install`
`npx cypress install`

**2. Run all tests in headless mode**

To run tests all browsers:

`npx cypress run`

**3. Open Cypress in UI mode and test**

To run tests all browsers:

`npx cypress open`

**4. Run a specific test**

To run only one file in headless, e.g. `sort.cy.js`:

`npx cypress run --spec "cypress/e2e/login.cy.js"`

**5. Run tests in a specific browser**

To run tests in only one browser use:
`npx cypress run --browser chrome`

`npx cypress run --browser firefox`

`npx cypress run --browser edge`
