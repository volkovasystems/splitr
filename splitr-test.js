
const assert = require( "assert" );
const splitr = require( "./splitr.js" );

assert.deepEqual( splitr( "hello world", /\s/ ), [ "hello", "world" ], "should be deeply equal" );

assert.deepEqual( splitr( null, /\s/ ), [ ], "should be deeply equal" );

console.log( "ok" );
