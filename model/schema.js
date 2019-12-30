const mongoose =require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
	Name:{type:String,
		required:true},
	AccountNumber:{type:String,
		required:true},
	IFSCCode:{type:String,
		required:true},
	RegNumber:{type:String,
		required:true},
	FreeWithdrawl:{type:Boolean,
		required:true},			
	Time:{type:String,
		required:true},		
	})

module.exports=mongoose.model('proto1',User)