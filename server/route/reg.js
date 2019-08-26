	let User=require("../model/user.js");
let reg= async (ctx,next) => {

	let user=ctx.request.body;
	let userName=user.username;
	let password=user.password;
	let userTel=user.userTel;
	let telCode=user.telCode;
	
	let result={
		errCode:0
	}
	user=await User.findOne({username:userName});
	let tel =await User.findOne({usertel:userTel});
	if(telCode!=1234){
		result.errCode=2;
		result.errMsg="手机验证码错误，请重新输入";
		ctx.body=result;
		return;
	}
	if(!user){
		if(!tel){
			let u=new User({
				username:userName,
				password:password,
				usertel:userTel,
			});
			try{
				result.errCode=0;
		result.errMsg="恭喜你，注册成功";
		ctx.body=result;
		await u.save();
		return;
			}catch(err){
				console.log(err)
			}
		}
		else{
			result.errCode=3;
		result.errMsg="手机号已存在请重新输入";
		ctx.body=result;
		return;
		}
	}
	else{
		result.errCode=1;
		result.errMsg="用户名已存在，请重新输入";
		ctx.body=result;
		return;
	}
}
module.exports=reg;


