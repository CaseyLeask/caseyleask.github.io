/*global define */
define(['variadic'], function (variadic) {
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

    return 'App is finished!';
});
