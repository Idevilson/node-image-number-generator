import { createCanvas } from "canvas";
import fs from "fs";

// Dimensions for the image
const width = 200;
const height = 200;


// Instantiate the canvas object
const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");

// Fill the rectangle with purple
context.fillStyle = "#764abc";

context.font = "bold 70pt 'PT Sans'";
context.textAlign = "center";
context.fillStyle = "#fff";

context.fillText("1", 100, 135);
// Write the image to file
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("./image.png", buffer);