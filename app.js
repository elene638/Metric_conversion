const express = require("express");
const bodyParser = require("body-parser");
const app = express();


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));



meter = []
num1 = []
num2 = []
num3 = []
num4 = []
num5 = []
num6 = []

app.get("/", function (req, res) {
    
    res.render("list", {number: meter, meterConverted: num1, feetConverted: num2, litreConverted: num3, gallonConverted: num4, kiloConverted: num5, poundConverted: num6})
})

app.post("/", function (req, res) {
    const writtenNumber = req.body.num;
    meter.push(writtenNumber);
    let converted1 = writtenNumber * 3.2808
    let converted2 = writtenNumber * 0.3048
    num1.push(converted1.toFixed(3));
    num2.push(converted2.toFixed(3));
    let converted3 = writtenNumber * 0.264
    let converted4 = writtenNumber * 3.785
    num3.push(converted3.toFixed(3));
    num4.push(converted4.toFixed(3));
    let converted5 = writtenNumber * 2.20462
    let converted6 = writtenNumber * 0.453592
    num5.push(converted5.toFixed(3));
    num6.push(converted6.toFixed(3));
    res.redirect("/"); 
    
})


app.listen(3000, function () {
    console.log("This server is running on port 3000");
})

//let length = document.getElementById("length")
//length.textContent = num + " meters = " + num1.toFixed(3) + " feet | " + num + " feet = " + num2.toFixed(3) + " meters";

//let num1 = num * 3.2808
//let num2 = num * 0.3048
//let num3 = num * 0.264
//let num4 = num * 3.785
//let num5 = num * 2.20462
//let num6 = num * 0.453592

/* <% for (var i = 0; i<number.length;  i++) { %>
        <p>
          <%= number[i] %> meters = <%= meterConverted[i] %> feet | <%= number[i] %> feet
          = <%= feetConverted[i] %> meters
        </p> 
        <%}%> */