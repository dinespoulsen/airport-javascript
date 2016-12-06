describe("Plane", function(){

  var plane

  beforeEach(function(){
  plane = new Plane();
  });

  it("should be able to land", function(){
    plane.land();
    expect(plane.isFlying).toBeFalsy();
  });

  it("should be able to take off", function(){
    plane.land();
    plane.takeOff();
    expect(plane.isFlying).toBe(true);
  });

});
