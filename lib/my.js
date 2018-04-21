/*图片向左侧滚动效果*/
function ScrollImgLeft() {
	var speed = 30
	var scroll_begin = document.getElementById("scroll_begin");
	var scroll_end = document.getElementById("scroll_end");
	var scroll_div = document.getElementById("scroll_div");
	scroll_end.innerHTML = scroll_begin.innerHTML

	function Marquee() {
		//当滚动显示到达最大值时，重置滚动效果，从最左开始显示
		if(scroll_div.scrollLeft==scroll_div.scrollLeftMax){
			scroll_div.scrollLeft = 0;
		}else{
			scroll_div.scrollLeft++;
		}
	}
	var MyMar = setInterval(Marquee, speed)
	scroll_div.onmouseover = function() {
		clearInterval(MyMar)
	}
	scroll_div.onmouseout = function() {
		MyMar = setInterval(Marquee, speed)
	}
}

