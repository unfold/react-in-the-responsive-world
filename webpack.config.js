module.exports = {
  devtool: 'eval',

  entry: './src/index.js',

  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
};