const mongoose = require("mongoose");


const mongoURI='mongodb+srv://ahirevishal04:Vishal123@cluster0.cjxwm.mongodb.net/employee1?retryWrites=true&w=majority&appName=Cluster0';
const db=mongoose.connect(
    mongoURI,{
        useNewUrlParser:true
    }
).then(()=>console.log('MongoDb Connected')).catch(err=>console.log(err))

module.exports=db;