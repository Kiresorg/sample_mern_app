const https = require('https')
const fs = require('fs')
const hostname = '127.0.0.1'
const PORT = 8080
const express = require('express')
const cors = require('cors')
const req = require('express/lib/request')

// create the running web app
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'You made it to the root of the app' })
})

// routes
require('./src/router/route.address')(app)

const server = https
  .createServer(
    // Provide the private and public key to the server by reading each
    // file's content with the readFileSync() method.
    {
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem'),
    },
    app
  )
  .listen(PORT, () => {
    console.log(`server is running at port ${PORT}`)
  })
