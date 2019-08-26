$(function(){
	var tokenId=localStorage.getItem("tokenId");
	$.ajax({
		type:"post",
		url:url+"/orderlistGet",
		async:true,
		data:{
			tokenId:tokenId
		},
		success:function(result){
			if(result.errCode==0){
				var count =result.list.length;
				$("#nopay").html("待付款("+count+")")
			}
			else{
				if(result.errCode==1){
					alert(result.errMsg);
					window.location.href="login.html";
				}
			}
		}
	});
	
		$("#nopay").click(function(){
		window.location.href="cart.html";
		});
	
	
})
