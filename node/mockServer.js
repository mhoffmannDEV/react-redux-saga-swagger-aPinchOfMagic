const { PORTS } = require('./configuration')

const {
  MOCK_SERVER: PORT,
} = PORTS

require('express')()
  .get('/api/example', require('../mock/api/example.js'))
  .listen(PORT, () => {
    console.log(`Mock server available on http://localhost:${PORT}\n`)
  })
