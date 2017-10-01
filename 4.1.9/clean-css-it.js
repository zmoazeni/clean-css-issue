var CleanCSS = require("clean-css");

console.log(new CleanCSS({ sourceMap: true, rebaseTo: 'css' }).minify(["css/main.css"])["sourceMap"])
