// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

const url = 'https://facebook.com';
const urlLogin = 'https://facebook.com/login';

Given(/^I open Facebook page$/, () => {
  cy.visit(url);
});

When(/^I open Facebook login page$/, () => {
  cy.visit(urlLogin);
});
