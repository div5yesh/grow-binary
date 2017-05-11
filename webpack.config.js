var config = {
   entry: './main.js',
	
   output: {
      path: './dist',
      filename: 'app.min.js'
   },
	
   devServer: {
      port: 8081
   },
	
   devtool: '#source-map',

   module: {
      loaders: [
         {
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['react', 'es2015', 'stage-0']
            }
         }
      ]
   }
}

module.exports = config;