const mongoose =require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    experience:{
        type:Number,
        require:true
    },
    last_work_company:{
        type:String,
        require:true
    },
    date_of_resignation:{
        type:Number,
        require:true
    },
    joining_date:{
        type:Number,
        require:true
    }
    
    
    
    
})

    const employee=mongoose.model("employee",productSchema);
    module.exports=employee;
