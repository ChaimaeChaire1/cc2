const mongoose=require('mongoose');

const SchemaReservation=new mongoose.Schema({
    utilisateur_id :{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    chambre_id :{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'Chambre'
    }
});
const Reservation= mongoose.model('Reservation',SchemaReservation);

module.exports={
    Reservation
}