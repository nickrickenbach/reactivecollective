// JavaScript Document
var lw;
$(document).ready(function(e) {
	TweenMax.to($("*"),1,{textShadow:"0px 1px 4px rgba(0, 0, 0, 0.3)"});
	$("#logo").load(init);
});
function init(){
	var w = $(window).width();
	lw = $("#logo").width();
	//console.log(w+" "+lw);
    $(window).resize(resizeWin);
	resizeWin(null,true);
	TweenMax.fromTo($("#logo"),1,{opacity:0,z:300,transformOrigin:"50% 50%",transformPerspective:200},{opacity:1,z:0,transformOrigin:"50% 50%",transformPerspective:200});
	TweenMax.fromTo($("#logo"),1,{opacity:0,z:300,transformOrigin:"50% 50%",transformPerspective:200},{opacity:1,z:0,transformOrigin:"50% 50%",transformPerspective:200});
	TweenMax.fromTo($("#logo"),1,{opacity:0,z:300,transformOrigin:"50% 50%",transformPerspective:200},{opacity:1,z:0,transformOrigin:"50% 50%",transformPerspective:200});
}
function resizeWin(e,frce){
	var w = $(window).width();
	if(w<lw+50){
		var perc = w/(lw+50);
		if(frce){
			$("#logo").css({marginLeft:((w/2)-((lw*perc)/2))+"px",width:(lw*perc)+"px"});
		}else{
			TweenMax.to($("#logo"),0.4,{marginLeft:((w/2)-((lw*perc)/2))+"px",width:(lw*perc)+"px"});
		}
	}else{
		if(frce){
			$("#logo").css({marginLeft:((w/2)-(lw/2))+"px",width:(lw)+"px"});
		}else{
			TweenMax.to($("#logo"),0.4,{marginLeft:((w/2)-(lw/2))+"px",width:(lw)+"px"});
		}
	}
	
	//console.log(w+" "+lw);
}