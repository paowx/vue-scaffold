const webpack = require('webpack')
const path = require('path')
const vendors = [
  'vue',
  'vue-router',
  'mint-ui',
  'axios'
]
module.exports = {
  output: {
    path:  path.resolve(__dirname,'../static/js'),
    filename:'[name].js',
    library: '[name]'
  },
  entry: {
    "lib": vendors
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname
    }),
  ]
}
