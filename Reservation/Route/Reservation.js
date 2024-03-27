const express=require('express');
const mongoose=require('mongoose');
const  asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const {Reservation}=require('../Model/Reservation');
const {Chambre}=require('../../Chambre/Model/Chambre');
const {User}=require('../../Utilisateur/Model/Utilisateur');

router.get('/all',asyncHandler(
    async(req,res)=>{
        const reservation=await Reservation.find();
        return res.status(201).json(reservation);  
    }
));



router.post('/reserver', asyncHandler(async (req, res) => {
   
    const { utilisateur_id, chambre_id } = req.body;
    const user = await User.findById(utilisateur_id);
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non found." });
    }

    const chambre = await Chambre.findById(chambre_id);
    if (!chambre) {
      return res.status(400).json({ message: "Chambre non found." });
    }

    if (!chambre.disponibilite) {
      return res.status(400).json({ message: "La chambre n'est pas disponible." });
    }
    const reser = new Reservation(
        { utilisateur_id, chambre_id }
        );
    await reser.save();
    chambre.disponibilite = false;
    await chambre.save();
    res.status(201).json({ message: "Reservation ajoutée avec succès." });
  
}));


 

module.exports=router;