require('dotenv').config();
const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
// const webpackCompiler = webpack(webpackConfig);
const app = express();
const port = process.env.PORT || '3000';

app.use(express.static('public'));

// app.use(require('webpack-dev-middleware')(webpackCompiler));

// app.use(require('webpack-hot-middleware')(webpackCompiler));

app.listen(port, () => console.log(`Server's at port ${port}`));
