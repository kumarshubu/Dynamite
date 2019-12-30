const mongoose =require('mongoose');
const schema = mongoose.Schema;

const User = new schema({
	Name:{type:String,
		required:true},
	AccountNumber:{type:String,
		unique:true,
		required:true},
	IFSCCode:{type:String,
		required:true},
	Password:{type:String,
		required:true},
	RegNumber:{type:String,
		required:true},
	FreeWithdrawl:{type:Number},						
	TxTime:{type:String,
		},	
	TxId:{type:String,
		},		
	TxAmount:{type:String,
		},				

	})

module.exports=mongoose.model('proto1',User)