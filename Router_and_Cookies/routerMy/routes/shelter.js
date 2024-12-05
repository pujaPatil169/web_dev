const express= require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('All Shelters');
}
)

router.post('/',(req,res)=>{
    res.send('creating shelter');
})

router.get('/:id',(req,res)=>{
    res.send('viewing one shelter');
})

router.get('/:id/edit',(req,res)=>{
    res.send('editing shelter');
})

module.exports = router