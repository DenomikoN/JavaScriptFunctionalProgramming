// Problem 6: Filter
$(document).ready(function () {

	// Filter function
	function filter(array, callback) {
		if (!array || !callback) {
			return undefined;
		}
		var result = [];

		for (var i = 0; i < array.length; i++) {
			var item = array[i];
			if (callback(item)) {
				result.push(item);
			}
		}

		return result;
	}

	// Specific functions
	function odd(value) {
		var result = (value % 2) === 1;
		return result;
	}
	function even(value) {
		var result = (value % 2) === 0;
		return result;
	}

	// Test example
	// Initialize
	$("#bFilter").on("click", function () {

		var strArray = util.getValue("tbFilter");
		var array = util.parseArray(strArray);

		if (!array) {
			util.setError("vFilter", "Data entry error!");
		}

		var result;

		if (util.isChecked("rbFilterOdd")) {
			result = filter(array, odd);
		} else {
			result = filter(array, even);
		}

		util.setValue("vFilter", "Result array: [" + result + "]");
	});

	// This is for Problem 7: Average of even numbers
	window.filter = filter;
});