// Register babel to transpile before any test are run
require('babel-register')();
// Disable webpack features that mocha doesn't interpret
require.extensions['.css'] = function() {}; 
