/*global define */
define(['variadic', 'call-left'], function (variadic, callLeft) {
    'use strict';

    function unary (first) {
        return first;
    }

    console.log(unary('why', 'hello', 'there'),
                variadic(unary)('why', 'hello', 'there'));
    //=> 'why'
    //=> [ 'why', 'hello', 'there' ]

    function binary (first, rest) {
        return [first, rest];
    }

    console.log(binary('why', 'hello', 'there'),
                variadic(binary)('why', 'hello', 'there'),
                variadic(binary)('why'));
    //=> [ 'why', 'hello' ]
    //=> [ 'why', [ 'hello', 'there' ] ]
    //=> [ 'why', [ ] ]

    require(['mapper', 'squarer'], function( mapper, squarer ) {
      console.log(mapper(function (x) { return x * x }, 1, 2, 3),
                  squarer(1, 2, 3));
      //=> [1, 4, 9]
      //=> [1, 4, 9]
    });

    return 'App is finished!';
});
