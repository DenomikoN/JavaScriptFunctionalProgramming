// Problem 8: Sum of random numbers
$(document).ready(function () {

	// Sum of random numbers function
	function sum(numberCount, maxNumber) {
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

		return sumResult;
	}

	// Test examples
	sum(10, 100); // sum of 10 random numbers, where item max value of 100
});