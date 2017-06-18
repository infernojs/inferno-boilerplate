const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SpritePlugin = require('svg-sprite-loader/plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const sourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './public');
const imgPath = path.join(__dirname, './src/assets/img');
const vectorPath = path.join(__dirname, './src/assets/img/vector');

/**
 * Config section
 */
const STATIC_PATH = '/'
const DEV_PORT = process.env.DEV_PORT || 8080

/**
 * Common plugins
 */
const plugins = [
  new SpritePlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].js',
    minChunks(module) {
      const context = module.context;
      return (context && (context.indexOf('node_modules') || context.indexOf('src/vendor'))) >= 0;
    },
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: "manifest",
    filename: 'manifest-[hash].js',
    minChunks: Infinity
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join(sourcePath, 'index.html'),
    path: buildPath,
    filename: 'index.html',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: sourcePath
    },
  }),
];

/**
 * Common rules
 */
const rules = [
  /**
   * Eslint loader
   * Uncomment following lines to enable it.
   */
  // {
  //   enforce: 'pre',
  //   test: /\.(js|jsx)$/,
  //   loader: 'eslint-loader',
  //   // Only lint local files
  //   exclude: /(node_modules)(src\/vendor)/,
  // },
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        // We don't need `compat` because of UglifyJS
        compact: false
      }
    },
  },
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'svg-sprite-loader',
        options: {
          extract: true,
          spriteFilename: 'icons-sprite.svg',
        },
      },
      'svgo-loader',
    ],
    include: vectorPath,
  },
  {
    test: /\.(png|gif|jpg|jpeg|svg|woff|woff2|eot|ttf)$/,
    // include: imgPath,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  },
];

let cssLoaders = [], scssLoaders = []
if (isProduction) {
  console.log('Perfoming production build.')
  /**
   * Production plugins
   */ 
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    }),
    // new ExtractTextPlugin('style-[hash].css'),
    // Copy favicon to build:
    new CopyWebpackPlugin([{ from: sourcePath + '/favicon.ico', to: buildPath + '/favicon.ico' }])
  );

  /**
   * Production rules
   */ 
  cssLoaders = [
    'to-string-loader', 
    'css-loader?toString',
    'csso-loader',
    'postcss-loader'
  ]     
  scssLoaders = cssLoaders.concat(['sass-loader'])
} else {
  /**
   * Development plugins
   */
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

  /**
   * Development rules
   */
  cssLoaders = [
    'to-string-loader', 
    'css-loader?toString',
    'postcss-loader?sourceMap'
  ]
  scssLoaders = cssLoaders.concat(['sass-loader?sourceMap' ])
}

/**
 * Apply rules
 */
rules.push(
  {
    test: /\.css$/,
    use: cssLoaders
  },
  {
    test: /\.scss$/,
    use: scssLoaders
  }
)

/**
 * Final webpack config
 */
module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: sourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: buildPath,
    publicPath: STATIC_PATH,
    filename: 'app-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath
    ],
    alias: {
      // Inferno aliases:
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat',
      'create-react-class': 'inferno-create-class',
      'react-router': 'inferno-router',
      'react-redux': 'inferno-redux',
      'mobx-react': 'inferno-mobx',
      // Directory aliases:
      '~': path.resolve('src'),
      '~components': path.resolve('src/components'),
      '~containers': path.resolve('src/containers'),
      '~views': path.resolve('src/views'),
      '~router': path.resolve('src/router'),
      '~store': path.resolve('src/store'),
      '~vendor': path.resolve('src/vendor'),
      '~layouts': path.resolve('src/layouts'),
      '~assets': path.resolve('src/assets'),
      '~styles': path.resolve('src/assets/styles'),
      '~scripts': path.resolve('src/assets/js')
    }
  },
  plugins,
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: true,
    port: DEV_PORT,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001b[32m',
      },
    },
  },
};
