let mongoose =require("../mongo/connect.js");
let Schema=mongoose.Schema;
let userSchema=new Schema({
	username:{
		type:String
	},
	password:{
		type:String
	},
	usertel:{
		type:String
	}
});
let User=mongoose.model("User",userSchema);
module.exports=User;
