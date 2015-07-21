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

	// Initialize
	$("#bCurry").on("click", function () {

		var textParams = util.getValue("tbCurry");
		var arrayParams = util.parseArray(textParams);

		// Create currying function
		var adder = curry(addAll, arrayParams.length);

		// Calculate
		var result = undefined;

		for (var i = 0; i < arrayParams.length; i++) {
			if (!result) {
				result = adder(arrayParams[i]); // First invoke
			} else {
				// ReSharper disable once InvokedExpressionMaybeNonFunction
				result = result(arrayParams[i]); // result(1)(2)(3)...(last) = last invoke return value is final result (Currying emulation)
			}
		}

		util.setValue("vCurry", "Result: " + result);
	});
});