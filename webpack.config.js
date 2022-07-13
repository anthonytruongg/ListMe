const path = require('path');

module.exports = {
  target: 'async-node',
    mode: 'development',
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};