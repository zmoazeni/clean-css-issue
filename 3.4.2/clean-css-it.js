var CleanCSS = require("clean-css");

console.log(new CleanCSS({ sourceMap: true, root: "css"}).minify(["main.css"])['sourceMap'])
