let ant;
let grid;
let button;
let started = false;

class Ant {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.origPosition = this.position.copy();
        this.direction = 0;
    }

    turnLeft() {
        this.direction--;
        if (this.direction < 0) {
            this.direction = 3;
        }
    }

    turnRight() {
        this.direction++;
        if (this.direction > 3) {
            this.direction = 0;
        }
    }

    moveForward() {
        if (this.direction === 0) {
            this.position.add(0, -1);
        } else if (this.direction === 1) {
            this.position.add(1, 0);
        } else if (this.direction === 2) {
            this.position.add(0, 1);
        } else if (this.direction === 3) {
            this.position.add(-1, 0);
        }
    }

}

function setup() {
    createCanvas(960, 540);

    grid = [];
    for (let i = 0; i < width; i++) {
        grid.push([]);
        for (let j = 0; j < height; j++) {
            grid[i].push(0);
        }
    }

    ant = new Ant(floor(width / 2), floor(height / 2));

    background(0);
}

function draw() {
    loadPixels();

    for (let n = 0; n < 50; n++) {

        const x = ant.position.x;
        const y = ant.position.y;

        if (y < 0 || x > width - 1 || y > height - 1 || x < 0) {
            console.log("done");
            noLoop();
        }

        const index = (x + y * width) * 4;

        if (grid[x][y] > 0) {
            pixels[index + 0] = 255;
            pixels[index + 1] = 255;
            pixels[index + 2] = 255;
            pixels[index + 3] = 255;
        } else {
            pixels[index + 0] = 0;
            pixels[index + 1] = 0;
            pixels[index + 2] = 0;
            pixels[index + 3] = 255;
        }

        if (grid[x][y] > 0) {
            ant.turnLeft();
        } else {
            ant.turnRight();
        }
        grid[x][y] = grid[x][y] > 0 ? 0 : 1;
        ant.moveForward();
    }
    updatePixels();
}