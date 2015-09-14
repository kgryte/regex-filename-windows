'use strict';

var re = require( './../lib' );

var parts;

parts = re.exec( 'index.js' );
console.log( parts );
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
console.log( parts );
/*
	[
		'C:\\foo\\bar\\home.html',
		'C:'
		'\\',
		'foo\\bar\\',
		'home.html',
		'.html'
	]
*/

parts = re.exec( 'foo\\file.pdf' );
console.log( parts );
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
console.log( parts );
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
console.log( parts );
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
console.log( parts );
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
console.log( parts );
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
