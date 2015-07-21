// Problem 7: Average of even numbers
$(document).ready(function () {

	// Average of even numbers function
	function averageOfEven(array) {
		if (!array) {
			return 0;
		}

		// using "filter" (Problem 6: Filter)
		var evenNumbers = filter(array, function (value) {
			var isEven = (value % 2) === 0;
			return isEven;
		});

		// using "folding" (Problem 3: Linear fold)
		var sumResult = folding(evenNumbers, function (prevValue, currentValue) {
			var sum = prevValue + currentValue;
			return sum;
		}, 0);

		var length = evenNumbers.length
			? evenNumbers.length
			: 1;

		var result = sumResult / length;

		return result;
	}

	// Test examples
	// Initialize
	$("#bAverage").on("click", function () {

		var strArray = util.getValue("tbAverage");
		var array = util.parseArray(strArray);

		if (!array) {
			util.setError("vAverage", "Data entry errors!");
			return;
		}

		var result = averageOfEven(array);

		util.setValue("vAverage", "Average: " + result);
	});
});
