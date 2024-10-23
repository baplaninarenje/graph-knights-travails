# Knight's Shortest Path on a Chessboard

This [project](https://www.theodinproject.com/lessons/javascript-knights-travails) provides a JavaScript solution to find the shortest path a knight can take to move from one position to another on an 8x8 chessboard. The algorithm uses **Breadth-First Search (BFS)** to efficiently compute the shortest sequence of moves.

## Features

- Calculates all valid knight moves from a given position.
- Ensures the knight's moves stay within the bounds of a standard chessboard (8x8 grid).
- Uses BFS to explore all possible moves and find the shortest path to the destination.
- Avoids revisiting positions by tracking visited positions.

## Usage

### Function: `knightMoves(start, end)`

This function computes the shortest path a knight can take from a `start` position to an `end` position on a chessboard.

### Parameters

- `start` (Array): The starting position of the knight as `[x, y]` coordinates.
- `end` (Array): The target position of the knight as `[x, y]` coordinates.

### Returns

- A string indicating the number of moves required and the path the knight took to reach the destination.

### Example

```javascript
console.log(knightMoves([3, 3], [7, 3]));
```
