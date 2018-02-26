var menu = document.getElementById("menu");
var main = document.getElementById("main");
var home = document.getElementById("home");

var mcTitle = document.getElementById("mcTitle");
var mcimg1 = document.getElementById("mcimg1");
var mcimg2 = document.getElementById("mcimg2");
var mcimg3 = document.getElementById("mcimg3");

document.getElementById("bg1").addEventListener("click", function(){
	main.style.display = "block";
	mcTitle.innerHTML = "Head Gear";
	mcimg1.style.backgroundImage = "url(imgs/gears/h1.png)";
	mcimg2.style.backgroundImage = "url(imgs/gears/h2.png)";
	mcimg3.style.backgroundImage = "url(imgs/gears/h3.png)";
});

document.getElementById("bg2").addEventListener("click", function(){
	main.style.display = "block";
	mcTitle.innerHTML = "Body Gear";
	mcimg1.style.backgroundImage = "url(imgs/gears/b1.png)";
	mcimg2.style.backgroundImage = "url(imgs/gears/b2.png)";
	mcimg3.style.backgroundImage = "url(imgs/gears/b3.png)";
});

document.getElementById("bg3").addEventListener("click", function(){
	main.style.display = "block";
	mcTitle.innerHTML = "Leg Gear";
	mcimg1.style.backgroundImage = "url(imgs/gears/l1.png)";
	mcimg2.style.backgroundImage = "url(imgs/gears/l2.png)";
	mcimg3.style.backgroundImage = "url(imgs/gears/l3.png)";
});

document.getElementById("bg4").addEventListener("click", function(){
	main.style.display = "block";
	mcTitle.innerHTML = "Feet Gear";
	mcimg1.style.backgroundImage = "url(imgs/gears/f1.png)";
	mcimg2.style.backgroundImage = "url(imgs/gears/f2.png)";
	mcimg3.style.backgroundImage = "url(imgs/gears/f3.png)";
});
