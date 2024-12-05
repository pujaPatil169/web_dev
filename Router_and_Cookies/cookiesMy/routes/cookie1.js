const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

router.use(cookieParser('thisissecret'));
//if ever changed this secret string passed in cookieParser then anybody who has cookis right now that has been signed with this secret all those cookies are goig to be invalid 
//in reaal sceneario this secret will be secure it will be in an environment variable or hidden 
//if anyone changes the signed cookies then 
router.get('/',(req,res)=>{
    res.cookie('name','steevy');
    res.cookie('animal','jellyfish');
    res.send('ok sent you a cookie');
})
router.get('/greet',(req,res)=>{
    // console.log(req.cookies);
    //name default value is no-name
    const {name=no-name} = req.cookies;
    res.send(`hey there,${name}`);
})

router.get('/getSignedCookie',(req,res)=>{
    res.cookie('fruit','Grape',{signed:true});
    res.send('ok signed your fruit cookie')
})

router.get('/verifyFruit',(req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.cookies);
})

module.exports = router;

//-------notes----------

//cookies will be sent with every single request 
//cookies add statefullnes to the http requests,usually without cookies if an http requests are sent to the browser doesn't even rembers the previois request hence http requests are in air no existence without cookies
//users browser sents cookies automatically unprompted with every single request to the server of the web application 
//-------signed cookies----------
//the idea behind signing something in programming,we're usually reffering to a digital signature or a cryptographic signature
//the idea is not to encrypt or hide information instead it is to be able to verify it's intigrity verify that something hasn't changed 
//req.cookies--doesnt give signed cookies
//req.signedcookies.  --this is only going to exist if we are using cookie parser and if we have passed in a secret key or a secret ,so it's gonna contained the signed cookies that have been sent by the requesst they will be unsigned and ready for use

//singning digitally signing something is a way of verifying it's not been tampered with it is not a way of hiding or encrypting information 

//integrity -- that the data is unchanged
//authenticity -- is that it came from same source or it comes from a trusted place 

//it dosn't only have to be cookie there are lots of things that we can sign for ex bitcoin --digital signatures are crutial to making them work 

//when we signed a cookie using cookie-parser

//cookies--in that we are trying to add in some statefullness to HTTP which is inharently a stateless protocol we are trying save or share information from one request to the next ,persist something from one request to the next to keep track who is currently logged in ,what's the persons username who is logged in or what's in somebodys shopping carrt before they check out so cookies and sessions can be used to accoplish this 
//but sessions are on the server side so session we store the actuall data itself on the server side ,not in the browser which is what we do with cookis    

//in most browsers atleast there is a limit first of all on the number of the cookies you can have per domain and the size of each cookie how much information they can store 
//if we have a lot of information that we wanted to associate with user or that we wanted to persist from one request to the next cookies may not be the best choice 
//but second of all cookis are just not as secure as storing information on the server side so this where session comes in 

