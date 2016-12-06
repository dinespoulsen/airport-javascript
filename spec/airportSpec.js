describe ('Airport', function() {

	var airport
	var plane

	beforeEach(function() {
		airport = new Airport();
		plane = jasmine.createSpyObj('plane', ['land']);
	});
	
	it("should be able to instruct a plane to land", function() {
		airport.land(plane);
		expect(plane.land).toHaveBeenCalled();
	});

	it("should hold a plane after it has landed", function() {
		airport.land(plane);
		expect(airport.planes).toContain(plane);
	});

});
