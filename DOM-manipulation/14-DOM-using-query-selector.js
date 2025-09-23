
const { JSDOM } = require("jsdom");
const dom = new JSDOM("<!DOCTYPE html><p>Hello</p>");
const document = dom.window.document;
console.log(document.querySelector("p")); // "Hello"
