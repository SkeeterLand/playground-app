const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  target: "web",
  entry: './src/hello-world.ts', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: path.join(__dirname, 'dist'), 
    port: 5150,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin( {
        template: 'public/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "lit-css-loader"
            },
            {
                loader: "sass-loader",
                options: {
                    sassOptions: {
                        outputStyle: "compressed"
                    },
                },
            }
        ],
    }
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     // Creates `style` nodes from JS strings
      //     "style-loader",
      //     // Translates CSS into CommonJS
      //     "css-loader",
      //     // Compiles Sass to CSS
      //     "sass-loader",
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss', '.css'],
  }, 
}