const express = require('express'); 
const app = express(); 
const path = require('path'); 
const port = 8080;
 
app.set('view engine','ejs'); 
app.set('views',path.join(__dirname,'views')); 
app.use(express.urlencoded({extended:true})); 
 
app.get("/home", (req,res) => { 
    res.render("index.ejs"); 
}); 
 
app.get("/signin", (req,res) => { 
    res.render("signin.ejs"); 
}); 
 
app.get("/signup", (req,res) => { 
    res.render("signup.ejs"); 
}); 

app.get("/", (req, res) => {
    res.send("go for the /home or /signin or /signup path");
})
app.listen(port, () => { 
    console.log("Connected to port 8080"); 
}); 
