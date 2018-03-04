var dispDiv = document.getElementById("display"),
	st1 = document.getElementById("st1"),
	st2 = document.getElementById("st2"),
	imgSrc = null,
	imgH = null,
	stickerHeight = document.getElementById("stickerHeight"),
	stInp = document.getElementById("stickerUrl"),
	stC = document.getElementById("cursor");

document.getElementById("bgcolor").addEventListener("change", function(){
	dispDiv.style.backgroundColor = this.value;
});

st1.addEventListener("click", function(){
	changeImg(this);
});

st2.addEventListener("click", function(){
	changeImg(this);
});

dispDiv.addEventListener("click", function(ev){
	var newImg = document.createElement("img");
	newImg.src = imgSrc;
	newImg.className = "displayStickers";
	dispDiv.appendChild(newImg);
	newImg.style.height = imgH+"px";
	newImg.style.left = ev.pageX+"px";
	newImg.style.top = ev.pageY+"px";
});

stInp.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		var newSticker = document.createElement("img");
		newSticker.src = stInp.value;
		newSticker.className = "stickers";
		document.getElementById("stickers").appendChild(newSticker);
		stInp.value = "";
		newSticker.addEventListener("click", function(){
			changeImg(this);
		});
	}
});

stickerHeight.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		if(stickerHeight.value > 0){
			imgH = stickerHeight.value;
		}
	}
});

dispDiv.addEventListener("mousemove", function(ev){
	stC.style.top = ev.pageY+"px";
	stC.style.left = ev.pageX+"px";
});

function changeImg(el){
	imgSrc = el.src;
	stC.src = imgSrc;
};