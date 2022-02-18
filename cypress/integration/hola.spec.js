// hola.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

function OpenRoboBar(){
    cy.visit('http://localhost:3002/')
}

function colaButton() {
    return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function beerButton() {
    return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function wineButton() {
    return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn')
}

function totalText() {
    return cy.get(':nth-child(4) > .ng-binding')
}

function submitOrder() {
    return cy.get('.col-12 > .btn')
}

function OrderReview() {
    return cy.get('.btn-success')
}

function Age() {
    return cy.get('#ageInput')
}

describe('Hello Cypress', () => {
    it('Says hello', () => {
        expect(true).to.equal(true)
    })
    it('Order a cola', () => {
        //cy.visit('http://localhost:3002/')
        OpenRoboBar()
        colaButton()
            .click()
        totalText()
            .should("contain.text", "€1.25")
    })
    it('Order two colas', () => {
        //cy.visit('http://localhost:3002/')
        OpenRoboBar()
        colaButton()
            .click()
            .click()
        totalText()
            .should("contain.text", "€2.50")
    })
})