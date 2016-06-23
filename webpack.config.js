module.exports = {
  entry: __dirname + '/src/js',
  module: {
    loaders: [{
      test: /\.js$/,
      include: __dirname + '/src/js',
      loader: 'babel'
    }]
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  }
};
