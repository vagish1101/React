const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'react-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
          }
        ]
      }
}