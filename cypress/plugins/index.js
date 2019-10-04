// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const cucumber = require('cypress-cucumber-preprocessor').default;
const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
    const options = {
        webpackOptions: require("./webpack.config.js")
    }
    on('file:preprocessor', (file) => {
        if (file.filePath.match(/\.(js|jsx)/g)) {
            console.log('111111');
            console.log(file.filePath);
        return webpack(options)(file)
    } else {
        console.log('222222');
        console.log(file.filePath);
        return cucumber()(file)}
    })
}

