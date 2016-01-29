
//当前窗口为_con.html
var curr=plus.webview.currentWebview();
var url=curr.url;

var header=plus.webview.create("_www/html/show_header.html","",{height:"44px"});
header.onloaded=function(){
	curr.append(header);
	curr.show("slide-in-right");
}

var con=plus.webview.create(url,"con-con",{top:"44px"});
con.onloading=function(){
	var wait=document.querySelectorAll("div")[0];
	wait.style.display="block";
}
con.onloaded=function(){
	curr.append(con);
	var wait=document.querySelectorAll("div")[0];
	wait.style.display="none";
}
var footer=plus.webview.create("_www/html/show_footer.html","",{bottom:"50px",position:"absolute",zindex:"222"});
curr.append(footer);
footer.onloaded=function(){
	curr.append(footer);
	curr.show("slide-in-right");
}

