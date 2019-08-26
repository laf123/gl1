let Token=require("../model/token.js");
let Orderlist=require("../model/orderlists.js");
let Ordercon=require("../model/ordercons.js");
let orderlist =async (ctx,next)=>{
	let body =ctx.request.body;
	let username=body.username;
	let tokenId=body.tokenid;
	let orderstate="nopay";
	let creattime=Date.now();
	let goodname=body.goodname;
	let goodauthor=body.goodauthor;
	let goodpublish=body.goodpublish;
	let goodnumber=body.goodnumber;
	let goodprice=body.goodprice;
	let goodintr=body.goodintr;
	let goodpic=body.goodpic;
	let orderprice=goodprice*goodnumber;
	
	let t =await Token.findOne({tokenid:tokenId});
	
	let result={
		errCode:0
	}

	if (!t||t.overtime<creattime) {
		result.errCode=1;
		result.errMsg="登录时间已过期";
		ctx.body=result;
		return;
	} else{
		let ol=new Orderlist({
			username:username,
			orderprice:orderprice,
			creattime:creattime,
			orderstate:orderstate
			
		});
		ol=await ol.save();
		let oc=new Ordercon({
			username:username,
			orderid:ol._id,
			orderprice:orderprice,
			creattime:creattime,
			orderstate:orderstate,
			goodname:goodname,
			goodauthor:goodauthor,
			goodpublish:goodpublish,
			goodnumber:goodnumber,
			goodprice:goodprice,
			goodintr:goodintr,
			goodpic:goodpic
		});
		await oc.save();
		result.errCode=0;
		result.errMsg="y";
		ctx.body=result;
		return;
	}
}
module.exports=orderlist;