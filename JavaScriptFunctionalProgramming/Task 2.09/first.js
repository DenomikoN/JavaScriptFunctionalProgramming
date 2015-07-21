// Problem 9: First
$(document).ready(function () {

	// Firsting function 
	function first(array, callback) {
		if (!array || !callback) {
			return undefined;
		}

		for (var i = 0; i < array.length; i++) {
			if (callback(array[i])) {
				return array[i];
			}
		}

		return undefined;
	}

	// Test examples
	function negative(number) {
		if (isNaN(number)) {
			return undefined;
		}
		var result = number < 0;
		return result;
	}

	// Initialize
	$("#bFirst").on("click", function () {

		var textArray = util.getValue("tbFirst");
		var array = util.parseArray(textArray);

		if (!array) {
			util.setError("vFirst", "Data entry errors!");
			return;
		}
	
		var result = first(array, negative);

		util.setValue("vFirst", "The first negative element: " + result);
	});
});