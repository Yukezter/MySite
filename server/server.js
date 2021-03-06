require('dotenv').config({ path: `${__dirname}/.env` })
const path = require('path')
const mongoose = require('mongoose')
const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use('/api', require('./routes/index'))
app.use('/admin', require('./routes/admin'))

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

// mongoose.connect(
//   process.env.MONGODB_URI || process.env.MONGODB_URI_LOCAL, 
//   { useNewUrlParser: true, autoIndex: false, useFindAndModify: false },
// )

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server started on port ${PORT}`))