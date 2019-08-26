 Goods=require("../model/goods.js");
 goods= async (ctx,next)=>{
	let good= ctx.query;
	let num=good.num;
	let type=good.type;
	let g =await Goods.find({goodtype:type}).limit(parseInt(num));
	let result ={
		errCode:0
	}
	if(!g){
		result.errCode=1;
		result.errMsg="没有该类型的书籍";
		ctx.body=result;
		return;
	}
	else{
		result.errCode=0;
		result.errMsg="";
		result.list=g;
		ctx.body=result;
		return;
	}
}
module.exports=goods;
