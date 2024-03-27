const express=require('express');
const mongoose=require('mongoose');
const  asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const {Chambre}=require('../Model/Chambre');

router.get('/all',asyncHandler(
    async(req,res)=>{
        const chambres=await Chambre.find();
        return res.status(201).json(chambres);  
    }
));

router.get('/chambre/:id',asyncHandler(
    async(req,res)=>{
        const chambre=await Chambre.findById(req.params.id);
        if(!chambre){
            return res.status(404).json({message:'chambvre not found'});
        }
            return  res.status(201).json(chambre);
    }
));
router.post('/add',asyncHandler(
    async(req,res)=>{
        const chambre= new Chambre({
            type:req.body.type,
            capacite:req.body.capacite,
            disponibilite:req.body.disponibilite,
            prix:req.body.prix,
            hotel:req.body.hotel
        })
        const resulta=await chambre.save();
        return  res.status(201).json(resulta);
    }
));



module.exports=router;