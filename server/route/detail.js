let Goods=require("../model/goods.js")
let goods=async (ctx,next)=>{
	let id =ctx.query.id;
	let g=await Goods.findById(id);
	let result={
		errCode:0
	}
	if(!g){
		result.errCode=1;
		result.errMsg="已下架资源";
		ctx.body=result;
		return;
	}else{
		result.errCode=0;
		result.list=g;
		result.errMsg="";
		ctx.body=result;
		return;
	}
	
}
module.exports=goods