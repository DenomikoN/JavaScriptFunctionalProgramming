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
	function incrementer(endValue) {
		return function (value) {
			var result = value + 1;
			if (result > endValue) {
				return false;
			}
			return result;
		}
	}
	function doubler(endValue) {
		return function (value) {
			var result = value * 2;
			if (result > endValue) {
				return false;
			}
			return result;
		}
	}

	// Test example
	// Initialize
	$("#bUnfold").on("click", function () {

		var strStartState = util.getValue("tbUnfoldStartState");
		var strMaxValue = util.getValue("tbUnfoldMaxValue");

		if (isNaN(strStartState) || isNaN(strMaxValue)) {
			util.setError("vUnfold", "Data entry errors!");
			return;
		}

		var startState = parseFloat(strStartState);
		var maxValue = parseFloat(strMaxValue);

		if (startState >= maxValue) {
			util.setError("vUnfold", "Data entry errors!");
			return;
		}

		var resultArray;

		if (util.isChecked("rbUnfoldInc")) {
			resultArray = unfolding(incrementer(maxValue), startState);
		} else {
			resultArray = unfolding(doubler(maxValue), startState);
		}

		util.setValue("vUnfold", "Result: " + resultArray);
	});
});