var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())
app.use(express.json())
app.post('/', function (req, res) {
 
    req.body; // { answer: 42 }
    res.json(req.body);
    console.log(req.body)
})
app.get('/',(req,res)=>{
    console.log("hello")
    res.end('get responde')
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})
    