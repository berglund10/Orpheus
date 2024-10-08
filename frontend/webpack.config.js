const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env, argv) => {

  const mode = argv.mode === "development" ? "development" : "production";

  console.log("Mode is:", mode);

  const externals = mode === "production" ? {
    react: 'React',
    'react-dom': 'ReactDOM'
  } : {};

  return {
    mode: mode,
    entry: './src/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/src/index-' + mode + '.html')
      })
    ],
    devServer: {
      static: './dist',
      port: 8080,
      historyApiFallback: true,
    },
    externals: externals,
  }
};
