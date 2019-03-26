const webpack = require('webpack')
const path = require('path')
const vendors = [
  'vue',
  'vue-router',
  'mint-ui',
  'axios'
]
module.exports = {
  mode: 'development',
  entry: {
    "lib": vendors
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'../static'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]',
      path: path.resolve(__dirname, '../static', 'manifest.json')
    }),
  ]
}
