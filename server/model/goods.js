let mongoose=require("../mongo/connect.js");
let Schema=mongoose.Schema;
let goodsSchema=new Schema({
	goodname:{
		type:String
	},
	goodtype:{
		tpye:String
		
	}
});
let goods =mongoose.model("Good",goodsSchema);
module.exports=goods;