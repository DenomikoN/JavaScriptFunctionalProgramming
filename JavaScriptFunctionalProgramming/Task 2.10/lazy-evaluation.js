// Problem 10: Lazy evaluation 
$(document).ready(function () {

	// Lazy evelution function
	function lazy(func) {
		return func.bind.apply(func, arguments);
	}

	// Specific function
	function add(/* args */) {
		var result = 0;
		for (var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		};
		return result;
	}

	// Test example
	var addThisLater = lazy(add, 1, 2, 3, 4); // 10

	// Initialize
	$("#bLazy").on("click", function () {

		var textParams = util.getValue("tbLazy");
		var arrayParams = util.parseArray(textParams);

		if (!arrayParams) {
			util.setError("vLazy", "Data entry errors!");
			return;
		}

		var params = [add].concat(arrayParams);

		var calculateThisLater = lazy.apply(this, params);

		var result = calculateThisLater();

		util.setValue("vLazy", "Sum: " + result);
	});
});
