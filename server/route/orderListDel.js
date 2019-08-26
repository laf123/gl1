let Token =require("../model/token.js");
let OrderList=require("../model/orderlists.js");
let OrderCon=require("../model/ordercons.js");
const ObjectId=require("mongodb").ObjectID;
let del = async(ctx,next)=>{
	let body = ctx.request.body;
	let tokenId=body.tokenId;
	let orderId=body.orderId;
	let d = Date.now();
	let token =await Token.findOne({tokenid:tokenId});
	let result={
		errCode:0
	}
	if(!token||token.overtime<d){
		result.errCode=1;
		result.errMsg="登录已过期";
		ctx.body=result;
		return;
	}else{
		let oc=await OrderCon.deleteOne({orderid:orderId});
		let ol=await OrderList.deleteOne({_id:ObjectId(orderId)})
	result.errCode=0;
	result.errMsg="删除成功";
	result.oc=oc;
	result.ol=ol;
	ctx.body =result;
	return;
	}
}
module.exports=del;