$(function(){
	var yzm=new GVerify("v_container");
$("#button").click(function(){
		var res=yzm.validate($("#code_input").val());
		var username=$("#userName").val();
		var password=$("#userPass").val();
		if(!res){
			$("#tip").html("验证码有误请重新输入");
		}else{
			if(username==""||password==""){
				$("#tip").html("账号或者密码有误请重新输入");
			}else{
				$.ajax({
					type:"post",
					url:url+"/login",
					async:true,
					data:{
						username:username,
						password:password
					},
					success:function(result){
						if(result.errCode==0){
							localStorage.username=result.username;
						localStorage.tokenId=result.tokenId;
						$("#tip").html("正在登陆")
							window.location.href="index.html";
						return;}
						
						else{
							$("#tip").html("用户名或密码有误，请重新输入")
						}
					}
				});
			}
		}
	})
})