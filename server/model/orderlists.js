let mongoose=require("../mongo/connect.js");
let Schema=mongoose.Schema;
let orderlistsSchema=new Schema({
	username:{type:String},
	orderprice:{type:Number},
	creattime:{type:Date},
	orderstate:{type:String},
});
let OrderLists=mongoose.model("OrderList",orderlistsSchema);
module.exports=OrderLists;
