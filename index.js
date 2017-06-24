require('babel-core/register');
require('babel-regenerator-runtime')
require('babel-polyfill');

/**
 * This is necessary for Meteor > 1.4
 */
const regeneratorRuntime = require('babel-runtime/regenerator');
if (global.window !== undefined) {
	if (!Object.keys(global.window).includes('regeneratorRuntime')) {
		global.window.regeneratorRuntime = regeneratorRuntime
	}
}
if (!Object.keys(global).includes('regeneratorRuntime')) {
	global.regeneratorRuntime = regeneratorRuntime
}


module.exports = require('./dist/helpers').default;
