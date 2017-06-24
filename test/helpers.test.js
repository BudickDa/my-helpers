const assert = require('assert');
const Helpers = require("../index");

describe('Helpers', function() {
	describe('#mean()', function() {
		it('should calculate mean of an array of numbers', function() {
			const results = [
				{v: [3, 4, 5, 6, 7], r: 5},
				{v: [2, 3, 1], r: 2},
				{v: [2, 2, 2, 2], r: 2},
				{v: [3, 9, 9, 3], r: 6}
			]
			results.forEach(test => {
				assert.equal(Helpers.mean(test.v), test.r, `Mean of ${test.v} should be ${test.r}`);
			});
		});
	});

	describe('#variance()', function() {
		it('should calculate variance of an array of numbers', function() {
			const results = [
				{v: [3, 4, 5, 6, 7], r: 2},
				{v: [2, 3, 1], r: 2 / 3},
				{v: [2, 2, 2, 2], r: 0},
				{v: [3, 9, 9, 3], r: 9}
			]
			results.forEach(test => {
				assert.equal(Helpers.variance(test.v), test.r, `Mean of ${test.v} should be ${test.r}`);
			});
		});
	});

	describe('#deviationSquared()', function() {
	});

	describe('#standardDeviation()', function() {
	});

	describe('#softmax()', function() {
	});

	describe('#sum()', function() {
		it('should calculate sum of items in array', function() {

		});
		it('should calculate sum of items in array of arrays', function() {

		});
		it('should calculate sum of items in a matrix', function() {

		});
		it('should calculate sum of items in a vector', function() {

		});
	});

	describe('#isStringArray()', function() {
	});

	describe('#isNumberArray()', function() {
	});

	describe('#getDistance()', function() {
		it('should return zero', function() {
			assert.equal(Helpers.getDistance('aaaa', 'aaaa'), 0);
		});
		it('should return 1', function() {
			assert.equal(Helpers.getDistance('aaab', 'aaaa'), 1);
		});
		it('should return 2', function() {
			assert.equal(Helpers.getDistance('aabb', 'aaaa'), 2);
		});
		it('should return 3', function() {
			assert.equal(Helpers.getDistance('abcd', 'aaaa'), 3);
		});
	});

	describe('#compareText()', function() {
		it('should return one', function() {
			assert.equal(Helpers.compareText('aaaa', 'aaaa'), 1);
		});
		it('should return 0,75', function() {
			assert.equal(Helpers.compareText('aaab', 'aaaa'), 0.75);
		});
		it('should return 0,5', function() {
			assert.equal(Helpers.compareText('aabb', 'aaaa'), 0.5);
		});
		it('should return 0,25', function() {
			assert.equal(Helpers.compareText('abcd', 'aaaa'), 0.25);
		});
	});

});
