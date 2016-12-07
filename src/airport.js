function Airport() {
	this.planes = [];
}

Airport.prototype.land = function(plane) {
	plane.land();
	this.planes.push(plane);
};

Airport.prototype.isStormy = function(){
	return false;
};

Airport.prototype.takeOff = function(plane) {
	if (this.isStormy()){
		throw new Error("Plane cannot take off: weather is too stormy");
	}
	else {
		plane.takeOff();
		var indexPlane = this.planes.indexOf(plane)
		delete this.planes[indexPlane];
	}
};
