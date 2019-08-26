$(function(){
	$.ajax({
		type:"get",
		url:url+"/goodsList",
		async:true,
		data:{
			type:"1",
			num:5
		},
		success:function(result){
			var html="";
			let list =result.list;
			for(var i=0;i<list.length;i++){
				html+='<li><a href="detail.html?id='+list[i]._id+'"><em><img src="'+list[i].goodpic+'"/></em><span>'+list[i].goodname+'</span><span>￥'+list[i].goodprice+'</span><span>'+list[i].gooddiscuss.gooddiscusscon.length+'条消息<i>"98好评"</i></span></a></li>'
			}
			$("#goods-list").html(html)
			
			
			
		}
	});
})
