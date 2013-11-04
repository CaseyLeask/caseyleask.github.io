/*global define */
define( ['variadic'], function(variadic) {
  'use strict';

  var callLeft = variadic( function (fn, args) {
    return variadic( function (remainingArgs) {
      return fn.apply(this, args.concat(remainingArgs))
    });
  });

  callLeft.displayName = 'callLeft';
  return callLeft;
});
