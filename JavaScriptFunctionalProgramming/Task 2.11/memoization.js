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

	// Test example
	var memoFactorial = memoize(factorial);

	// Initialize
	$("#bMemoization").on("click", function () {

		var tbValue = util.getValue("tbMemoization");
		
		if (isNaN(tbValue)) {
			util.setError("vMemoization", "Data entry errors!");
			return;
		}

		var number = parseFloat(tbValue);
		var result = memoFactorial(number);

		util.setValue("vMemoization", "Factorial: " + result);
	});
});
