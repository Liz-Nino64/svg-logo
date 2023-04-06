const inquirer = import {inquirer} from "inquirer";
const jest = require("jest");
const fs = require("fs")

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
      message: "What shape would you like your logo to be?",
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
  .then((response) => {
  const filename = `${response.name.toLowerCase().split(' ').join('')}.svg`;
  fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
  err ? console.log(err) : console.log('Success!')
)});