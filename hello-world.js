module.exports = function() {

	setTimeout(function() {
		console.log("1");
	}, 2000);

	console.log("2");

	setTimeout(function() {
		console.log("3");
	}, 1000);

}