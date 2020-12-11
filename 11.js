const data = [
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLL..L.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.L.LLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LL.LLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL..LLLL.LLLLLLLLLLLLLLLL.L.LLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "...L..LLL.L...........L....LL........LLL....L..L.......LLLLL.LL.....LL.LL...L..LLL.L......L....",
  "LLLLLLLL.LLLL..LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLL",
  "LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL",
  "LLLLLLLL.LLL..LLLLLLLLLLL.LLLLLLL.LLL.L.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLL..LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL",
  "LLLLLLLL.LLLLLLLLLLLLLL..LLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "..LL.......L.L..L.LL......L.L....L...L...L.L........L.....L......LL...LL.LL.L........LLL.LL....",
  "LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLL.L.L.LLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL..LLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLL.LLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLL.LLLL.LLLLL.LLLLLLL..LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.L.LLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  ".L..LLL...L.LLL..L..L....L....LL..LL...LL..LLLL.L.....L.L...........LL........L....L.L...L..LL.",
  "LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLLLL.L.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLL.LL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLL..LLLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.L.LLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLL.L.LLLLLLLLLL",
  "LLLLLLLL.L.LL.L.LLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLL",
  "L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.L.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.LLLLL.LL.LLLLLLLLLLLLLLLLLL",
  ".LL.L....L.L..LL..L..L..LL.L...L.....L...LL......LLL...L...LL....L.L.......L.....L...L.L......L",
  "LLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLL.LLLLL.L.LL..LL.LLL.LLLLL.L.LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLLLL.LLLLL.LLLLLLLLLLLLL.LLLLLLL.LLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLL.LLL.LLLLLLL.LL",
  "LLLLLL.LLLLLL.LLLLLLLL..L.LLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.L.LLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL",
  "LLLLLLLLLLLL..LLLLL.LLL.LLLLLLLLLLL.LLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.LLL",
  "LLLLLLLL.L.L..LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLL.L...LLLL.LLLLL.LL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLL.LLL.LLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLLL.LLLLLLL.LLL.LLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LL.LLLLLL.LLLLLLLLLL",
  "L.L..L...LL.L..L..L..L.L.L..L......................L...L..LLLL..LLLL..LL....L...LL..L.....L....",
  "LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL.LL.LLLLL..LL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLLLLLLL..LLLL.LL..L.LLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLL.LLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LL.LL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLLLLLLL",
  "LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLL.LLLLLLLLLL",
  "LL.LL...L...LL.LLL...L...LL.LL..L.L.L...L.L.......L..L..L.LLL..LL...LLLLL..L..LL..L.....L...LL.",
  "LLLLLLLL.LLLLLLLLLLLLLL..LL.L.LLL.LLLLL.LLLLLLLLLLLL.LLLL..LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LL.LLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LL.L.LLL.LLLLLLLLLLLLLLLLL.LLLLLL..LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLLLLLL.LLLLL.LL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLL.LLLLLLL",
  "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLL.LL.LLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLL..LLLLLLLLLLLLLLLLLLLL.LLLLL.LLL.LL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLLL",
  "L.L................L..L.L.LL..L..L..L.L..L.LLLL..........L..LL.LL.L...LL...L....L...LL..L.L.L.L",
  ".LLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLL.LLL",
  ".LLLLLLLLLLLL.L.LLLLLLL.LLLLLLLL.LLLLLL.LLLLL.LLLL.L.LLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLL..LLLLLLLLLLLL.LLLLLLLL.L.LLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL",
  "LLLL.LLLLLL.L..LLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLL.LLLLLL.LLLLL.LLLLLLLLLLLLLLLLLL",
  "LLLLLLLLLLL.L.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LL.LLL.LLLLL.LLLLLL.L.LLLLLLLL.LLLLLLLLLL.LLLLLLL",
  "LLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLLLL.LLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLLLL",
  "L..LL...L...L...L.LL..LL......LL..LL....L.L...........L.L...L....LL.LL.L..LL....L..L.........LL",
  "L.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLL.LLLLLLL.LL.LLLLLL.LLLLLLL.LLLLLLLLLL",
  "LLLLLLL.LL.LL.LLLLLLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLL.LL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLL..LL",
  "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLL..LLLLLL.LLLLL.LLLL.LLL.LLLLLLLLL.LLLLLLLLLLLLLL.LL",
  "LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLLL.L.LLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  ".L.LL..L...L........L.......L.....L.L.L....L......L.LL......L...LL.L.LLLL...LLL.L...L..L.LLLL..",
  "LLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.L.LLLLLLLLLLLLLLLLLL",
  "L.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLL.L.L.LLLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLL.LL",
  "LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL..LLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "L.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLLL.LLLLL.LLLL..LLLLLL.LLL.L.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.LLLLL",
  "LLLLLLLL.LLLL.LLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.LLLL.LL.LLLLL.LLLL",
  "LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLL.LLLLLLLL.LLLLL.L.LLLLLL.LLL",
  "LLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL..LLLLL.LLLLL.LL.LLLLL.LLLLLLLL.LLLLLLL.LLLLLLLLLL",
  "....LLL.L...LL.L.LLLLLL...L........L.L...L.L.L..L....LL..LL.L..LL...L.L.LLL.LL...LL..L.L..LL...",
  "LLLLLLLLLLLLL.LLLLLLLLL.LLLL.LLLL..LLLLLLLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLLLL.L.LLLLL.LLLLLLLLLL",
  "LLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLL",
  "LLLLLLLLL.LLL.LLLLLLLLL.LLLLLLLLL.LLLLL..LLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.L.LLLLLLLL",
  "LLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLL..LLLLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL.L",
  "LLLLLLL.LLLL..LLL.LLLLLLLLLLLLLLLLLLLLL.LLLLL..LLLLL.LL.LL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
  "LLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL",
  "L.LL.LLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLL.L.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LL.LLLLLLL.LLLLLL.LLL",
  "LLLLLLLLLL.LL.LLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.L.LLLL.LLLLL.LLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLL",
  "LLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLL.L.LLLLL.LL",
  "LLLLLLLL.LLLL.LLLLLLLLL.LLLLL.LLLLLLLLL.LLLLL.LLLLLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLL",
];

