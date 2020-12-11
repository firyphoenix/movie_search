const express = require('express')
const app = express();

app.get('/',function(req,res) {
    console.log("Response :   ")
    console.log(res)
})

app.listen(8000,function() {
    console.log("Server Created");
})
