/* global cy then */
// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {then} = require('cypress-cucumber-preprocessor')

//declare const Given, When, Then;

Then(/^I see "(.*)" in the title$/, (title) => {
  cy.title().should('include', title);
});
