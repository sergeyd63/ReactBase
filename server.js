var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.js');

const port = 7060;

var server = new WebpackDevServer(webpack(config), {
    contentBase: __dirname,
    publicPath: config.output.publicPath,
    hot: true,
    host: '0.0.0.0',
    quiet: true
});
server.listen(port, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }

    // console.log(`Listening at http://localhost:${port}/`);
});