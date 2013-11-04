/*global define */
define(['variadic'], function (variadic) {
    'use strict';

    function unary (first) {
        return first;
    }

    console.log(unary('why', 'hello', 'there'));
    //=> 'why'

    console.log(variadic(unary)('why', 'hello', 'there'));
    //=> [ 'why', 'hello', 'there' ]

    function binary (first, rest) {
        return [first, rest];
    }

    console.log(binary('why', 'hello', 'there'));
    //=> [ 'why', 'hello' ]

    console.log(variadic(binary)('why', 'hello', 'there'));
    //=> [ 'why', [ 'hello', 'there' ] ]

    console.log(variadic(binary)('why'));
    //=> [ 'why', [ ] ]

    return 'App is finished!';
});
