"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "splitr",
			"path": "splitr/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/splitr.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"splitr": "splitr"
		}
	@end-include
*/

const assert = require( "should/as-function" );

//: @server:
const splitr = require( "./splitr.js" );
//: @end-server

//: @client:
const splitr = require( "./splitr.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge


//: @server:

describe( "splitr", ( ) => {

	describe( "`splitr( 'hello world', /\s/ )`", ( ) => {
		it( "should be equal to [ 'hello', 'world' ]", ( ) => {
			assert.deepEqual( splitr( "hello world", /\s/ ), [ "hello", "world" ] );
		} );
	} );

	// describe( "`splitr( null, /\s/ )`", ( ) => {
	// 	it( "should be equal to empty array", ( ) => {
	// 		assert.deepEqual( splitr( null, /\s/ ), [ ] );
	// 	} );
	// } );

} );

//: @end-server


//: @client:
describe( "splitr", ( ) => {

	describe( "`splitr( 'hello world', /\s/ )`", ( ) => {
		it( "should be equal to [ 'hello', 'world' ]", ( ) => {
			assert.deepEqual( splitr( "hello world", /\s/ ), [ "hello", "world" ] );
		} );
	} );

} );
//: @end-client


//: @bridge:
describe( "splitr", ( ) => {

	let bridgeURL = `file://${ path.resolve( __dirname, "bridge.html" ) }`;

	describe( "`splitr( 'hello world', /\s/ )`", ( ) => {
		it( "should be equal to [ 'hello', 'world' ]", ( ) => {
			//: @ignore:
			let result = browser.url( bridgeURL ).execute(

				function( ){
					return JSON.stringify( splitr( "hello world", /\s/ ) );
				}

			).value;
			//: @end-ignore

			assert.deepEqual( JSON.parse( result ), [ "hello", "world" ] );
		} );
	} );

} );
//: @end-bridge
