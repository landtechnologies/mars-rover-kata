type Orientation = {
  toString: () => string
  move: (rover: Rover, amount: number) => void
  turn: (rover: Rover, amount: number) => void
}

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export const Orientations: Record<string, Orientation> = {
  North: {
    toString: () => "North",
    move: (rover, amount) => rover.y = rover.y + amount,
    turn: (rover, amount) => rover.orientation = compass[mod((compass.indexOf(rover.orientation) + amount), 4)]
  },
  East: {
    toString: () => "East",
    move: (rover, amount) => rover.x = rover.x + amount,
    turn: (rover, amount) => rover.orientation = compass[mod((compass.indexOf(rover.orientation) + amount), 4)]
  },
  South: {
    toString: () =>  "South",
    move: (rover, amount) => rover.y = rover.y - amount,
    turn: (rover, amount) => rover.orientation = compass[mod((compass.indexOf(rover.orientation) + amount), 4)]
  },
  West: {
    toString: () => "West",
    move: (rover, amount) => rover.x = rover.x - amount,
    turn: (rover, amount) => rover.orientation = compass[mod((compass.indexOf(rover.orientation) + amount), 4)]
  },
}

const compass = [Orientations.North, Orientations.East, Orientations.South, Orientations.West]


export class Rover {
  public x: number;
  public y: number;
  public orientation: Orientation;

  constructor(
    x: number,
    y: number,
    orientation: Orientation = Orientations.North,
  ) {
    this.x = x;
    this.y = y;
    this.orientation = orientation;
  }

  move(direction: string) {

    switch (direction) {
      case 'f':
        this.orientation.move(this, 1);        
        break;
      case 'b':
        this.orientation.move(this, -1);
        break;
      case 'l':
        this.orientation.turn(this, -1);
        break;
      case 'r':
        this.orientation.turn(this, 1);
        break;
      default:
        break;
    }
  }
}
