// Problem 4: Linear unfold
$(document).ready(function () {

	// Unfolding function
	function unfolding(callback, startState) {
		if (!callback) {
			return undefined;
		}

		var current = startState;
		var result = [];

		while (typeof current === "number") {
			result.push(current);
			current = callback(current);
		};

		return result;
	}

	// Specific functions
	function decrementer(value) {
		var result = value - 1;
		if (result) {
			return result;
		}
		return false;
	}
	function incrementerOf10(value) {
		if (value >= 10) {
			return false;
		}
		var result = value + 1;
		return result;
	}
	function incrementer(endValue) {
		return function (value) {
			if (value >= endValue) {
				return false;
			}
			var result = value + 1;
			return result;
		}
	}

	// Test examples
	unfolding(decrementer, 10); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

	unfolding(incrementerOf10, 5); // [5, 6, 7, 8, 9, 10]

	unfolding(incrementer(5), -5); // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
});