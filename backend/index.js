const express=require("express");
const app=express();
const db=require("./db/db")
const router1=require("./routes/employe")
const router=require("./routes/register")
const cors=require("cors");
app.use(cors());
require("./db/db")
app.use(express.json({limit:'10mb'}));
app.use(express.urlencoded({limit:'10mb',extended:true}));



app.use("/registerr",router)
app.use("/employee",router1)
app.listen(5000,()=>{
    console.log("server is working ")
})