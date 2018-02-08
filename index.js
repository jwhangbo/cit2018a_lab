var avaImg = document.getElementById("image");
var centerUp = 0;
var centerLeft = 0;
var size = 100;

document.getElementById("avatar1").addEventListener("click",
	function(){
		avaImg.src = "imgs/ava2.png";
});

document.getElementById("avatar2").addEventListener("click",
	function(){
		avaImg.src = "imgs/ava1.png";
});

document.getElementById("menubtn").addEventListener("click",
	function(){
		menu.style.right = "0px";
});

document.getElementById("upbtn").addEventListener("click",
	function(){
		centerUp -= 7;
		center.style.top = centerUp+"px";
});

document.getElementById("downbtn").addEventListener("click",
	function(){
		centerUp += 7;
		center.style.top = centerUp+"px";
});

document.getElementById("leftbtn").addEventListener("click",
	function(){
		centerLeft -= 7;
		center.style.left = centerLeft+"px";
});

document.getElementById("rightbtn").addEventListener("click",
	function(){
		centerLeft += 7;
		center.style.left = centerLeft+"px";
});

document.getElementById("plus").addEventListener("click",
	function(){
		size += 1
		avaImg.style.height = size+"%";
});

document.getElementById("minus").addEventListener("click",
	function(){
		size -= 1
		avaImg.style.height = size+"%";
});

document.getElementById("image").addEventListener("click",
	function(){
		upbtn.style.opacity = "0";
		downbtn.style.opacity = "0";
		leftbtn.style.opacity = "0";
		rightbtn.style.opacity = "0";
		avatar1.style.opacity = "0";
		avatar2.style.opacity = "0";
		plus.style.opacity = "0";
		minus.style.opacity = "0";
});

document.getElementById("header").addEventListener("click",
	function(){
		upbtn.style.opacity = "1";
		downbtn.style.opacity = "1";
		leftbtn.style.opacity = "1";
		rightbtn.style.opacity = "1";
		avatar1.style.opacity = "1";
		avatar2.style.opacity = "1";
		plus.style.opacity = "1";
		minus.style.opacity = "1";
});

document.getElementById("shirtbtn").addEventListener("click",
	function(){
		shirt.style.display = "block";
});

document.getElementById("hatbtn").addEventListener("click",
	function(){
		hat.style.display = "block";
});

document.getElementById("bowbtn").addEventListener("click",
	function(){
		bow.style.display = "block";
});