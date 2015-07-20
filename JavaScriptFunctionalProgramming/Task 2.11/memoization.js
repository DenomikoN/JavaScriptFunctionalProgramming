// Problem 11: Memoization 
$(document).ready(function () {

	// Memoization function
	function memoize(func) {
		if ((typeof func) !== "function") {
			return null;
		}
		var cache = {};
		return function () {
			var key = JSON.stringify(arguments);
			if (cache[key]) {
				return cache[key];
			} else {
				var result = func.apply(this, arguments);
				cache[key] = result;
				return result;
			}
		}
	}

	// Specific function
	function factorial(number) {
		if (!number) {
			return 1;
		}
		var result = number * factorial(number - 1);
		return result;
	}

	// Test examples
	var memoFactorial = memoize(factorial);
	memoFactorial(4); // 24 calc
	memoFactorial(4); // 24 from cache
});
