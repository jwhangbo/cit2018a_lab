var zoomWidth = 100;
var zoomHeight = 70;
var counter = 0;

document.getElementById("bg1Btn").addEventListener("click",
	function(){
		ch1.style.backgroundImage = "url(imgs/i1.jpg)";
		ch2.style.backgroundImage = "url(imgs/i2.jpg)";
		ch3.style.backgroundImage = "url(imgs/i3.jpg)";
		counter = 1
});

document.getElementById("bg2Btn").addEventListener("click",
	function(){
		ch1.style.backgroundImage = "url(imgs/i4.jpg)";
		ch2.style.backgroundImage = "url(imgs/i5.jpg)";
		ch3.style.backgroundImage = "url(imgs/i6.jpg)";
		counter = 4
});

document.getElementById("bg3Btn").addEventListener("click",
	function(){
		ch1.style.backgroundImage = "url(imgs/i7.jpg)";
		ch2.style.backgroundImage = "url(imgs/i8.jpg)";
		ch3.style.backgroundImage = "url(imgs/i9.jpg)";
		counter = 7
});

document.getElementById("bg4Btn").addEventListener("click",
	function(){
		ch1.style.backgroundImage = "url(imgs/i10.jpg)";
		ch2.style.backgroundImage = "url(imgs/i11.jpg)";
		ch3.style.backgroundImage = "url(imgs/i12.jpg)";
		counter = 10
});

document.getElementById("ch1").addEventListener("mouseenter",
	function(){
		zoom.style.backgroundImage = ch1.style.backgroundImage;
});

document.getElementById("ch2").addEventListener("mouseenter",
	function(){
		zoom.style.backgroundImage = ch2.style.backgroundImage;
});

document.getElementById("ch3").addEventListener("mouseenter",
	function(){
		zoom.style.backgroundImage = ch3.style.backgroundImage;
});

document.getElementById("makeBtn").addEventListener("click",
	function(){
		bg.style.backgroundImage = zoom.style.backgroundImage;
});

document.getElementById("resetBtn").addEventListener("click",
	function(){
		bg.style.backgroundImage = "none";
});

document.getElementById("showBtn").addEventListener("click",
	function(){
		app1.style.display = "block";
});

document.getElementById("hideBtn").addEventListener("click",
	function(){
		app1.style.display = "none";
});

document.getElementById("zoom").addEventListener("click",
	function(){
		zoomcontrols.style.display = "block";
});

document.getElementById("zoomIn").addEventListener("click",
	function(){
		zoomWidth += 10;
		zoomHeight += 7;
		zoom.style.width = zoomWidth+"%";
		zoom.style.height = zoomHeight+"%";
});

document.getElementById("zoomOut").addEventListener("click",
	function(){
		zoomWidth -= 10;
		zoomHeight -= 7;
		zoom.style.width = zoomWidth+"%";
		zoom.style.height = zoomHeight+"%";
});

document.getElementById("prevBtn").addEventListener("click",
	function(){
		if (counter <= 1) {
			ch1.style.backgroundImage = "url(imgs/i10.jpg)"
			ch2.style.backgroundImage = "url(imgs/i11.jpg)"
			ch3.style.backgroundImage = "url(imgs/i12.jpg)"	
			counter = 10	
		} else {
			ch1.style.backgroundImage = "url(imgs/i"+(counter-3)+".jpg"
			ch2.style.backgroundImage = "url(imgs/i"+(counter-2)+".jpg"
			ch3.style.backgroundImage = "url(imgs/i"+(counter-1)+".jpg"
			counter -= 3;
		}
});

document.getElementById("nextBtn").addEventListener("click",
	function(){
		if (counter == 10 || counter == 0) {
			ch1.style.backgroundImage = "url(imgs/i1.jpg)"
			ch2.style.backgroundImage = "url(imgs/i2.jpg)"
			ch3.style.backgroundImage = "url(imgs/i3.jpg)"	
			counter = 1			
		} else {
			ch1.style.backgroundImage = "url(imgs/i"+(counter+3)+".jpg"
			ch2.style.backgroundImage = "url(imgs/i"+(counter+4)+".jpg"
			ch3.style.backgroundImage = "url(imgs/i"+(counter+5)+".jpg"
			counter += 3;
		}
});
