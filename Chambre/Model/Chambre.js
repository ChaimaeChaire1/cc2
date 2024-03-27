const mongoose=require('mongoose');

const SchemaChambre=new mongoose.Schema({
    type :{
        type:String,
        required:true,
        trim:true
    },
    capacite :{
        type:String,
        required:true,
        trim:true
    },
    prix :{
        type:Number,
        required:true,
        trim:true
        
    },
    disponibilite :{
        type:Boolean,
        required:true,
        
    },
    hotel :{
        type:String,
        required:true,
        trim:true
    },
});
const Chambre= mongoose.model('Chambre',SchemaChambre);

module.exports={
    Chambre
}