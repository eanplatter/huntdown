#!/usr/bin/env node
require('shelljs/global')
const fs = require('fs')
const args = process.argv.slice(2);
const searchPath = args[0]
const keyword = args[1]
const path = require('path')

const dirs = ls(searchPath)
  .map(file => fs.lstatSync(`${searchPath}/${file}`).isDirectory && file)

dirs.map(dir => {
  if (dir === keyword) {
    console.log(`${dir} matches ${keyword}`)
  } else {
    console.log(`${dir} does not match ${keyword}`)
  }
})
