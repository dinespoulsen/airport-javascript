function Airport() {
	this.planes = [];
}

Airport.prototype.land = function(plane) {
	plane.land();
	this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
	plane.takeOff();
	var indexPlane = this.planes.indexOf(plane)
	delete this.planes[indexPlane];
};
