let Token =require("../model/token.js");
let User=require("../model/user.js");
const stringRandom=require("string-random");
let login =async (ctx,next)=>{
	let user=ctx.request.body;
	let username=user.username;
	let password=user.password;
	let u=await User.findOne({
		username:username,
		password:password
	});
	let result={
		errCode:0
	}
	if(!u){
		result.errCode=1;
		result.errMsg="用户名或密码错误";
		ctx.body=result;
		return;
	}
	else{
		let token =await Token.findOne({username:username});
		let tokenId=stringRandom(32);
		let getTime=Date.now();
		let overTime=Date.now()+1000*60*60*24;
		if(!token){
			let t =new Token({
				username:username,
				tokenid:tokenId,
				gettime:getTime,
				overtime:overTime
			});
			try{
				await t.save()
			}catch(e){
				//TODO handle the exception
			}
		}else{
			await Token.updateOne({username:username},{
				tokenid:tokenId,
				gettime:getTime,
				overtime:overTime
			})
		}
		result.errCode=0;
		result.errMsg="登陆成功";
		result.username=username;
		result.tokenId=tokenId;
		ctx.body=result;
		return;
	}
	
}
module.exports=login;