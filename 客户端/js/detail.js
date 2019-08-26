$(function(){
function GetQueryString(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
 		var id=(GetQueryString("id"));
 		$.ajax({
 			type:"get",
 			url:url+"/goods",
 			async:true,
 			data:{
 				id:id
 			},
 			success:function(result){
 				var list =result.list;
 				goodauthor=list.goodauthor;
 				goodpublish=list.goodpublish;
 				goodintr=list.goodintr;
 				$("#goods-name").text(list.goodname);
 				$("#goods-price").text(list.goodprice);
 				$("#good-pic").attr("src",list.goodpic);
 				$("#goods-marjor").text(list.goodmajor);
 				$("#good-discuss-num").text(list.gooddiscuss.gooddiscusser.length);
 				$("#good-detail1").html('<img src="'+list.gooddetail+'"/>');
 				$("#good-detail2").html('<img src="'+list.goodparameter+'"/>');
 				var html="";
 				for (var i=0;i<list.gooddiscuss.gooddiscusser.length;i++) {
 				html+='<div id="gooddiscusser">'+list.gooddiscuss.gooddiscusser[i]+'</div><div id="gooddiscusscon">挺好哒</div>'
 				}
 				$("#good-detail3").html(html);
 			}
 		});
		$(".addCart").click(function(){
			var username=localStorage.getItem("username");
			var tokenid=localStorage.getItem("tokenId");
			var goodname=$("#goods-name").text();
			var goodnumber=$("#num").val();
			var goodprice=$("#goods-price").text();
			var goodpic=$("#good-pic").attr("src");
			$.ajax({
				type:"post",
				url:url+"/orderlistAdd",
				async:true,
				data:{
					username:username,
					tokenid:tokenid,
					goodname:goodname,
					goodnumber:goodnumber,
					goodprice:goodprice,
					goodpic:goodpic,
					goodauthor:goodauthor,
					goodpublish:goodpublish,
					goodintr:goodintr
				},
				success:function(result){
					if (result.errCode==1) {
						alert(result.errMsg)
					} else{
						$(".addCart").attr("disabled","disabled")
						$(".addCart").text("已下单")
					}
				}
			});
			$(".gopay").click(function(){
				window.location.href = "cart.html"
			})
		})






});

