#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))

if (argv.help) {
  console.log('--location /path/to/render/location/')
  console.log('--env')
  process.exit()
}

if (!argv.env) {
  console.log('Specify environment')
  process.exit()
}

var fs = require('fs')
var path = require('path')
var render = require('preact-render-to-string')
var html = require('html')
var preact = require('preact')
var htm = require('htm')
var h = htm.bind(preact.h)
var base = require('../templates/base')


fs.writeFileSync(
  argv.location || path.resolve(__dirname, '../index.html'),
  '<!DOCTYPE html>\n' + html.prettyPrint(
    render(base(h, require('./meta'), require('./path')[argv.env]))
      // because of the dynamic meta tag attributes
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
  , {indent_size: 2}),
  'utf8'
)
