const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors =  require('cors')

const categories = require('./data/categories.json')

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories',(tonu,minny)=>{
    minny.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})