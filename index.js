const express = require('express')
const PORT = process.env.PORT || 8080

const app = express()

app.listen(PORT, () => console.log("server is runing"))

app.get('/', (req, res) => {
    res.send('hello ')
})