const express = require("express");
const app = express();
const path = require("path");

const prot = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res) =>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", { data });
    }else{
        res.render("nofound.ejs");
    }
    
});

app.get("/hello", (req, res) => {
    res.send("hello brijraj");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() *6) +1;
    res.render("rolldice.ejs", { diceVal });
});

app.listen(prot, () => {
    console.log(`hello i am Brijaj ${prot}`);
});
