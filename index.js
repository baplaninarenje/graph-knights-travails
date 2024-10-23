const getEdges = ([x, y]) => {
  const potentialMoves = [
    [x + 1, y + 2],
    [x + 2, y + 1],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x - 2, y + 1],
    [x - 1, y + 2],
  ];
  return potentialMoves.filter(
    ([newX, newY]) => newX >= 0 && newX < 8 && newY >= 0 && newY < 8
  );
};

const isValidPosition = ([x, y]) => x >= 0 && x < 8 && y >= 0 && y < 8;

const knightMoves = (start, end) => {
  if (!isValidPosition(start) || !isValidPosition(end)) {
    return 'Invalid positions. Both start and end must be within the 8x8 board.';
  }

  if (start[0] === end[0] && start[1] === end[1]) {
    return `You made it in 0 moves! Here's your path:\n[${start}]`;
  }

  const queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    const [currentPosition, path] = queue.shift();
    const possibleMoves = getEdges(currentPosition);

    for (const move of possibleMoves) {
      const newPath = [...path, move];

      if (move[0] === end[0] && move[1] === end[1]) {
        return (
          `You made it in ${newPath.length - 1} moves! Here's your path:\n` +
          newPath.map((pos) => `[${pos[0]}, ${pos[1]}]`).join('\n')
        );
      }

      if (!visited.has(move.toString())) {
        visited.add(move.toString());
        queue.push([move, newPath]);
      }
    }
  }
};

// Example usage:
console.log(knightMoves([3, 3], [4, 3]));
