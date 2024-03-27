const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const Reservation =require('./Route/Reservation');



mongoose.connect(process.env.URL_MONGO)
        .then(()=>console.log('Server is connected avec mongo'))
        .catch((err)=>console.log(`failed connected ${err}`));

const app=express();
app.use(express.json());
app.use('/reservation',Reservation);







const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log('Server is runing'));