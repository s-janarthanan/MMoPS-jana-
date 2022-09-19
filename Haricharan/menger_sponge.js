//Declaring slider and checkbutton variables
let sliderX, sliderY, sliderZ, button;

//Defining a setup function, in which canvas and sliders and buttons are created
function setup() {
    createCanvas(600, 600, WEBGL);
    sliderX = createSlider(-PI, PI, 0, 0.005);
    sliderY = createSlider(-PI, PI, 0, 0.005);
    sliderZ = createSlider(-PI, PI, 0, 0.005);
    button = createCheckbox("▶");
}

//Defining the draw function
function draw() {

    //Setting the background to black
    background(0);

    //If checkbutton is checked, then automatic rotation is enabled
    if (button.checked()) {
        sliderX.value((frameCount % 628) * 0.01 - PI);
        sliderY.value((frameCount % 628) * 0.01 - PI);
        sliderZ.value((frameCount % 628) * 0.01 - PI);
    }

    //Rotating the X and Y and Z axes by the amount on the corresponding sliders
    rotateX(sliderX.value());
    rotateY(sliderY.value());
    rotateZ(sliderZ.value());

    //Calling the drawcube function
    drawCubes(0, 0, 0, 200);

}

//Hardcoding a minimum value, which is like the resolution
let minimumValue = 10

//Draw cube function, which draws the menger sponge recursively
function drawCubes(centerX, centerY, centerZ, size) {
    if (size > minimumValue) {

        normalMaterial();

        rectMode(CENTER);

        //For loop over all 27 smaller cubes
        for (let i = -1; i < 2; i++) {
            for (let j = -1; j < 2; j++) {
                for (let k = -1; k < 2; k++) {
                    if (!((i === 0 && j === 0 && k === 0) ||
                        ((i === -1 || i === 1) && j === 0 && k === 0) ||
                        ((j === -1 || j === 1) && i === 0 && k === 0) ||
                        ((k === -1 || k === 1) && j === 0 && i === 0))) {
                        translate(i * size / 3, j * size / 3, k * size / 3);
                        drawCubes(0, 0, 0, size / 3); //Calling drawCubes function recursively
                        translate(-i * size / 3, -j * size / 3, -k * size / 3);
                    }
                }
            }
        }
    }
    else {
        //If size is smaller than the threshold minimumValue, the cubes are drawn
        box(size, size, size);
    }
}