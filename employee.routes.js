var express = require("express");
var router=express.Router();
var employees = [];

router.get("/regemployee",function(req,res){
    res.sendFile(__dirname+"/empregistration.html");    
})

router.get("/emplist",function(req,res){
    res.render("employees",{
        allemployees:employees
    })
})

router.post("/empregister",function(req,res){
    employees.push(req.body);
    res.send("Employee registraiton successful")    
})

module.exports = router;