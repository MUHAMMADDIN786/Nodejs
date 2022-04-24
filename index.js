const express= require("express");
const req = require("express/lib/request");
const app=express();
const Connection=require("./connection")
const productRoute=require("./routes/product")

app.use(express.urlencoded({extended:true}));

app.use(express.json());
app.use("/product",productRoute)

module.exports=app;