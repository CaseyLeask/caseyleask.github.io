module.exports = {
  entry: "./src/entry.js",
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
    { test: /\.js$/, exclude: /node_modules/, loader: "babel?optional[]=runtime" },
    { test: /\.css$/, loader: "style!css" }
    ]
  }
};
