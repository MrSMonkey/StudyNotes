const MiniCssExtractPlugin= require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          'postcss-loader',
        ]
      }
    ]
  }
};