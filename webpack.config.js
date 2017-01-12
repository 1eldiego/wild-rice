module.exports = {
  entry: './src/app.js',
  output: {
    path: __dirname + '/dist/',
    filename: 'poc.js',
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        loader: 'style!css!less',
      },
    ],
  },
};
