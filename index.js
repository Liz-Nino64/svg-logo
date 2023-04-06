const inquirer = require("inquirer");
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
      message: "What shape would you like your logo to be? Please use HTML attribute syntax (circle, rect, etc)",
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
  .then(function userInput(response) {
  const logo = new Logo(response.shape, response.color, response.text, response.textColor)
  JSON.stringify(Logo)
});

async function createSVG() {
    const input = await userInput()
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('style', `border: 1px solid black;color: ${Logo.textColor};background-color: ${Logo.color};shape: ${Logo.shape}`);
    svg.setAttribute('width', '300');
    svg.setAttribute('height', '200');
    svg.setAttribute('text', `${Logo.text}`);
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    document.body.appendChild(svg);
    console.log("Check out your new logo!")
}