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

	// Test examples
	var addThisLater = lazy(add, 1, 2, 3, 4, 5);

	addThisLater(); // 15
});
