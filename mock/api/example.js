const exampleJson = require('./example.json')

module.exports = (req, res, next) => {
  console.log('I\'ve received request at /api/auth/login/submit!')
  res.send(exampleJson)
  next()
}
