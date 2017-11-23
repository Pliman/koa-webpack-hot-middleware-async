#koa2-webpack-hot-middleware
webpack-hot-middleware for koa2
inspired by koa-webpack-hot-middleware

usage:
```
npm install --save-dev koa2-webpack-hot-middleware

Typescript:
import * as Koa from  'koa'
import hotMiddleware from  'koa2-webpack-hot-middleware'
import * as webpack from  'webpack'
import config from './webpack.conf'

const app = new Koa()
const compiler = webpack(config)
app.use(hotMiddleware(compiler))

Javascript:
var Koa = require('koa');
var hotMiddleware = require('koa2-webpack-hot-middleware');
var webpack = require('webpack');
var config = require('./webpack.conf');

var app = new Koa()
var compiler = webpack(config)
app.use(hotMiddleware(compiler))
```
