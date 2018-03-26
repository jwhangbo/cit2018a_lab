var menu = document.getElementById("menu"),
	controls = document.getElementById("controls"),
	backgroundInput = document.getElementById("backgroundInput"),
	titleInput = document.getElementById("titleInput"),
	descriptionInput = document.getElementById("descriptionInput"),
	textColorInput = document.getElementById("textColorInput"),
	background = document.getElementById("background"),
	title = document.getElementById("title"),
	description = document.getElementById("description"),
	display = document.getElementById("display"),
	xVar = 0,
	yVar = 0,
	height = 300;

menu.addEventListener("click", function(){
	expandMenu()
});

backgroundInput.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		changeBG();
	}
});

titleInput.addEventListener("keyup", function(ev){
	changeTitle();
});

descriptionInput.addEventListener("keyup", function(ev){
	changeDescription();
});

textColorInput.addEventListener("change", function(ev){
	changeColor();
});

document.addEventListener("keydown", function(ev){
	moveBG(ev)
});

document.getElementById("createNewElement").addEventListener("click", function(ev){
	var newBackground = document.createElement("div")
	var newTitle = document.createElement("div")
	var newDescription = document.createElement("div")
	newBackground.appendChild(newTitle);
	newBackground.appendChild(newDescription);
	display.appendChild(newBackground);

	newBackground.className = 'background';
	newDescription.className = 'description';
	newTitle.className = 'title';
	
	newBackground.style.cssText = background.style.cssText;
	newDescription.style.cssText = description.style.cssText;
	newDescription.innerHTML = description.innerHTML
	newTitle.style.cssText = title.style.cssText;
	newTitle.innerHTML = title.innerHTML;

})

function expandMenu(){
	controls.style.bottom = "0px";
}

function changeColor(){
	title.style.color = textColorInput.value;
	description.style.color = textColorInput.value;
}

function changeDescription(){
	description.innerHTML = descriptionInput.value;
}

function changeTitle(){
	title.innerHTML = titleInput.value;
}

function changeBG(){
	if(backgroundInput.value == "horse"){
		background.style.backgroundImage = 'url(imgs/bg1.jpg)';
	} else if(backgroundInput.value == "night"){
		background.style.backgroundImage = 'url(imgs/bg2.jpg)';
	} else if(backgroundInput.value == "mountain"){
		background.style.backgroundImage = 'url(imgs/bg3.jpg)';
	} else if(backgroundInput.value.indexOf("epic") != -1){
		background.style.backgroundImage = 'url(imgs/bg4.jpg)';
	} else {
		background.style.backgroundImage = 'url('+backgroundInput.value+')';
	}
}

function moveBG(ev){
	if(ev.keyCode == 37){
		xVar -= 10;
	} else if(ev.keyCode == 38){
		yVar += 10;
	} else if(ev.keyCode == 39){
		xVar += 10;
	} else if(ev.keyCode == 40){
		yVar -= 10;
	} else if(ev.keyCode == 187){
		height += 10;
	} else if(ev.keyCode == 189){
		height -= 10;
	};
	background.style.backgroundPosition = xVar+"px"+" "+yVar+"px";
	background.style.height = height+"px";	
}

