let mongoose=require("../mongo/connect.js");
let Schema=mongoose.Schema;
let tokenSchema=new Schema({
	username:{type:String},
	tokenid:{type:String},
	gettime:{type:Date},
	overtime:{type:Date},
});
let Token =mongoose.model("Token",tokenSchema);
module.exports=Token;