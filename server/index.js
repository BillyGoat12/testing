const express = require('express')
const path = require('path')
const cors = require('cors')

const frontEnd = path.join(__dirname, '..', 'client', 'dist', 'index.html')

const app = express()

app.use(cors)
app.use(express.json())

app.use(express.static(frontEnd))

app.get('/test', (req, res) => {
    res.json('here')
})

app.listen(5001, () => {
    console.info('http://localhost:5000')
})