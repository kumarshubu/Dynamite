const mongoose =require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
	AccountNumber:{type:String,
		required:true},
	IFSCCode:{type:String,
		required:true},
	Balance:{type:String,
		required:true},
	RegNumber:{type:String,
		required:true}
	})

module.exports=mongoose.model('proto1',User)