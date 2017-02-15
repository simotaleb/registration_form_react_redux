import path from 'path';
import webpack from 'webpack';

export default {
  entry: ['webpack-hot-middleware/client',
          path.join(__dirname,'/client/index.js')
  ],
  output:{
    path: path.join(__dirname,'server'),
    publicPath: '/',
    filename: "bundle.js"
  },
  plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {
        test: /\.js$/,
        include: path.join(__dirname,'client'),
        loaders: ['react-hot-loader','babel-loader']
      }
    ]
  },
  resolve:{
    extensions:['.js']
  }
}
