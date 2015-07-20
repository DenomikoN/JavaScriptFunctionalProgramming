// Problem 2: Currying
$(document).ready(function () {

	// Currying function
	function curry(method, argCount) {
		if (typeof argCount !== "number") {
			argCount = method.length;
		}

		function curriedFunction(prev) {
			return function () {
				var argsCopy = Array.prototype.slice.call(arguments, 0);
				var args = prev.concat(argsCopy);
				if (args.length < argCount) {
					return curriedFunction(args);
				} else {
					return method.apply(this, args);
				}
			};
		}

		return curriedFunction([]);
	}

	// Specific functions
	function add(x, y, z) {
		var result = x + y + z;
		return result;
	}
	function addAll(/* args */) {
		var result = 0;
		for (var i = 0; i < arguments.length; i++) {
			result += arguments[i];
		};
		return result;
	}

	// Test examples
	var addXyz = curry(add);
	addXyz(1)(2)(3); // 1 + 2 + 3 = 6

	var addX = curry(add)(1);
	addX(2)(3); // 1 + 2 + 3 = 6

	var addAll3 = curry(addAll, 5);
	addAll3(1)(2)(3)(4)(5); // 1 + 2 + 3 + 4 + 5 = 15

	var addAll100 = curry(addAll, 3)(100);
	addAll100(1)(2); // 100 + 1 + 2 = 103
});