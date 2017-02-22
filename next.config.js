module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        loader: 'babel-loader!raw-loader',
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=1&name=res/[name].[hash:8].[ext]'
      },
      {
        test: /\.scss$/,
        loader: 'babel-loader!raw-loader!sass-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      });

    return config;
  }
};
