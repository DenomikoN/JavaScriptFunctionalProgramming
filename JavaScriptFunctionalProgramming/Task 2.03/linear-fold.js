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
			result = callback(result, array[i], i, array);
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
	function average(previousValue, currentValue, index, array) {
		if (index === (array.length - 1)) {
			var averageResult = (previousValue + currentValue) / array.length;
			return averageResult;
		}

		var result = previousValue + currentValue;
		return result;
	}


	// Test examples
	// Initialize
	$("#bFold").on("click", function () {

		var strStartState = util.getValue("tbFoldStartState");
		var strArray = util.getValue("tbFoldArray");

		if (isNaN(strStartState)) {
			util.setError("vFold", "Data entry errors!");
			return;
		}

		var startState = parseInt(strStartState);
		var array = util.parseArray(strArray);

		if (!array) {
			util.setError("vFold", "Data entry errors!");
			return;
		}

		var result;

		if (util.isChecked("rbFoldAdd")) {
			result = folding(array, add, startState);
		} else if (util.isChecked("rbFoldMul")) {
			result = folding(array, mul, startState);
		} else {
			result = folding(array, average, startState);
		}

		util.setValue("vFold", "Result: " + result);
	});

	// This is for Problem 7: Average of even numbers
	window.folding = folding;
});