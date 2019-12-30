const express = require('express');
const router = express.Router();
const cors = require('cors');
router.use(cors());

const model = require('../model/schema.js');

router.get("/get",(req,res)=>{
	model.find((err,data)=>{
		if(err) return res.json({success:false,err:err});
			return res.json({success:true,data:data});
	})
})

const sms = function(props){
const accountSid = 'AC11f77761f6188a0c8025e85f0c72a88e';
const authToken = '874f20a0848ddf090926b93b88c8e378';
const client = require('twilio')(accountSid, authToken);
    let currentdate =new Date();
    var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
client.messages
  .create({
     body: `Account No : ${props.AccountNumber} IFSC Code : ${props.IFSCCode} Amount Debited: Rs${props.Balance} on ${datetime}`,
     from: '+12053869571',
     to: '+918507649335'
   })
  .then(message => console.log(message))
  .catch((err)=>console.log(err))	
}

router.post("/post",(req,res)=>{
	const {AccountNumber,IFSCCode,Balance,RegNumber}=req.body;
	const user = new model();
	user.AccountNumber=IFSCCode;
	user.IFSCCode=IFSCCode;
	user.Balance=Balance;
	user.RegNumber=RegNumber;

  	user.save()
	.then(()=>{console.log({postSuccess:true})},res.json({user}),sms(user))
	.catch(()=>{console.log({postSuccess:false})})
})


module.exports=router;