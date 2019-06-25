const express = require('express')
const app = express()
const port = process.env.PORT || 4001
const db = require('./db')
app.listen(port, () => console.log(`Listening on :${port}`))
