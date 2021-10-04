const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("test")
})

app.listen(3020, () => {
    console.log('Server listening on port 3020')
})