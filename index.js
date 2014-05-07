/*
 * Assemble Plugin: assemble-middleware-epub
 * https://github.com/Melindrea/assemble-middleware-epub
 * Assemble is the 100% JavaScript static site generator for Node.js, Grunt.js, and Yeoman.
 *
 * Copyright (c) 2014 Melindrea
 * Licensed under the MIT license.
 */

var options = {
  events: ['component:after:render']
};

var plugin = module.exports = function(assemble) {

  assemble.registerPlugin(
    'assemble-middleware-epub',
    'Prepares HTML for epub creation',
    options,
    function (params, next) {
     console.log('assemble-middleware-epub', params.event);
     next();
    }
  );

};