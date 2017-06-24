'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _leven = require('leven');

var _leven2 = _interopRequireDefault(_leven);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Helpers = function () {
	function Helpers() {
		_classCallCheck(this, Helpers);
	}

	_createClass(Helpers, null, [{
		key: 'mean',

		/**
   * Calculate mean out of array
   * @param array
   * @returns {number}
   */
		value: function mean(array) {
			if (!Helpers.isNumberArray(array)) {
				throw new TypeError('Parameter of mean must be an array of numbers.');
			}
			var length = array.length || 1;
			return Helpers.sum(array) / length;
		}

		/**
   * Calcualte standard deviation
   * @param array
   * @returns {number}
   */

	}, {
		key: 'variance',
		value: function variance(array) {
			if (!Helpers.isNumberArray(array)) {
				throw new TypeError('Parameter of deviation must be an array of numbers.');
			}
			var mean = Helpers.mean(array);
			var variance = 0;
			array.forEach(function (v) {
				variance += Math.pow(v - mean, 2);
			});
			return variance / (array.length || 1);
		}
	}, {
		key: 'deviationSquared',
		value: function deviationSquared(array) {
			var mean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Helpers.mean(array);

			if (!Helpers.isNumberArray(array)) {
				throw new TypeError('Parameter of Helpers.deviationSquared must be an array of numbers.');
			}
			var deviation = 0;
			array.forEach(function (v) {
				deviation += Math.pow(parseInt(v) - mean, 2);
			});
			return deviation / (array.length || 1);
		}
	}, {
		key: 'standardDeviation',
		value: function standardDeviation(array) {
			var mean = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Helpers.mean(array);

			if (!Utils.isNumberArray(array)) {
				throw new TypeError('Parameter of Helpers.standardDeviation must be an array of numbers.');
			}
			return Math.sqrt(Helpers.deviationSquared(array, mean));
		}

		/**
   * Applies softmax to an array
   * @param array
   */

	}, {
		key: 'softmax',
		value: function softmax(array) {
			if (!Utils.isNumberArray(array)) {
				throw new TypeError('Parameter of softmax must be an array of numbers.');
			}
			var exponents = array.map(Math.exp);
			var sum = Helpers.sum(exponents);
			return exponents.map(function (e) {
				return e / sum;
			});
		}

		/**
   * Calculate sum of array
   * (wrapper around lodash _.sum)
   * @param array
   */

	}, {
		key: 'sum',
		value: function sum(array) {
			array = _lodash2.default.flattenDeep(array);
			if (!Helpers.isNumberArray(array)) {
				throw new TypeError('Parameter of sum must be an array of numbers');
			}
			return _lodash2.default.sum(array);
		}
	}, {
		key: 'isStringArray',
		value: function isStringArray(array) {
			return Array.isArray(array) && array.length > 0 && array.every(function (s) {
				return typeof s === 'string';
			});
		}
	}, {
		key: 'isNumberArray',
		value: function isNumberArray(array) {
			return Array.isArray(array) && array.length > 0 && array.every(function (s) {
				return typeof s === 'number';
			});
		}

		/**
   * Get leven distance between two strings
   * @param text
   * @param otherText
   * @returns {*|number}
   */

	}, {
		key: 'getDistance',
		value: function getDistance(text, otherText) {
			var cleanText = text.replace(/\n|\t|\s/, '').replace(/\d/gi, 'd');
			var cleanOtherText = otherText.replace(/\n|\t|\s/, '').replace(/\d/gi, 'd');
			return (0, _leven2.default)(cleanText, cleanOtherText);
		}

		/**
   * Get the equality of two texts zero to one by taking the levenshein distance and the length of the text.
   * @param text
   * @param otherText
   */

	}, {
		key: 'compareText',
		value: function compareText(text, otherText) {
			if (text.length === 0 && otherText.length === 0) {
				return 1;
			}
			return 1 - Helpers.getDistance(text, otherText) / _lodash2.default.max([text.length, otherText.length]);
		}
	}]);

	return Helpers;
}();

exports.default = Helpers;