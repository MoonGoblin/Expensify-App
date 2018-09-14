const path = require("path");

// entry -> output
// where is the entry point? app.js inside src -> where is output?
// this is in this file

//console.log(path.join(__dirname, "public"));

// exposes object to another file in node
module.exports = {
    entry: "./src/app.js", // where it should start
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    }, 
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // See webpack.js.org documentation - this is the source map that helps us 
    // find the right line in our browser debuging tools!
    devtool: 'cheap-module-eval-source-map',
    // dev Server tool
    devServer: {
        contentBase: path.join(__dirname, "public"),
        historyApiFallback: true
    }
};
// path is an absolute path!!!
// variable makes easier!!
// use console.log(__dirname);
// (that's two underscores!)
// just run it in this file from terminal:
// node webpack.config.js
// google node path ...
// to get path.join to join paths ...
// run this in this file: console.log(path.join(__dirname, "public"));
// from terminal its node webpack.config.js

// webpack documentation is a great resource
// webbpack.js.org
// see documentation

// Using Webpack Loader:
// A slightly more sophisticate way to use webpack
// using a "loader" - let's you customize webpack more
// like when it sees a js file it can do something - like 
// run it through babel. Converting ES6 to ES5 or getting
// jxs into regular old javascript. Note we will also use this
// with CSS coming up.

// install some local dependencies in terminal
// terminal: yarn add babel-core@6.25.0 which allows you to use
// babel from tools like webpack.
// Also, yarn add babel-loader@7.1.1

// find module documentation at webpack.js.org documentation - like module.rules
// which is how you define your loaders.

