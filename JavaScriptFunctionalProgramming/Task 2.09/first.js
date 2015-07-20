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
	var array = [1, 3, -3, 6, 0, 10, 500, 54, 12, "string item", 1024];

	first(array, function () { return true; }); // 1
	first(array, function (item) { return (item % 2) === 0; }); // 6
	first(array, function (item) { return item < 0; }); // -3
	first(array, function (item) { return (typeof item) === "string"; }); // "string item"
});