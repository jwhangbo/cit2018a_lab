var colors = document.getElementById("colors"),
	preview = document.getElementById("preview"),
	number = document.getElementById("number"),
	range = document.getElementById("range")
	hairRange = document.getElementById("hairRange"),
	eyesRange = document.getElementById("eyesRange"),
	noseRange = document.getElementById("noseRange"),
	mouthRange = document.getElementById("mouthRange"),
	hair = document.getElementById("hair"),
	eyes = document.getElementById("eyes"),
	nose = document.getElementById("nose"),
	mouth = document.getElementById("mouth"),
	display = document.getElementById("display"),
	add = document.getElementById("add"),
	random = document.getElementById("random"),
	autoRandomCreate = document.getElementById("autoRandomCreate"),
	stopAutoCreate = document.getElementById("stopAutoCreate"),
	timer = null;

// FUNCTIONS START

function createFace(){
	framediv = document.createElement("div")
	ndiv = document.createElement("div")
	nhair = document.createElement("img")
	neyes = document.createElement("img")
	nnose = document.createElement("img")
	nmouth = document.createElement("img")

	// Wanted to give the lg 2 columns and split it into 4 columns each to make it 8, but I don't know how to implement it
	framediv.className = "col-xl-1 col-lg-2 col-md-2 col-sm-3"
	ndiv.className = "addDiv"
	nhair.className = "items"
	neyes.className = "items"
	nnose.className = "items"
	nmouth.className = "items"

	ndiv.style.cssText = preview.style.cssText

	nhair.src = hair.src
	nhair.style.cssText = hair.style.cssText

	neyes.src = eyes.src
	neyes.style.cssText = eyes.style.cssText

	nnose.src = nose.src
	nnose.style.cssText = nose.style.cssText

	nmouth.src = mouth.src
	nmouth.style.cssText = mouth.style.cssText

	ndiv.appendChild(nhair)
	ndiv.appendChild(neyes)
	ndiv.appendChild(nnose)
	ndiv.appendChild(nmouth)
	framediv.appendChild(ndiv)
	display.appendChild(framediv)
}

function randomFace(){
	rhair = Math.round(Math.random()*2)+1
	reyes = Math.round(Math.random()*2)+1
	rnose = Math.round(Math.random()*2)+1
	rmouth = Math.round(Math.random()*2)+1

	rhairsize = Math.round(Math.random()*69)+1
	reyessize = Math.round(Math.random()*39)+1
	rnosesize = Math.round(Math.random()*29)+1
	rmouthsize = Math.round(Math.random()*34)+1
	
	rred = Math.round(Math.random()*255)
	rgreen = Math.round(Math.random()*255)
	rblue = Math.round(Math.random()*255)

	hair.src = "img/hair"+rhair+".png"
	eyes.src = "img/eyes"+reyes+".png"
	nose.src = "img/nose"+rnose+".png"
	mouth.src = "img/mouth"+rmouth+".png"

	hair.style.width = rhairsize+"%"
	eyes.style.width = reyessize+"%"
	nose.style.width = rnosesize+"%"
	mouth.style.width = rmouthsize+"%"

	hairRange.value = rhairsize
	eyesRange.value = reyessize
	noseRange.value = rnosesize
	mouthRange.value = rmouthsize

	preview.style.backgroundColor = "rgb("+rred+","+rgreen+","+rblue+")"
}

function changeType(type){
	hairRange.type = type
	eyesRange.type = type
	noseRange.type = type
	mouthRange.type = type
}

// FUNCTIONS END

colors.addEventListener("click", function(){
	preview.style.backgroundColor = colors.value;
})

number.addEventListener("click", function(){
	changeType("number")
})

range.addEventListener("click", function(){
	changeType("range")
})

hairRange.addEventListener("change", function(){
	hair.style.width = hairRange.value+"%"
})

eyesRange.addEventListener("change", function(){
	eyes.style.width = eyesRange.value+"%"
})

noseRange.addEventListener("change", function(){
	nose.style.width = noseRange.value+"%"
})

mouthRange.addEventListener("change", function(){
	mouth.style.width = mouthRange.value+"%"
})

hair.addEventListener("click", function(){
	var image = hair.src
	if(image.indexOf("hair1") != -1){
		hair.src = "img/hair2.png";
	} else if(image.indexOf("hair2") != -1){
		hair.src = "img/hair3.png";
	} else {
		hair.src = "img/hair1.png";
	};
})

eyes.addEventListener("click", function(){
	var image = eyes.src
	if(image.indexOf("eyes1") != -1){
		eyes.src = "img/eyes2.png";
	} else if(image.indexOf("eyes2") != -1){
		eyes.src = "img/eyes3.png";
	} else {
		eyes.src = "img/eyes1.png";
	};
})

nose.addEventListener("click", function(){
	var image = nose.src
	if(image.indexOf("nose1") != -1){
		nose.src = "img/nose2.png";
	} else if(image.indexOf("nose2") != -1){
		nose.src = "img/nose3.png";
	} else {
		nose.src = "img/nose1.png";
	};
})

mouth.addEventListener("click", function(){
	var image = mouth.src
	if(image.indexOf("mouth1") != -1){
		mouth.src = "img/mouth2.png";
	} else if(image.indexOf("mouth2") != -1){
		mouth.src = "img/mouth3.png";
	} else {
		mouth.src = "img/mouth1.png";
	};
})

add.addEventListener("click", function(){
	createFace()
})

random.addEventListener("click", function(){
	randomFace()
})

autoRandomCreate.addEventListener("click", function(){
	timer = setInterval(function(){
		randomFace()
		createFace()
	}, 500)
})

stopAutoCreate.addEventListener("click", function(){
	clearInterval(timer)
	timer = null
})