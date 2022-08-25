# Mars Rover Kata

**Incremental Kata - no peeping ahead!**

This is an incremental kata to simulate a real business situation: work your way through the steps in order, but do not read the next requirement before you have finished your current one.

## Your Task

You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## Requirements

You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.

### Step 1
Implement commands that move the rover forward/backward (f,b).
### Step 2
Implement commands that turn the rover left/right (l,r).
### Step 3
Implement wrapping at edges. But be careful, planets are spheres. Connect the x edge to the other x edge, so (1,1) for x-1 to (5,1), but connect vertical edges towards themselves in inverted coordinates, so (1,1) for y-1 connects to (5,1).
### Step 4
Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Rules

Hardcore TDD. No Excuses!
Change roles (driver, navigator) after each TDD cycle.
No red phases while refactoring.
Be careful about edge cases and exceptions. We can not afford to lose a mars rover, just because the developers overlooked a null pointer.

## Credits

[Starter project](https://hoangdv.medium.com/tdd-with-typescript-and-jest-starter-project-cca94fd089f5)

[Mars rover kata](https://kata-log.rocks/string-calculator-kata)

