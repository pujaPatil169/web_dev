const express = require('express');
const router = express.Router();

router.use((req,res,next)=>{
    if(req.query.isadmin){
        return next();
    }
    return res.send('sorry not an admin');
})

router.get('/topSecret',(req,res)=>{
    res.send('this is top secret');
})

router.get('/deleteEverything',(req,res)=>{
    res.send('ok deleted everything');
})

module.exports= router