module.exports = function(width) {

	this.width = width;

	this.area = function() {
		return this.width * this.width;
	};

}
