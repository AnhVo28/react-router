var webpack =require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
   new webpack.ProvidePlugin({
     '$': 'jquery'
   })
 ],
  resolve: {
    root: __dirname,
    alias: {
      HomePage: 'app/components/HomePage.js',
      Account: 'app/components/Account.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Transaction: 'app/components/Transaction.js',
      SignIn: 'app/components/SignIn.js',
      AccountInfo: 'app/components/AccountInfo.js',
      Notification: 'app/components/Notification.js'
    }
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /node_modules/
      }
    ]
  }
};
