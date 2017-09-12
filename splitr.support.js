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

	return string.split(pattern);
};

module.exports = splitr;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0ci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsInN0cmluZ2UiLCJzcGxpdHIiLCJzdHJpbmciLCJwYXR0ZXJuIiwiRXJyb3IiLCJSZWdFeHAiLCJzcGxpdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1FLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQ2hEOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJLE9BQU9ELE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDOUJBLFdBQVNGLFFBQVNFLE1BQVQsQ0FBVDtBQUNBOztBQUVELEtBQUlKLE1BQU9JLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJSixNQUFPSyxPQUFQLENBQUosRUFBc0I7QUFDckIsUUFBTSxJQUFJQyxLQUFKLENBQVcsaUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksT0FBT0QsT0FBUCxJQUFrQixRQUF0QixFQUFnQztBQUMvQkEsWUFBVSxJQUFJRSxNQUFKLENBQVlGLE9BQVosQ0FBVjtBQUNBOztBQUVELEtBQUksRUFBR0EsbUJBQW1CRSxNQUF0QixDQUFKLEVBQW9DO0FBQ25DLFFBQU0sSUFBSUQsS0FBSixDQUFXLGlCQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPRixPQUFPSSxLQUFQLENBQWNILE9BQWQsQ0FBUDtBQUNBLENBbENEOztBQW9DQUksT0FBT0MsT0FBUCxHQUFpQlAsTUFBakIiLCJmaWxlIjoic3BsaXRyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwic3BsaXRyXCIsXG5cdFx0XHRcInBhdGhcIjogXCJzcGxpdHIvc3BsaXRyLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJzcGxpdHIuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwic3BsaXRyXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9zcGxpdHIuZ2l0XCIsYGBcblx0XHRcdFwidGVzdFwiOiBcInNwbGl0ci10ZXN0LmpzXCIsXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXG5cdFx0fVxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXG5cblx0QG1vZHVsZS1kb2N1bWVudGF0aW9uOlxuXHRcdFNwbGl0IHN0cmluZy5cblxuXHRcdFRoaXMgd2lsbCBhbHdheXMgcmV0dXJuIGFuIGFycmF5LlxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXG5cblx0QGluY2x1ZGU6XG5cdFx0e1xuXHRcdFx0XCJmYWx6eVwiOiBcImZhbHp5XCIsXG5cdFx0XHRcInN0cmluZ2VcIjogXCJzdHJpbmdlXCJcblx0XHR9XG5cdEBlbmQtaW5jbHVkZVxuKi9cblxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcbmNvbnN0IHN0cmluZ2UgPSByZXF1aXJlKCBcInN0cmluZ2VcIiApO1xuXG5jb25zdCBzcGxpdHIgPSBmdW5jdGlvbiBzcGxpdHIoIHN0cmluZywgcGF0dGVybiApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcInN0cmluZzpyZXF1aXJlZFwiOiBcInN0cmluZ1wiLFxuXHRcdFx0XHRcInBhdHRlcm46cmVxdWlyZWRcIjogW1xuXHRcdFx0XHRcdFJlZ0V4cCxcblx0XHRcdFx0XHRcInN0cmluZ1wiXG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxuXHQqL1xuXG5cdGlmKCB0eXBlb2Ygc3RyaW5nICE9IFwic3RyaW5nXCIgKXtcblx0XHRzdHJpbmcgPSBzdHJpbmdlKCBzdHJpbmcgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggc3RyaW5nICkgKXtcblx0XHRyZXR1cm4gWyBdO1xuXHR9XG5cblx0aWYoIGZhbHp5KCBwYXR0ZXJuICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXR0ZXJuXCIgKTtcblx0fVxuXG5cdGlmKCB0eXBlb2YgcGF0dGVybiA9PSBcInN0cmluZ1wiICl7XG5cdFx0cGF0dGVybiA9IG5ldyBSZWdFeHAoIHBhdHRlcm4gKTtcblx0fVxuXG5cdGlmKCAhKCBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwICkgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBwYXR0ZXJuXCIgKTtcblx0fVxuXG5cdHJldHVybiBzdHJpbmcuc3BsaXQoIHBhdHRlcm4gKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3BsaXRyO1xuIl19
//# sourceMappingURL=splitr.support.js.map
