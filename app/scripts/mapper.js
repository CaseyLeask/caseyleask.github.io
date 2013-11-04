/*global define */
define(['variadic'], function( variadic ) {
  'use strict';

  var mapper = variadic( function (fn, elements) {
      return elements.map(fn)
  });

  mapper.displayName = 'mapper';
  return mapper;
});
