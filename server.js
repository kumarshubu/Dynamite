const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const db = require('./keys/key.js').mongoURI;
mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true})
	.then(()=>{console.log({success:true})})
	.catch(()=>{console.log({success:false})})

const api=require('./routes/api.js');
app.use('/',api);

const Port = 3000;

app.listen(Port,console.log(`server is running on Port ${Port}`));