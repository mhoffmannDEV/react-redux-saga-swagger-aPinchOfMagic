const opn = require('opn')
const express = require('express')
const webpack = require('webpack')
const path = require('path')

const configuration = require('./configuration')
const devConfig = require ('../webpack/config.dev')
const compiler = webpack(devConfig)

const server = express()

const PORT = configuration.PORTS.DEV_SERVER

server
  .use(require('webpack-dev-middleware')(compiler, {}))
  // osługa przekierowania dla SPA (w parze z connect-history-api-fallback)
  .use('*', (request, response, next) => compiler.outputFileSystem.readFile(
    path.join(compiler.outputPath, configuration.INDEX_HTML),
    (error, result) => {
      if (error) {
        return next(error)
      }
      response.set('content-type', 'text/html')
      response.send(result)
      response.end()

      return null
    },
  ))
  .use(require('connect-history-api-fallback')())
  .listen(PORT, () => {
    opn(`http://localhost:${PORT}`)

    console.log(`Dev server available on http://localhost:${PORT}\n`)
  })
