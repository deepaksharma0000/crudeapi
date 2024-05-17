const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

const UserRoute =require("./user/route");
const CategoryRoute =require("./category/route");

app.get("/", async (req,res)=>{
    res.send("welcome to Crude app");
})


app.use("/user",UserRoute)
app.use("/add",CategoryRoute)

app.listen(2000,()=>{
    console.log("server start on port 2000");
});

