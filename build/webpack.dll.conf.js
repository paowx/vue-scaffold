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
    path:  path.resolve(__dirname,'dist'),
    filename:'[name].js',
    library: '[name]'
  },
  entry: {
    "lib": vendors
  },
  mode: 'production',
  plugins: [
    new webpack.DllPlugin({
      context: __dirname,
      name: '[name]',
      path: 'manifest.json'
    }),
  ]
}
