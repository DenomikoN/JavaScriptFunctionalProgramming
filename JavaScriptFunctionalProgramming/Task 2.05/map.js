// Problem 5: Map
$(document).ready(function () {

	// Map function
	function map(array, callback) {
		if (!array || !callback) {
			return undefined;
		}

		for (var i = 0; i < array.length; i++) {
			array[i] = callback(array[i]);
		}

		return array;
	}

	// Specific functions
	function inc(a) {
		var result = a + 1;
		return result;
	}
	function square(a) {
		var result = a * a;
		return result;
	}
	function sqrt(a) {
		var result = Math.sqrt(a);
		return result;
	}

	// Test examples
	var array = [1, 2, 3, 4, 5];
	map(array, inc); // [2, 3, 4, 5, 6]

	array = [1, 2, 3, 4, 5];
	map(array, square); // [1, 4, 9, 16, 25]

	array = [1, 4, 9, 16, 25];
	map(array, sqrt); // [1, 2, 3, 4, 5]
});