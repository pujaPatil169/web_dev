const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('all dogs');
})

router.post('/',(req,res)=>{
    res.send('creating one ');
})

router.get('/:id',(req,res)=>{
    res.send('viewing one dog');
})

router.put('/:id/edit',(req,res)=>{
    res.send('editing/updating dog');
})

module.exports = router;