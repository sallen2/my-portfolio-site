var express = require("express");
var app = express();
var ejs = require("ejs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


// route
app.get("/", function(req, res){
	res.render("home");
});

app.get("/portfolio", (req,res) =>{
	res.render("portfolio");
});

app.get("/portfolio/project1", (req, res)=>{
	res.render("circles");
});

app.get("/portfolio/project2", (req, res)=>{
res.render("index");
});

app.get("/portfolio/project3", (req, res)=>{
res.render("colorGame");
});

app.listen(process.env.PORT || 3000, function(){
	console.log("server up");
});