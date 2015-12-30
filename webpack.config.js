module.exports = {
  context: __dirname + "/assets/javascripts",
  entry: {
    "app": "./app.js"
  },
  output: {
    path: __dirname + "/source/javascripts",
    filename: "[name].js"
  }
};
