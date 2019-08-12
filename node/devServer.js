const opn = require('opn')


const server = require('express')()

server.listen(3001, () => {
  opn(`http://localhost:3001`)

  console.log(`Dev server available on http://localhost:3001\n`)
})
