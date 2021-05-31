const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index.ejs")
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})