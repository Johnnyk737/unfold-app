const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

var client = {
  // Entry point where it starts the process
  entry: {
    index: './client/index.tsx',
  },
  // Defines the output path after webpack does its stuff
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  // This is necessary when entry is a node/express server
  // target: 'node',
  // externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env': {
      //   NODE_ENV: `'development'`
      // },
      __isBrowser__: "true"
    })
  ],
  optimization: {
    minimize: true
  },
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    extensions: ['.tsx', '.js', '.json', '.css', '.less']
  },
  devtool: 'source-map',
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //   }
      // },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            // options: {
            //   sourceMap: true,
            //   modules: true,
            // }
          },
          {
            loader: "less-loader"
          }
        ]
      }
      // {
      //   test: /\.css$/,
      //   exclude: /node_modules/,
      //   loader: [ 'style-loader','css-loader' ]
      // },
      // {
      //   test: /\.(svg|ttf|woff|woff2|eot)$/,
      //   loader: 'url?limit=5000'
      // }
    ]
  }
};

var server = {
  // Entry point where it starts the process
  entry: "./server.js",
  // Defines the output path after webpack does its stuff
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
    publicPath: '/'
  },
  // This is necessary when entry is a node/express server
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new webpack.DefinePlugin({
      // 'process.env': {
      //   NODE_ENV: `'development'`
      // },
      __isBrowser__: "false"
    })
  ],
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'css-loader' ]
      }
    ]
  }
};

module.exports = [server, client]

// https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
// https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app#toc-routing-and-rendering-on-the-server-with-express
// https://github.com/lmammino/judo-heroes-2