const example = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL",
];

const getNeighbours = (grid, { x, y }) =>
  [
    { x: x + 1, y: y - 1 },
    { x: x - 1, y: y - 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y + 1 },
    { x: x + 1, y },
    { x: x - 1, y },
    { x: x, y: y + 1 },
    { x: x, y: y - 1 },
  ]
    .filter(({ x, y }) => x >= 0 && x < grid[0].length && y >= 0 && y < grid.length)
    .map(({ x, y }) => grid[y][x]);

const doIterationSimple = (grid) =>
  grid.map((row, y) =>
    row.map((seat, x) => {
      const neighbours = getNeighbours(grid, { x, y });
      if (seat === "L" && !neighbours.some((seat) => seat === "#")) {
        return "#";
      }
      if (seat == "#" && neighbours.filter((seat) => seat === "#").length >= 4) {
        return "L";
      }
      return seat;
    })
  );

const equals = (g1, g2) => g1.reduce((eq, row, y) => eq && row.reduce((eq2, seat, x) => eq2 && g2[y][x] === seat, true), true);

const doIterations = (grid, iterate) => {
  const grids = [grid];
  do {
    grids.push(iterate(grids[grids.length - 1]));
  } while (!equals(grids[grids.length - 1], grids[grids.length - 2]));
  return grids[grids.length - 1];
};

const count = (grid, char) => grid.reduce((count, row) => count + row.reduce((c, s) => c + (s === char ? 1 : 0), 0), 0);

const grid = data.map((row) => row.split(""));

console.log(count(doIterations(grid, doIterationSimple), "#"));

const getNeighbour = (grid, { x, y }, { dirX, dirY }) =>
  x < 0 || x >= grid[0].length || y < 0 || y >= grid.length
    ? "."
    : grid[y][x] === "."
    ? getNeighbour(grid, { x: x + dirX, y: y + dirY }, { dirX, dirY })
    : grid[y][x];

const dirs = [
  { dirX: -1, dirY: -1 },
  { dirX: -1, dirY: +1 },
  { dirX: +1, dirY: -1 },
  { dirX: +1, dirY: +1 },
  { dirX: 0, dirY: -1 },
  { dirX: 0, dirY: +1 },
  { dirX: -1, dirY: 0 },
  { dirX: +1, dirY: 0 },
];

const doIterationVision = (grid) =>
  grid.map((row, y) =>
    row.map((seat, x) => {
      const neighbours = dirs.map((dir) => getNeighbour(grid, { x: x + dir.dirX, y: y + dir.dirY }, dir));
      if (seat === "L" && !neighbours.some((seat) => seat === "#")) {
        return "#";
      }
      if (seat == "#" && neighbours.filter((seat) => seat === "#").length >= 5) {
        return "L";
      }
      return seat;
    })
  );

console.log(count(doIterations(grid, doIterationVision), "#"));
