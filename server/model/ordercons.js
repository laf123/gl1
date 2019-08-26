let mongoose=require("../mongo/connect.js");
let Schema=mongoose.Schema;
let orderconSchema = new Schema({
	username:{type:String},
	orderid:{type:String},
	orderprice:{type:Number},
	creattime:{type:Date},
	orderstate:{type:String},
	goodname:{type:String},
	goodauthor:{type:String},
	goodpublish:{type:String},
	goodnumber:{type:Number},
	goodprice:{type:Number},
	goodintr:{type:String},
	goodpic:{type:String}
});
let Ordercon =mongoose.model("Ordercon",orderconSchema);
module.exports=Ordercon;
