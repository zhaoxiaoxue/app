$(function(){
     var index=0;
     setInterval(function(){
         $(".lunbo .win li").css({display:"none"});
         $($(".lunbo .win li")[index]).css({display:"block"});
         $(".lunbo .btn li").css({background:"#ccc",border:"none"});
         $($(".lunbo .btn li")[index]).css({border:"1px solid #ccc",background:"#fff"});
         index++;
     	if(index==$(".lunbo .win li").length){
     		index=0;
     	}
     },3000);
//
////    推拽导航条
	var lefts;
	$(".header").on("dragstart",".header-fenlei",function(e){
		lefts=parseInt($(this).css("marginLeft"))||0;
	})
	$(".header").on("drag",".header-fenlei",function(e){
//		alert(e.detail.direction);	
		var x=e.detail.deltaX;
		var mlX = lefts +x;
		if(mlX<=-166.67){
			mlX = -166.67;
		}
		if(mlX>=0){
			mlX = 0
		}
		$(this).css("marginLeft",mlX);
	})



});
