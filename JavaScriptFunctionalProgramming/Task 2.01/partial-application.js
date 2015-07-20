// Problem 1: Partial Application
$(document).ready(function() {

	// Partial function
	function partial(method /*, args */) {
		var slice = Array.prototype.slice;
		var argsOfPartial = slice.call(arguments, 1);
		return function () {
			var argsOfThis = slice.call(arguments, 0);
			var argsOfMethod = argsOfPartial.concat(argsOfThis);
			var result = method.apply(this, argsOfMethod);
			return result;
		};
	}

	// Specific functions
	function add(/* args */) {
		var result = 0;
		for (var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		};
		return result;
	}
	function mul(/* args */) {
		var result = 1;
		for (var i = 0; i < arguments.length; i++) {
			result *= arguments[i];
		};
		return result;
	}

	// Test examples
	var inc = partial(add, 1);
	inc(2); // 1 + 2 = 3
	inc(10); // 1 + 10 = 11

	var dec = partial(add, -1);
	dec(2); // -1 + 2 = 1
	dec(7); // -1 + 7 = 6

	var add3 = partial(add, 1, 2, 3);
	add3(4, 5); // 1 + 2 + 3 + 4 + 5 = 15
	add3(5, 8, 3); // 1 + 2 + 3 + 5 + 8 + 3 = 22

	var mul2 = partial(mul, 2);
	mul2(10); // 2 * 10 = 20
	mul2(3, 4); // 2 * 3 * 4 = 24
});

