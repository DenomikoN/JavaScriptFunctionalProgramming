// Problem 8: Sum of random numbers
$(document).ready(function () {

	// Sum of random numbers function
	function sum(numberCount, maxNumber, generatedArray) {
		if (!numberCount) {
			numberCount = 10;
		}

		if (!maxNumber) {
			numberCount = 10;
		}

		// generate array of random numbers
		var array = new Array(numberCount);

		for (var i = 0; i < numberCount; i++) {
			array[i] = Math.floor(Math.random() * (maxNumber + 1));

		}

		// using "folding" (Problem 3: Linear fold)
		var sumResult = folding(array, function (prevValue, currentValue) {
			var sum = prevValue + currentValue;
			return sum;
		}, 0);

		// return generate array
		if (arguments.length === 3) {
			generatedArray.push(array);
		}

		return sumResult;
	}

	// Test example
	// Initialize
	$("#bSum").on("click", function () {

		var strCount = util.getValue("tbSum");
		var strMaxValue = util.getValue("tbSumMaxValue");

		if (isNaN(strCount) || isNaN(strMaxValue)) {
			util.setError("vSum", "Data entry errors!");
			return;
		}

		var count = parseInt(strCount);
		var maxValue = parseInt(strMaxValue);
		var array = [];

		var result = sum(count, maxValue, array);

		util.setValue("vSum", "Sum of [" + array + "]: " + result);
	});
	

});