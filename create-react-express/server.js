const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001

const mongoUri = process.env.MONGODBURI || "mongodb://localhost/googlebooks";

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology:true})

if (process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"))
}


app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname), "./client")
})