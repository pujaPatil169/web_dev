const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


const cookieRoutes = require('./routes/cookie1.js');

app.use(cookieParser('thisissecret'));
app.use('/setCookie',cookieRoutes);
//now on every incoming requiest we have a property called req.cookies

app.listen(3000,()=>{
    console.log('server listening on port 3000');
})