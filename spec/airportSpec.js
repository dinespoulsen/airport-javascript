'use strict';

describe ('Airport', function() {

	var airport;
	var plane;
	var weather;

	beforeEach(function() {
		airport = new Airport();
		plane = jasmine.createSpyObj('plane', ['land', 'takeOff']);
		weather = jasmine.createSpyObj('weather', ['isStormy']);
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
		spyOn(airport, 'isStormy').and.returnValue(false);
		expect(airport.planes).not.toContain(plane);
	});

	it("should prevent take off when weather is stormy", function(){
		spyOn(airport, 'isStormy').and.returnValue(true);
		airport.land(plane);
		expect( function() {airport.takeOff(plane); }).toThrow(new Error("Plane cannot take off: weather is too stormy"))
	});

	it("should allow take off when weather is not stormy", function(){
		spyOn(airport, 'isStormy').and.returnValue(false);
		airport.land(plane);
		airport.takeOff(plane);
		expect(airport.planes).not.toContain(plane);
	});

});
