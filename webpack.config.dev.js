import path from 'path';
export default {
  entry: path.join(__dirname,'/client/index.js'),
  output:{
    path: path.join(__dirname,'server'),
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        include: path.join(__dirname,'client'),
        loaders: ['babel-loader']
      }
    ]
  },
  resolve:{
    extensions:['.js']
  }
}
