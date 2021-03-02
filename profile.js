const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));

const url = "https://atifghaffar83.github.io/profile/";

app.get("https://atifghaffar83.github.io/", function(req,res){
    // res.write(url);
    res.render("profile/");
});


app.listen(6001, function(){
    console.log("server running on 6001 port");
});
