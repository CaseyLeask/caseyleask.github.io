module.exports = {
  devtool: "#inline-source-map",
  entry: './src/app.js',
  output: {
    path: __dirname,
    filename: "./dist/bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel?optional[]=runtime" }
    ]
  }
};
