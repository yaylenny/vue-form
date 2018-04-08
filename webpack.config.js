var path=require("path");

module.exports={
  entry: {
    'dist/vue-form': "./src",
    'demo/lib/vue-form': "./src"
  },
  output:{
    library: "VueForm",
    libraryTarget: "umd",
    path: __dirname,
    filename: '[name].js'
  },
  resolve:{
    alias:{
      Components: path.resolve( __dirname, 'src/components/'),
      Controls: path.resolve( __dirname, 'src/components/controls/'),
      Fields: path.resolve( __dirname, 'src/components/controls/'),
      Core: path.resolve( __dirname, 'src/core/'),
      Mixins: path.resolve( __dirname, 'src/mixins/')
    }
  },
  module:{
    loaders:[
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.scss$/, loaders: [ "style-loader", "css-loader", "sass-loader"] },
      { test: /\.vue$/, loader: 'vue-loader',
        options:{
          scss: 'style!css!sass'
        }
      },
      { test: /\.css$/, loaders: [ "style-loader", "css-loader"] }
    ]
  }
};
