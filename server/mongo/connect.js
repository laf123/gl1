const mongoose =require("mongoose");
let DB_url = "mongodb://localhost:27017/galaxy"
mongoose.connect(DB_url,{useNewUrlParser:true});

//连接成功
mongoose.connection.on("connected",function(){
	console.log("Mongoose connection open to "+DB_url);
	
})
//连接异常
mongoose.connection.on("error",function(err){
	console.log("Mongoose connection error:"+err);
	
})
//连接断开
mongoose.connection.on("disconnected",function(){
	console.log("Mongoose connection disconnected");
	
})
module.exports=mongoose;
