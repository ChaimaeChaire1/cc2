const express=require('express');
const mongoose=require('mongoose');
const user=require('./Route/Utilisateur');
const dotenv=require('dotenv');
dotenv.config();


mongoose.connect(process.env.URL_MONGOOSE)
        .then(()=>console.log('Servers is connect avec mongodb'))
        .catch((err)=>console.log(`failed connect ${err}`));

const app=express();
app.use(express.json());
app.use('/users',user);





const PORT =process.env.PORT || 6000;
app.listen(PORT,()=>console.log('Server is Runing'));