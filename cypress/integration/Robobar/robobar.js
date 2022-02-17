
import {Given} from "cypress-cucumber-preprocessor/steps";
import {When} from "cypress-cucumber-preprocessor/steps";
import {Then} from "cypress-cucumber-preprocessor/steps";

// Adding Cola
Given('user opens robobar website', () => {
    cy.visit('http://localhost:3002/')
})
When('user adds a cola', () => {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
})
Then('total should be €{double}', (number) => {
    cy.get(':nth-child(4) > .ng-binding').should('contain.text',number)
})


//Adding Beer
When('user adds a beer', () => {
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
})
Then('total should be €2.00', () => {
    return cy.get(':nth-child(4) > .ng-binding')
})

//Adding Wine
When('user adds a wine', () => {
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
})
Then('total should be €2.00', () => {
    return cy.get(':nth-child(4) > .ng-binding')
})

