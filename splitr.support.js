"use strict"; /*;
              	@module-license:
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
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "splitr",
              			"path": "splitr/splitr.js",
              			"file": "splitr.js",
              			"module": "splitr",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"repository": "https://github.com/volkovasystems/splitr.git",``
              			"test": "splitr-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Split string.
              
              		This will always return an array.
              
              		If the pattern does not exist on the string, this will return empty array.
              	@end-module-documentation
              
              	@include:
              		{
              			"falzy": "falzy",
              			"stringe": "stringe"
              		}
              	@end-include
              */

var falzy = require("falzy");
var stringe = require("stringe");

var splitr = function splitr(string, pattern) {
	/*;
                                               	@meta-configuration:
                                               		{
                                               			"string:required": "string",
                                               			"pattern:required": [
                                               				RegExp,
                                               				"string"
                                               			]
                                               		}
                                               	@end-meta-configuration
                                               */

	if (typeof string != "string") {
		string = stringe(string);
	}

	if (falzy(string)) {
		return [];
	}

	if (falzy(pattern)) {
		throw new Error("invalid pattern");
	}

	if (typeof pattern == "string") {
		pattern = new RegExp(pattern);
	}

	if (!(pattern instanceof RegExp)) {
		throw new Error("invalid pattern");
	}

	if (!pattern.test(string)) {
		return [];
	}

	return string.split(pattern);
};

module.exports = splitr;

//# sourceMappingURL=splitr.support.js.map