let grid;
let x;
let y;
let dir;

let UP = 0;
let RIGHT = 1;
let DOWN = 2;
let LEFT = 3;

function setup() {
  createCanvas(800, 800);
  grid = make2DArray(width, height);
  x = width / 2;
  y = height / 2;
  dir = UP;
}

function turnRight() {
  dir++;
  if (dir > LEFT) {
    dir = UP;
  }
}

function turnLeft() {
  dir--;
  if (dir < UP) {
    dir = LEFT;
  }
}

function moveForward() {
  if (dir == UP) {
    y--;
  } else if (dir == RIGHT) {
    x++;
  } else if (dir == DOWN) {
    y++;
  } else if (dir == LEFT) {
    x--;
  }

  if (x > width - 1) {
    x = 0;
  } else if (x < 0) {
    x = width - 1;
  }
  if (y > height - 1) {
    y = 0;
  } else if (y < 0) {
    y = height - 1;
  }
}


function draw() {
  strokeWeight(1);
  for (let n = 0; n < 100; n++) {
    let state = grid[x][y];
    if (state == 0) {
      turnRight();
      grid[x][y] = 1;
    } else if (state == 1) {
      turnLeft();
      grid[x][y] = 0;
    }

    stroke(color(255));
    if (grid[x][y] == 1) {
      stroke(color(0));
    }
    point(x, y);
    moveForward();
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}
