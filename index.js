#!/usr/bin/env node

// Import packages:
const cpFile = require('cp-file')
const copy = require('copy')
const cp = require('fs-cp')
const mkdirp = require('mkdirp')
const cpr = require('cpr')
const replace = require('replace-in-file')
const writefile = require('writefile')
const argv = require('yargs').argv


// Import local values:
const fs = require('fs')
const p = require("path")
const homedir = (process.platform === "win32") ? process.env.HOMEPATH : process.env.HOME
const user = (process.platform === "win32") ? process.env.USERNAME : process.env.USER
const pkg = require('./package.json')
const sep = p.sep
const source_path = __dirname.split(sep + 'bin')[0]
const noop = function() {}

let name = process.argv.slice(2)[0].toLowerCase()
name = name.replace(' ', '-')
let path = p.join(homedir, 'Desktop', name)

const createPreactApp = (() => {
  console.log('Creating a new Composi project.')
  console.log(`Project name is: ${name}`)
  console.log(`Project is at: ${path}`)
  mkdirp(path)
  // mkdirp(p.join(path, 'src'))
  cpr(p.join(source_path, 'resources'), p.join(path), noop)
  setTimeout(() => {
    replace({
      from: /replace_package_name/g,
      to: name,
      files: [
        p.join(path, 'package.json')
      ],
    }),
    replace({
      from: /replace_package_name/g,
      to: name,
      files: [
        p.join(path, 'package-lock.json')
      ],
    }),
    replace({
      from: /replace_user_name/g,
      to: user,
      files: [
        p.join(path, 'package.json')
      ],
    })
  }, 3000)
})()
