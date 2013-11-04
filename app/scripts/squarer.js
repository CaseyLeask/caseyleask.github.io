/*global define */
define(['mapper', 'call-left'], function( mapper, callLeft ) {
  'use strict';

  var squarer = callLeft(mapper, function (x) { return x * x });

  squarer.displayName = 'squarer';
  return squarer;
});
