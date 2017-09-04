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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwbGl0ci5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImZhbHp5IiwicmVxdWlyZSIsInN0cmluZ2UiLCJzcGxpdHIiLCJzdHJpbmciLCJwYXR0ZXJuIiwiRXJyb3IiLCJSZWdFeHAiLCJzcGxpdCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFFBQVFDLFFBQVMsT0FBVCxDQUFkO0FBQ0EsSUFBTUMsVUFBVUQsUUFBUyxTQUFULENBQWhCOztBQUVBLElBQU1FLFNBQVMsU0FBU0EsTUFBVCxDQUFpQkMsTUFBakIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQ2hEOzs7Ozs7Ozs7Ozs7QUFZQSxLQUFJLE9BQU9ELE1BQVAsSUFBaUIsUUFBckIsRUFBK0I7QUFDOUJBLFdBQVNGLFFBQVNFLE1BQVQsQ0FBVDtBQUNBOztBQUVELEtBQUlKLE1BQU9JLE1BQVAsQ0FBSixFQUFxQjtBQUNwQixTQUFPLEVBQVA7QUFDQTs7QUFFRCxLQUFJSixNQUFPSyxPQUFQLENBQUosRUFBc0I7QUFDckIsUUFBTSxJQUFJQyxLQUFKLENBQVcsaUJBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUksT0FBT0QsT0FBUCxJQUFrQixRQUF0QixFQUFnQztBQUMvQkEsWUFBVSxJQUFJRSxNQUFKLENBQVlGLE9BQVosQ0FBVjtBQUNBOztBQUVELEtBQUksRUFBR0EsbUJBQW1CRSxNQUF0QixDQUFKLEVBQW9DO0FBQ25DLFFBQU0sSUFBSUQsS0FBSixDQUFXLGlCQUFYLENBQU47QUFDQTs7QUFFRCxRQUFPRixPQUFPSSxLQUFQLENBQWNILE9BQWQsQ0FBUDtBQUNBLENBbENEOztBQW9DQUksT0FBT0MsT0FBUCxHQUFpQlAsTUFBakIiLCJmaWxlIjoic3BsaXRyLnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKjtcclxuXHRAbW9kdWxlLWxpY2Vuc2U6XHJcblx0XHRUaGUgTUlUIExpY2Vuc2UgKE1JVClcclxuXHRcdEBtaXQtbGljZW5zZVxyXG5cclxuXHRcdENvcHlyaWdodCAoQGMpIDIwMTcgUmljaGV2ZSBTaW9kaW5hIEJlYmVkb3JcclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxyXG5cclxuXHRcdFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcclxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcclxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcclxuXHRcdHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcclxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xyXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcclxuXHJcblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcclxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXHJcblxyXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxyXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXHJcblx0XHRGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcclxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcclxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXHJcblx0XHRPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxyXG5cdFx0U09GVFdBUkUuXHJcblx0QGVuZC1tb2R1bGUtbGljZW5zZVxyXG5cclxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInNwbGl0clwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJzcGxpdHIvc3BsaXRyLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInNwbGl0ci5qc1wiLFxyXG5cdFx0XHRcIm1vZHVsZVwiOiBcInNwbGl0clwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvc3BsaXRyLmdpdFwiLGBgXHJcblx0XHRcdFwidGVzdFwiOiBcInNwbGl0ci10ZXN0LmpzXCIsXHJcblx0XHRcdFwiZ2xvYmFsXCI6IHRydWVcclxuXHRcdH1cclxuXHRAZW5kLW1vZHVsZS1jb25maWd1cmF0aW9uXHJcblxyXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcclxuXHRcdFNwbGl0IHN0cmluZy5cclxuXHJcblx0XHRUaGlzIHdpbGwgYWx3YXlzIHJldHVybiBhbiBhcnJheS5cclxuXHRAZW5kLW1vZHVsZS1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIixcclxuXHRcdFx0XCJzdHJpbmdlXCI6IFwic3RyaW5nZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBmYWx6eSA9IHJlcXVpcmUoIFwiZmFsenlcIiApO1xyXG5jb25zdCBzdHJpbmdlID0gcmVxdWlyZSggXCJzdHJpbmdlXCIgKTtcclxuXHJcbmNvbnN0IHNwbGl0ciA9IGZ1bmN0aW9uIHNwbGl0ciggc3RyaW5nLCBwYXR0ZXJuICl7XHJcblx0Lyo7XHJcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxyXG5cdFx0XHR7XHJcblx0XHRcdFx0XCJzdHJpbmc6cmVxdWlyZWRcIjogXCJzdHJpbmdcIixcclxuXHRcdFx0XHRcInBhdHRlcm46cmVxdWlyZWRcIjogW1xyXG5cdFx0XHRcdFx0UmVnRXhwLFxyXG5cdFx0XHRcdFx0XCJzdHJpbmdcIlxyXG5cdFx0XHRcdF1cclxuXHRcdFx0fVxyXG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cclxuXHQqL1xyXG5cclxuXHRpZiggdHlwZW9mIHN0cmluZyAhPSBcInN0cmluZ1wiICl7XHJcblx0XHRzdHJpbmcgPSBzdHJpbmdlKCBzdHJpbmcgKTtcclxuXHR9XHJcblxyXG5cdGlmKCBmYWx6eSggc3RyaW5nICkgKXtcclxuXHRcdHJldHVybiBbIF07XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIHBhdHRlcm4gKSApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImludmFsaWQgcGF0dGVyblwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggdHlwZW9mIHBhdHRlcm4gPT0gXCJzdHJpbmdcIiApe1xyXG5cdFx0cGF0dGVybiA9IG5ldyBSZWdFeHAoIHBhdHRlcm4gKTtcclxuXHR9XHJcblxyXG5cdGlmKCAhKCBwYXR0ZXJuIGluc3RhbmNlb2YgUmVnRXhwICkgKXtcclxuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIHBhdHRlcm5cIiApO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIHN0cmluZy5zcGxpdCggcGF0dGVybiApO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzcGxpdHI7XHJcbiJdfQ==
//# sourceMappingURL=splitr.support.js.map
