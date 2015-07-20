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
	function isAdultMan(person) {
		var passed = person.age >= 18 && person.sex === "man";
		return passed;
	}

	// Test examples
	var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	filter(array, odd); // [1, 3, 5, 7, 9]
	filter(array, even); // [2, 4, 6, 8, 10]

	var people = [
		{ name: "Michael", age: 18, sex: "man" },
		{ name: "Matthew", age: 12, sex: "man" },
		{ name: "Elizabeth", age: 27, sex: "woman" },
		{ name: "Andrew", age: 78, sex: "man" },
		{ name: "Alyssa", age: 13, sex: "woman" },
		{ name: "William", age: 17, sex: "man" }
	];

	filter(people, isAdultMan); // Michael,Andrew

	// Other initialize
	// ...
	// This is for Problem 7: Average of even numbers
	window.filter = filter;
});