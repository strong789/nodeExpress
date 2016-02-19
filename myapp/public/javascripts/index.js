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
		$(".block:eq(0)").removeClass('visible');
		$(".block:eq(1)").removeClass('visible');
	}
})();
$(window).scroll(function(){
	var containH=$('.contain').height();
	var windowH=$(window).height();
	var scrollTop=$(window).scrollTop();
	var totalH=windowH+scrollTop;
	var num = totalH/405+0.2;
	num = Math.round(num)-1;
	console.log(num);
	$(".block:eq("+num+")").removeClass('visible');
});
