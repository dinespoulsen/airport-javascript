describe ('Airport', function() {

	var airport
	var plane

	beforeEach(function() {
		airport = new Airport();
		plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
	});

	it("should be able to instruct a plane to land", function() {
		airport.land(plane);
		expect(plane.land).toHaveBeenCalled();
	});

	it("should hold a plane after it has landed", function() {
		airport.land(plane);
		expect(airport.planes).toContain(plane);
	});

	it("should be able to make a plane take off", function() {
		airport.takeOff(plane);
		expect(plane.takeOff).toHaveBeenCalled();
	});

	it("no longer holds a plane after take off", function() {
		airport.land(plane);
		airport.takeOff(plane);
		expect(airport.planes).not.toContain(plane);
	});

});
