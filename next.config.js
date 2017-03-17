var webpack = require('webpack');
module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        exclude: /(node_modules)/,
        options: {
          name: 'dist/[path][name].[ext]'
        }
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader'
      }
    )

    config.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
      );

    console.log('config', config);
    return config
  }
}
