/* Not done yet */

var express = require('express')
var app = express()
var port = 3000;

app.get('/', (req, res) => {
    res.send("Hello there!")
})


app.listen(port)