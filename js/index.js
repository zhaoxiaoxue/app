

document.addEventListener("plusready",function(){
	var urlarr=[{url:"_www/html/index.html",title:"新闻"},{url:"_www/html/picture.html",title:"图片"},{url:"_www/html/video.html",title:"视频"}]
	var curr=plus.webview.currentWebview();
	var son=plus.webview.create("_www/html/index.html","",{top:"44px",bottom:"50px"})
	curr.append(son);
//	http://192.168.3.31
	son.onloaded=function(){
		plus.nativeUI.closeWaiting( "Loading...", {});
	}
	son.onloading=function(){
		 plus.nativeUI.showWaiting( "Loading...", {});
	}
	//切换窗口
	var title=document.querySelectorAll(".tou")[0];
	title.innerHTML=urlarr[0].title;
	mui(".footer .row").on("tap",".col-s-3",function(){
		var index=$(".col-s-3").index(this);
		if(index!=3){
			son.loadURL(urlarr[index].url);
			title.innerHTML=urlarr[index].title;
		}else{
			return;
		}
	})
	

})
