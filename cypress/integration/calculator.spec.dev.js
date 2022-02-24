"use strict";

// describe block for our suite of tests
describe("Calculator tests", function () {
  it("should check 7 + 9 equals 16", function () {
    //write our test case in here
    //1. Arrange
    cy.visit("localhost:5502/index.html"); //2. Act

    cy.get('.calculator > :nth-child(4)').click();
    cy.get(':nth-child(11)').click();
    cy.get('.calculator > :nth-child(6)').click();
    cy.get('#equal_button').click(); //3. Assert

    cy.get('.display__result').should("contain", 16);
    cy.get('.display__operation').should("contain", "7 + 9");
  });
  it("should check 6 x 3 equals 18", function () {
    //write our test case in here
    //1. Arrange
    cy.visit("localhost:5502/index.html"); //2. Act

    cy.get('.calculator > :nth-child(10)').click();
    cy.get('.calculator > :nth-child(7)').click();
    cy.get('.calculator > :nth-child(14)').click();
    cy.get('#equal_button').click(); //3. Assert

    cy.get('.display__result').should("contain", 18);
    cy.get('.display__operation').should("contain", "6 x 3");
  });
  it("should check 6 - 3 equals 3", function () {
    //write our test case in here
    //1. Arrange
    cy.visit("localhost:5502/index.html"); //2. Act

    cy.get('.calculator > :nth-child(10)').click();
    cy.get(':nth-child(15)').click();
    cy.get('.calculator > :nth-child(14)').click();
    cy.get('#equal_button').click(); //3. Assert

    cy.get('.display__result').should("contain", 3);
    cy.get('.display__operation').should("contain", "6 - 3");
  });
  it("should check 6 / 3 equals 2", function () {
    //write our test case in here
    //1. Arrange
    cy.visit("localhost:5502/index.html"); //2. Act

    cy.get('.calculator > :nth-child(10)').click();
    cy.get('.calculator > :nth-child(3)').click();
    cy.get('.calculator > :nth-child(14)').click();
    cy.get('#equal_button').click(); //3. Assert

    cy.get('.display__result').should("contain", 2);
    cy.get('.display__operation').should("contain", "6 ÷ 3");
  });
  it("should not allow more than 1 decimal point, So 6..6 +3 should return error", function () {
    //write our test case in here
    //1. Arrange
    cy.visit("localhost:5502/index.html"); //2. Act

    cy.get('.calculator > :nth-child(10)').click();
    cy.get(':nth-child(17)').click();
    cy.get(':nth-child(17)').click();
    cy.get('.calculator > :nth-child(10)').click();
    cy.get(':nth-child(11)').click();
    cy.get('.calculator > :nth-child(14)').click();
    cy.get('#equal_button').click(); //3. Assert

    cy.get('.display__result').should("contain", "Syntax Error");
    cy.get('.display__operation').should("contain", "6..6 ÷ 3");
  });
});