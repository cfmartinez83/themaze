import Position from "helpers/maze/position";
import Neighbor from "helpers/maze/neighbor";
import { BOTTOM_WALL, LEFT_WALL, RIGHT_WALL, TOP_WALL } from "helpers/maze/constants";

const random = (number) => Math.floor(Math.random() * number);

export const getNeighbors = (rowIndex, cellIndex) => {
  return [
    new Neighbor(rowIndex - 1, cellIndex, TOP_WALL, BOTTOM_WALL), // top
    new Neighbor(rowIndex, cellIndex + 1, RIGHT_WALL, LEFT_WALL), // right
    new Neighbor(rowIndex + 1, cellIndex, BOTTOM_WALL, TOP_WALL), // bottom
    new Neighbor(rowIndex, cellIndex - 1, LEFT_WALL, RIGHT_WALL)  // left
  ];
}

export const randomMaze = (x, y) => {
  // tamaño del maze
  const size = x * y;
  let cells = [];
  let unvisited = [];
  for (let i = 0; i < x; i++) {
    cells.push([]);
    unvisited.push([]);
    for (let j = 0; j < y; j++) {
      cells[i].push([0, 0, 0, 0, '']); // walls
      unvisited[i].push(true);
    }
  }

  const start = new Position(random(y), random(x));
  let current = start;
  let stack = [current];
  unvisited[current.x][current.y] = false;
  let visited = 1;

  while (visited < size) {
    let neighbors = [];
    let pot = getNeighbors(current.x, current.y);

    for (let i = 0; i < 4; i++) {
      if (pot[i].x > -1 && pot[i].x < x && pot[i].y > -1 && pot[i].y < y && unvisited[pot[i].x][pot[i].y]) {
        neighbors.push(pot[i]);
      }
    }

    if (neighbors.length) {
      const next = neighbors[random(neighbors.length)];
      
      // quito walls
      cells[current.x][current.y][next.wall1] = 1;
      cells[next.x][next.y][next.wall2] = 1;
      
      // marco celda como visitada
      unvisited[next.x][next.y] = false;
      visited++;
      current = new Position(next.x, next.y);
      stack.push(current);
    }
    // vuelvo un paso atras
    else {
      current = stack.pop();
    }
  }

  return {
    cells,
    start,
    goal: current,
    x,
    y,
  };
}

export const between = (x, min, max) => x >= min && x < max;

export const findTheWay = (maze) => {
  let visited = 1;
  const x = maze.x
  const y = maze.y;
  const size =  x * y;
  let cells = maze.cells;
  let current = maze.start;
  let stack = [current];
  let unvisited = [...new Array(x)].map(()=> [...new Array(y)].map(()=> true));
  unvisited[current.x][current.y] = false;

  while (visited < size) {

    const neighbors = [];
    let pot = getNeighbors(current.x, current.y);

    for (let l = 0; l < 4; l++) {
      const neighbor = pot[l]; // random step
      const currentRow = current.x;
      const currentCell = current.y;
      const neighborRow = neighbor.x; // row
      const neighborCell = neighbor.y; // cell
      const wall1 = neighbor.wall1; // wall 1
      const wall2 = neighbor.wall2; // wall 1

      if (between(neighborRow, 0, x) && between(neighborCell, 0, y) && unvisited[neighborRow][neighborCell]) {
        if (cells[currentRow][currentCell][wall1] === 1 && cells[neighborRow][neighborCell][wall2] === 1) neighbors.push(neighbor);
      }
    }

    if (neighbors.length) {
      visited++;

      const next = neighbors[random(neighbors.length)];

      unvisited[next.x][next.y] = false;
      current = new Position(next.x, next.y);
      stack.push(current);

      if (current.x === maze.goal.x && current.y === maze.goal.y) {
        break;
      }
    }
    else {
      stack.pop();
      current = stack[stack.length - 1];
    }
  }
  return stack;
}
