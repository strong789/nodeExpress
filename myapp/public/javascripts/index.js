console.log($(window).height());


function popup(){
	var layer = document.getElementById('layer');
	layer.style.visibility = "visible";
  	layer.style.width = window.innerWidth +"px";
  	layer.style.height = window.innerHeight+"px";
}

function disappear(event){
	 var e = event || window.event;
	 /*e.target是指事件的发出者者，currentTarget始终是事件的监听者，一般currentTarget是target*/
	 if(e.target === e.currentTarget){
	 		document.getElementById('layer').style.visibility = "hidden";
	 }
}

(function(){
	var wscrollTop=$(window).scrollTop();
	if(wscrollTop === 0){
		$(".block:eq(0)").addClass('visible');
		$(".block:eq(1)").addClass('visible');
		$(".block:eq(0)").css('opacity','1');
		$(".block:eq(1)").css('opacity','1');
	}
})();
$(window).scroll(function(){
	var windowH=$(window).height();
	var scrollTop=$(window).scrollTop();
	var totalH=windowH+scrollTop;
	var topGap =  scrollTop/405;
	var num =topGap-Math.round(topGap);
	topGap = Math.round(topGap);
	if(topGap != 0.5){
		for(var i = 0;i<2;i++){
			$(".block:eq("+(topGap+i)+")").addClass('visible');
			$(".block:eq("+(topGap+i)+")").css('opacity','1');
		}
	}else{
		for(var i = 0;i<3;i++){
			$(".block:eq("+(topGap+i)+")").addClass('visible');
			$(".block:eq("+(topGap+i)+")").css('opacity','1');
		}	
	}
});
