// Problem 3: Linear fold
$(document).ready(function () {

	// Folding function
	function folding(array, callback, startValue) {
		if (!array || !callback) {
			return undefined;
		}
		if (typeof startValue !== "number") {
			startValue = 0;
		}

		var result = startValue;

		for (var i = 0; i < array.length; i++) {
			result = callback(result, array[i]);
		}

		return result;
	}

	// Specific functions
	function add(prevValue, currentValue) {
		var result = prevValue + currentValue;
		return result;
	}
	function mul(prevValue, currentValue) {
		var result = prevValue * currentValue;
		return result;
	}

	// Test examples
	var arr = [1, 2, 3, 4, 5];

	folding(arr, add, 0); // 15

	folding(arr, add, 100); // 115

	folding(arr, mul, 1); // 120

	folding(arr, mul, 2); // 240

	// Other initialize
	// ...
	// This is for Problem 7: Average of even numbers
	window.folding = folding;
});