document.addEventListener("plusready",function(){
	$('.row .col-s-3').eq(0).css({color:"red",borderBottom:"1px solid red"})
	$(".videos").eq(0).show();
	$(".col-s-3").on("tap",function(){
		var index = $(".col-s-3").index(this);
		$('.row .col-s-3').css({color:"#000",borderBottom:"none"});
		$(".videos").hide();
		$('.row .col-s-3').eq(index).css({color:"red",borderBottom:"1px solid red"})
		$(".videos").eq(index).show();
	})
	

})
