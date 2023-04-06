const inquirer = require("inquirer");
const jest = require("jest");
const fs = require("fs");
const { filter } = require("rxjs");

function Logo(shape, color, text, textColor) {
    this.shape = shape;
    this.color = color;
    this.text = text;
    this.textColor = textColor;
  };

  inquirer
  .prompt([
    {
      type: "input",
      message: "What shape would you like your logo to be? Please use XML attribute syntax (circle, rect, etc)",
      name: "shape",
    },
    {
      type: "input",
      message: "What color would you like your shape to be?",
      name: "color",
    },
    {
      type: "input",
      message: "What text would you like on the logo?",
      name: "text",
    },
    {
      type: "input",
      message: "What color would you like your text to be?",
      name: "textColor",
    },
  ])
  .then( (response) => {
    filter(response)
    fs.writeFile('svg.html', `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your New Logo!!</title>
  </head>
  <body>
  <h1>Nice logo!!</h1>
  <svg x= "50" y = "20" height="300" width="200"><${response.shape} font-color="${response.textColor}" style= "fill: ${response.color};stroke-width: 4;stroke: black" />${response.text}</svg>
  </body>
  </html>`, err => {
    if (err) {
      console.error(err);
    }});
  console.log("Check out your new logo!");
  });
