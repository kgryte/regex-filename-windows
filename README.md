Split Filename
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a Windows filename.


## Installation

``` bash
$ npm install regex-filename-windows
```


## Usage

``` javascript
var re = require( 'regex-filename-windows' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to split a Windows filename. 

``` javascript
var parts = re.exec( 'C:\\foo\\bar\\index.js' );
/*
	[
		'C:\\foo\\bar\\index.js',   // input value
		'C:',                       // device
		'\\',                       // slash
		'foo\\bar\\',               // dirname
		'index.js',                 // basename
		'.js'                       // extname
	]
*/
```

## Notes

*	When executed against dotfile filenames (e.g., `.gitignore`), the [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) does __not__ capture the basename as a filename extension.

	``` javascript
	var parts = re.exec( '.gitignore' );
	/*
		[
			'.gitignore',
			'',
			'',
			'',
			'.gitignore',
			''
		]
	*/

	parts = re.exec( '.travis.yml' );
	/*
		[
			'.travis.yml',
			'',
			'',
			'',
			'.travis.yml',
			'.yml'
		]
	*/
	```


## Examples

``` javascript
var re = require( 'regex-filename-windows' );

var parts;

parts = re.exec( 'index.js' );
/*
	[
		'index.js',
		'',
		'',
		'',
		'index.js',
		'.js'
	]
*/

parts = re.exec( 'C:\\foo\\bar\\home.html' );
/*
	[
		'\\foo\\bar\\home.html',
		'C:'
		'\\',
		'foo\\bar\\',
		'home.html',
		'.html'
	]
*/

parts = re.exec( 'foo\\file.pdf' );
/*
	[
		'foo\\file.pdf',
		'',
		'',
		'foo\\',
		'file.pdf',
		'.pdf'
	]
*/

parts = re.exec( 'beep\\boop.' );
/*
	[
		'beep\\boop.',
		'',
		'',
		'beep\\',
		'boop.',
		'.'
	]
*/

parts = re.exec( '' );
/*
	[
		'',
		'',
		'',
		'',
		'',
		''
	]
*/

parts = re.exec( '\\foo\\bar\\file' );
/*
	[
		'\\foo\\bar\\file',
		'',
		'\\',
		'foo\\bar\\',
		'file',
		''
	]
*/

parts = re.exec( 'C:\\foo\\bar\\.gitignore' );
/*
	[
		'C:\\foo\\bar\\.gitignore',
		'C:',
		'\\',
		'foo\\bar\\',
		'.gitignore',
		''
	]
*/
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-filename-windows.svg
[npm-url]: https://npmjs.org/package/regex-filename-windows

[travis-image]: http://img.shields.io/travis/kgryte/regex-filename-windows/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-filename-windows

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-filename-windows/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-filename-windows?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-filename-windows.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-filename-windows

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-filename-windows.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-filename-windows

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-filename-windows.svg
[github-issues-url]: https://github.com/kgryte/regex-filename-windows/issues
