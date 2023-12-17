const fs = require("fs");
const value = fs.readFileSync("./data.json",'utf8', (err, data) => {
    if (!err) {
        return data
    }
    else {
        return err
    }    
});

const express = require("express");
const app = express()
  
app.get('/', function (req, res) {
    res.send(value)
});
app.get('/:id',function(req,res){
    const id = req.params.id
    const prod = JSON.parse(value).find(prod => prod.id == id)
    if(prod){
        res.send(value)
    }
    else{
        res.send("Yoxdur.")
    }
});

app.listen(3000, function () {
    console.log('Server quruldu');
});