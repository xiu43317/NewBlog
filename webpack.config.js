const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist/'),
  },
  resolve: { extensions: ['.js', '.jsx'] },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },

  devServer: {
    contentBase: './dist',
    port: 8080,
  },
};
