const mongoose=require('mongoose');

const SchemaUser=new mongoose.Schema({
   nom:{
        type:String,
        required:true,
        minlength:5,
        trim :true
   } ,
   email:{
        type:String,
        required:true,
        trim :true,
        unique:true
    } ,
    login:{
        type:String,
        required:true,
        minlength:5,
        trim :true,
        unique:true

    } ,
    mdp:{
        type:String,
        required:true,
        trim :true
    } ,
    
},{
    timestamps:true
});
 
const User=mongoose.model('User',SchemaUser);
module.exports={
    User
}