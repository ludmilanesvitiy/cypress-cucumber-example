// we decided to not use this pattern anymore since for some reason it messes up the watcher functionality on linux
// const {given} = require('cypress-cucumber-preprocessor')

// you can have external state, and also require things!
import { GooglePo } from '../google.po';

const googlePO = new GooglePo();

Given(/^I open Google page$/, () => {
  cy.visit(googlePO.url);
});
