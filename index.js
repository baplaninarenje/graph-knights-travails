const getEdges = ([x, y]) => {
  const nonFilteredEdges = [
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y + 2],
  ];
  // Filter moves to stay within the bounds of the board (0-7 for both x and y)
  return nonFilteredEdges.filter(
    ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8
  );
};

const knightMoves = (start, end) => {
  if (start[0] === end[0] && start[1] === end[1]) {
    return `You made it in 0 moves! Here's your path:\n[${start}]`;
  }

  const queue = [[start, [start]]]; // Queue stores [current position, path to that position]
  const visited = new Set(); // Track visited positions to prevent revisiting
  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();
    const [x, y] = currentPosition;
    const possibleMoves = getEdges([x, y]);

    for (let move of possibleMoves) {
      const [newX, newY] = move;
      const newPath = [...path, move];

      if (newX === end[0] && newY === end[1]) {
        return (
          `You made it in ${newPath.length - 1} moves! Here's your path:\n` +
          newPath.map((pos) => `[${pos}]`).join('\n')
        );
      }

      // If the position hasn't been visited, add it to the queue
      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, newPath]);
      }
    }
  }
};

// Example usage:
console.log(knightMoves([3, 3], [7, 3]));
