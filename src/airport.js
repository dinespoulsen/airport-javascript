function Airport() {
	this.planes = [];	
}

Airport.prototype.land = function(plane) {
	plane.land();
	this.planes.push(plane);
};