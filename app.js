var express = require("express");
var app = express();
var studentRoutes = require("./student.routes");
var employeeRoutes = require("./employee.routes")

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static(__dirname+"/open"))

app.set('view engine', 'pug');
app.set('views','./views');

app.get("/",function(req,res){
   res.sendFile(__dirname+"/homepage.html")
})

app.use("/student",function(req,res,next){
   console.log("Student middleware executed")
   next();
})
app.use("/student",studentRoutes)

app.use("/employee",employeeRoutes)

app.get("/abc/:x/:y?/:z",function(req,res){
   console.log(req.params);
   res.send("HI")
})

app.listen(8090,function(){console.log("listening on 8090")})