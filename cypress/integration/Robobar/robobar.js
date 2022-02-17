import{Given} from "cypress-cucumber-preprocessor/steps";
import{Then} from "cypress-cucumber-preprocessor/steps";
import{When} from "cypress-cucumber-preprocessor/steps";

//Functions
import cart from "./CartFunctions.js";

//Open website
Given('user opens robobar website', ()=>{
    cy.visit('http://localhost:3000/')
})

// Individual drinks
When('user adds a cola', (title)=>{
    cart.colaButton().click()
})

When('user adds a beer', (title)=>{
    cart.beerButton().click()
})

When('user adds a wine', (title)=>{
    cart.wineButton().click()
})

// Price
Then('total should be €{float}', (price)=>{
    cy.get(':nth-child(4) > .ng-binding')
        .should('contain', "€" + price)
})

//Various units
When('user adds {int} cola', (n)=>{
    cart.addColas(n)
})

When('user adds {int} beer', (n)=>{
    cart.addBeers(n)
})

When('user adds {int} wine', (n)=>{
    cart.addWines(n)
})

// Different drinks
When('user adds {int} cola {int} beer {int} wine', (cola, beer, wine)=>{
    cart.addColas(cola)
    cart.addBeers(beer)
    cart.addWines(wine)
})

// Submit
When('user press submit', ()=>{
    cart.orderButton().click()
})

//Age
When('user age is {int}', (n)=>{
    cart.AgeButton().type(n)
})

// Final order
When('user press order', ()=>{
    cart.confirmOrder().click()
})

Then('alert is active', ()=>{
    cart.alertMessage().should('be.visible')
})

Then('order is confirmed', ()=>{
    cart.confirmationButton().should("contain.text", "Coming right up! ~bzzzt~")
})

Then('checkout result is {string}', (expect)=>{
    if(expect === 'fail')  {
        cart.alertMessage().should('be.visible')
    }else{
        cart.confirmationButton().should("contain.text", "Coming right up! ~bzzzt~")
    }
})