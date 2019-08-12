const opn = require('opn')
const express = require('express')
const webpack = require('webpack')

const devConfig = require ('../webpack/config.dev')
const compiler = webpack(devConfig)

const server = express()

const PORT = 3002

server
  .use(require('webpack-dev-middleware')(compiler, {}))
  .listen(PORT, () => {
    opn(`http://localhost:${PORT}`)

    console.log(`Dev server available on http://localhost:${PORT}\n`)
  })