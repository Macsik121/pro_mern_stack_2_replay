require('dotenv').config();
const express = require('express');
const installAPIHandler = require('./graphql/installAPIHandler');
const app = express();
const port = process.env.PORT || '3000';

app.use(express.static('public'));

installAPIHandler(app);

// app.use(require('webpack-dev-middleware')(webpackCompiler));

// app.use(require('webpack-hot-middleware')(webpackCompiler));

app.listen(port, () => console.log(`Server's at port ${port}`));
