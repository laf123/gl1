let Token=require("../model/token.js");
let Orderlist=require("../model/ordercons.js");
let orderlistget=async(ctx,next)=>{
	let tokenId=ctx.request.body.tokenId;
	
	let token = await Token.findOne({tokenid:tokenId});
	let result={
		errCode:0
	}
	if(!token||token.overtime<Date.now()){
		result.errCode=1;
		result.errMsg="未登录或者登陆超时";
		ctx.body=result;
		return;
	}
	else{
		let username=token.username;
		let ol=await Orderlist.find({
			username:username,
			orderstate:"nopay"
		});
		if(!ol){
			result.errCode=2;
		result.errMsg="没有订单";
		ctx.body=result;
		return;
		}else{
			result.errCode=0;
		result.errMsg="登陆成功";
		result.list=ol;
		ctx.body=result;
		return;
		}
	}
	
}
module.exports=orderlistget;