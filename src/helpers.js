import _ from 'lodash';
import leven from 'leven';

export default class Helpers {
	/**
	 * Calculate mean out of array
	 * @param array
	 * @returns {number}
	 */
	static mean(array) {
		if (!Helpers.isNumberArray(array)) {
			throw new TypeError('Parameter of mean must be an array of numbers.');
		}
		const length = array.length || 1;
		return Helpers.sum(array) / length;
	}

	/**
	 * Calcualte standard deviation
	 * @param array
	 * @returns {number}
	 */
	static variance(array) {
		if (!Helpers.isNumberArray(array)) {
			throw new TypeError('Parameter of deviation must be an array of numbers.');
		}
		const mean = Helpers.mean(array);
		let variance = 0;
		array.forEach(v => {
			variance += Math.pow(v - mean, 2);
		});
		return variance / (array.length || 1);
	}

	static deviationSquared(array, mean = Helpers.mean(array)){
		if (!Helpers.isNumberArray(array)) {
			throw new TypeError('Parameter of Helpers.deviationSquared must be an array of numbers.');
		}
		let deviation = 0;
		array.forEach(v => {
			deviation += Math.pow(parseInt(v) - mean, 2);
		});
		return deviation / (array.length || 1);
	}

	static standardDeviation(array, mean = Helpers.mean(array)) {
		if (!Utils.isNumberArray(array)) {
			throw new TypeError('Parameter of Helpers.standardDeviation must be an array of numbers.');
		}
		return Math.sqrt(Helpers.deviationSquared(array, mean));
	}

	/**
	 * Applies softmax to an array
	 * @param array
	 */
	static softmax(array) {
		if (!Utils.isNumberArray(array)) {
			throw new TypeError('Parameter of softmax must be an array of numbers.');
		}
		const exponents = array.map(Math.exp);
		const sum = Helpers.sum(exponents);
		return exponents.map(e => e / sum);
	}

	/**
	 * Calculate sum of array
	 * (wrapper around lodash _.sum)
	 * @param array
	 */
	static sum(array) {
		array = _.flattenDeep(array);
		if (!Helpers.isNumberArray(array)) {
			throw new TypeError('Parameter of sum must be an array of numbers');
		}
		return _.sum(array);
	}

	static  isStringArray(array) {
		return Array.isArray(array) && array.length > 0 && array.every(s => typeof s === 'string');
	}

	static  isNumberArray(array) {
		return Array.isArray(array) && array.length > 0 && array.every(s => typeof s === 'number');
	}

	/**
	 * Get leven distance between two strings
	 * @param text
	 * @param otherText
	 * @returns {*|number}
	 */
	static  getDistance(text, otherText) {
		const cleanText = text.replace(/\n|\t|\s/, '').replace(/\d/gi, 'd');
		const cleanOtherText = otherText.replace(/\n|\t|\s/, '').replace(/\d/gi, 'd');
		return leven(cleanText, cleanOtherText);
	}

	/**
	 * Get the equality of two texts zero to one by taking the levenshein distance and the length of the text.
	 * @param text
	 * @param otherText
	 */
	static compareText(text, otherText) {
		if (text.length === 0 && otherText.length === 0) {
			return 1;
		}
		return 1 - Helpers.getDistance(text, otherText) / _.max([text.length, otherText.length]);
	}
}