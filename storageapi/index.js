const express = require("express");
var fs = require('fs');

const PORT = 9999;
const HOST = '0.0.0.0';

var app = express();
app.listen(PORT, HOST, ()=>console.log("Server running on port " + PORT));''
const file = "tabsplit.json";

app.get("/storage/set", function(request, response, next) {
    var obj = JSON.parse(fs.readFileSync(file, 'utf8'));
    response.json(obj);
})