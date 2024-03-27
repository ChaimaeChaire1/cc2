const express=require('express');
const mongoose=require('mongoose');
const  asyncHandler=require('express-async-handler');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const router=express.Router();
const {User}=require('../Model/Utilisateur');

router.post('/registrer',asyncHandler(
    async(req,res)=>{
        let user=await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({messgae:'user doit etre login'})
        } 
        const salt=await bcrypt.genSalt(10);
        req.body.mdp=await bcrypt.hash(req.body.mdp,salt);
        user = new User({
            nom:req.body.nom,
            email:req.body.email,
            login:req.body.login,
            mdp:req.body.mdp,
        });
        const resulat=await user.save();
        return res.status(200).json(resulat);
    }
));

router.post('/login',asyncHandler(
    async(req,res)=>{
        let user=await User.findOne({email:req.body.email});
        if(!user){
            return res.status(400).json({messgae:'user doit registrer'})
        } 
       const mdpp=await bcrypt.compare(req.body.mdp,user.mdp);
       if(!mdpp){
        return res.status(400).json({messgae:'email ou mot de passe incorrecte'})
    } 
        const token=jwt.sign({id:user._id},'SecretKey');
        const {mdp,...other}=user._doc;
        return res.status(200).json({...other,token});
    }
))

module.exports=router;