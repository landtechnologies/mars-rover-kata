import { Orientations, Rover } from "./rover";

describe('Rover', () => {

  test("Rover know's it's position", () => {

    const rover = new Rover(1,1)

    expect(rover.x).toEqual(1)
    expect(rover.y).toEqual(1)
  });

  test("Rover know's it's orientation", () => {

    const rover = new Rover(1,1, Orientations.South)

    expect(rover.orientation).toEqual(Orientations.South)
  });

  test.each([
    [Orientations.North, 1, 2],
    [Orientations.East, 2, 1],
    [Orientations.South, 1, 0],
    [Orientations.West, 0, 1],
  ])("Rover can move forwards when facing %s", (orientation, expectedX, expectedY) => {

    const rover = new Rover(1,1, orientation)

    rover.move("f");

    expect(rover.x).toEqual(expectedX)
    expect(rover.y).toEqual(expectedY)
  }); 

  test.each([
    [Orientations.North, 1, 0],
    [Orientations.East, 0, 1],
    [Orientations.South, 1, 2],
    [Orientations.West, 2, 1],
  ])("Rover can move backwards when facing %s", (orientation, expectedX, expectedY) => {

    const rover = new Rover(1,1, orientation)

    rover.move("b");

    expect(rover.x).toEqual(expectedX)
    expect(rover.y).toEqual(expectedY)
  }); 

  test.each([
    [Orientations.North, Orientations.West],
    [Orientations.East, Orientations.North],
    [Orientations.South, Orientations.East],
    [Orientations.West, Orientations.South],
  ])("Rover can turn left when facing %s to face %s", (startingOrientations, expectedOrientations) => {

    const rover = new Rover(1,1, startingOrientations)

    rover.move("l");

    expect(rover.orientation.toString()).toEqual(expectedOrientations.toString())
    expect(rover.x).toEqual(1)
    expect(rover.y).toEqual(1)
  
  }); 

  test.each([
    [Orientations.North, Orientations.East],
    [Orientations.East, Orientations.South],
    [Orientations.South, Orientations.West],
    [Orientations.West, Orientations.North],
  ])("Rover can turn right when facing %s to face %s", (startingOrientations, expectedOrientations) => {

    const rover = new Rover(1,1, startingOrientations)

    rover.move("r");

    expect(rover.orientation.toString()).toEqual(expectedOrientations.toString())
    expect(rover.x).toEqual(1)
    expect(rover.y).toEqual(1)
  
  }); 

  

});
