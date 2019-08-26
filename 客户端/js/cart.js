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
				var html="";
				var price=0;
				for(var i=0;i<result.list.length;i++){
					var oc=result.list[i];
				html+='<div class="cart-list"><div class="cart-hd"><input type="checkbox" name="" id="" value="" /><em>'+oc.goodname+'</em></div><div class="cart-items"><dl><dt><img src="img/goods-banner.png"/></dt><dd>名称：'+oc.goodname+'</dd><dd>编著：'+oc.goodauthor+'</dd><dd>出版：'+oc.goodpublish+'</dd><dd>简介：'+oc.goodintr+'</dd><dd class="price">定价：￥<span>'+oc.goodprice+'</span>.00</dd></dl><div class="icon-del del-item"res='+oc.orderid+'><a href="#"></a></div></div><div class="subtotal"><span class="total-price">小计：<em>￥<span class="subtotalcon">'+oc.orderprice+'</span></em></span><span class="count"><a href="#" class="icon-minus minus"></a><input type="number" name="" id="num" value="'+oc.goodnumber+'" /><a href="#" class="icon-add add"></a></span></div></div>';

					price+= oc.orderprice;
				}
				$(".container").html(html);
				$("#totaprice").text(price);
			}else if(result.errCode==1){
				alert(result.errMsg)
			}else{
				alert(result.errMsg)
			}
		}
	});
	
	
	$(".container").delegate(".icon-minus","click",function(){
	var count =parseInt($(this).next().val())-1;
	var price=$(this).parent().parent().prev().children().children(".price").children("span").text()
	if(count<=1){
		count=1
	}

	$(this).next().val(count);
	price=price*count;
	var a=$(this).parent().prev().children().children().text(price);
	});
	$(".container").delegate(".icon-add","click",function(){
	var count =parseInt($(this).prev().val())+1;
	var price=$(this).parent().parent().prev().children().children(".price").children("span").text()
	$(this).prev().val(count);
	price=price*count;
	var a=$(this).parent().prev().children().children().text(price);
	getToprice()
	});
	function getToprice(){
		var price=0;
		for (var i=0; i<$(".subtotalcon").length;i++) {
			price+=parseFloat($(".subtotalcon").eq(i).text());
			
		}
		$("#totaprice").text(price)
	}
	$(".container").delegate(".icon-del","click",function(){
		var orderId=$(this).attr("res");
		var tokenId=localStorage.getItem("tokenId");
		$(".modals").css("display","block");
		$(".ok").click(function(){
			$(".modals").css("display","none");
			$.ajax({
				type:"post",
				url:url+"/orderListDel",
				async:true,
				data:{
					tokenId:tokenId,
					orderId:orderId
				},
				success:function(result){
					alert(result.errMsg);
					if(result.errCode==0){
						location.reload()
					}
				}
			});		
		
		});
		$(".cancel").click(function(){
			$(".modals").css("display","none");
		});
	});
})
