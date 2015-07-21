// Problem 5: Map
$(document).ready(function () {

	// Map function
	function map(array, callback) {
		if (!array || !callback) {
			return undefined;
		}

		for (var i = 0; i < array.length; i++) {
			array[i] = callback(array[i]);
		}

		return array;
	}

	// Specific functions
	function inc(a) {
		var result = a + 1;
		return result;
	}
	function square(a) {
		var result = a * a;
		return result;
	}
	function sqrt(a) {
		var result = Math.sqrt(a).toFixed(2);
		return result;
	}

	// Test examples
	// Initialize
	$("#bMap").on("click", function () {

		var strArray = util.getValue("tbMap");
		var array = util.parseArray(strArray);

		if (!array) {
			util.setError("vFilter", "Data entry error!");
		}

		var result;

		if (util.isChecked("rbMapInc")) {
			result = map(array, inc);
		} else if (util.isChecked("rbMapSquare")) {
			result = map(array, square);
		} else {
			result = map(array, sqrt);
		}

		util.setValue("vMap", "Result array: [" + result + "]");
	});
});