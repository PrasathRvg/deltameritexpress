var express = require("express");
var router=express.Router();

var employees = [
    {
        fullname: 'ravi',
        email: 'ravi@gmail.com',
        mobile: 1122,
        city: 'chennai',
        profession: 'manager',
        industry: 'it'
    },
    {
        fullname: 'sateesh',
        email: 'sat@gmail.com',
        mobile: 5566,
        city: 'ooty',
        profession: 'lead',
        industry: 'software'
    },
    {
        fullname: 'praveen',
        email: 'prav@gmail.com',
        mobile: 2233,
        city: 'hyd',
        profession: 'trainer',
        industry: 'Research and Development'
    },
    {
        fullname: 'Nidhi',
        email: 'nid@gmail.com',
        mobile: 9988,
        city: 'bengaluru',
        profession: 'HR',
        industry: 'HRD'
    }
];

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

router.get("/details/:ph",function(req,res){
    var emp = employees.find((e,i)=>{
        console.log(typeof e.mobile)
        console.log(typeof req.params.ph)
        if(e.mobile===Number(req.params.ph)){
            return true
        }
        else{
            return false;
        }
    })
    res.render("employeedetails",{
        details:emp
    })
})

module.exports = router;