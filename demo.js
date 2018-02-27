var prev = document.getElementById("prev") 
var next = document.getElementById("next")

var img1 = document.getElementById("img1")
var img2 = document.getElementById("img2")
var img3 = document.getElementById("img3")
var img4 = document.getElementById("img4")

var userinput = document.getElementById("userinput")

var img1count = 1
var img2count = 1
var img3count = 1
var img4count = 1

prev.addEventListener("click", function(){
	if(choice1.checked){
		if(img1count == 1){
			img1.src = "imgs/gears/h3.png";
			img1count = 3
		} else if(img1count == 2){
			img1.src = "imgs/gears/h1.png";
			img1count = 1
		} else if(img1count == 3){
			img1.src = "imgs/gears/h2.png";
			img1count = 2
		}
	} else if(choice2.checked){
		if(img2count == 1){
			img2.src = "imgs/gears/b3.png";
			img2count = 3
		} else if(img2count == 2){
			img2.src = "imgs/gears/b1.png";
			img2count = 1
		} else if(img2count == 3){
			img2.src = "imgs/gears/b2.png";
			img2count = 2
		}
	} else if(choice3.checked){
		if(img3count == 1){
			img3.src = "imgs/gears/l3.png";
			img3count = 3
		} else if(img3count == 2){
			img3.src = "imgs/gears/l1.png";
			img3count = 1
		} else if(img3count == 3){
			img3.src = "imgs/gears/l2.png";
			img3count = 2
		}		
	} else if(choice4.checked){
		if(img4count == 1){
			img4.src = "imgs/gears/f3.png";
			img4count = 3
		} else if(img4count == 2){
			img4.src = "imgs/gears/f1.png";
			img4count = 1
		} else if(img4count == 3){
			img4.src = "imgs/gears/f2.png";
			img4count = 2
		}		
	} else {
		alert("Choose an option");
	}
})

next.addEventListener("click", function(){
	if(choice1.checked){
		if(img1count == 1){
			img1.src = "imgs/gears/h2.png";
			img1count = 2
		} else if(img1count == 2){
			img1.src = "imgs/gears/h3.png";
			img1count = 3
		} else if(img1count == 3){
			img1.src = "imgs/gears/h1.png";
			img1count = 1
		}
	} else if(choice2.checked){
		if(img2count == 1){
			img2.src = "imgs/gears/b2.png";
			img2count = 2
		} else if(img2count == 2){
			img2.src = "imgs/gears/b3.png";
			img2count = 3
		} else if(img2count == 3){
			img2.src = "imgs/gears/b1.png";
			img2count = 1
		}
	} else if(choice3.checked){
		if(img3count == 1){
			img3.src = "imgs/gears/l2.png";
			img3count = 2
		} else if(img3count == 2){
			img3.src = "imgs/gears/l3.png";
			img3count = 3
		} else if(img3count == 3){
			img3.src = "imgs/gears/l1.png";
			img3count = 1
		}		
	} else if(choice4.checked){
		if(img4count == 1){
			img4.src = "imgs/gears/f2.png";
			img4count = 2
		} else if(img4count == 2){
			img4.src = "imgs/gears/f3.png";
			img4count = 3
		} else if(img4count == 3){
			img4.src = "imgs/gears/f1.png";
			img4count = 1
		}		
	} else {
		alert("Choose an option");
	}
})

userinput.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		if(userinput.value == 'combo1'){
			img1.src = "imgs/gears/h1.png";
			img2.src = "imgs/gears/b1.png";
			img3.src = "imgs/gears/l1.png";
			img4.src = "imgs/gears/f1.png";
			
			img1count = 1
			img2count = 1
			img3count = 1
			img4count = 1

		} else if(userinput.value == 'combo2'){
			img1.src = "imgs/gears/h2.png";
			img2.src = "imgs/gears/b2.png";
			img3.src = "imgs/gears/l2.png";
			img4.src = "imgs/gears/f2.png";

			img1count = 2
			img2count = 2
			img3count = 2
			img4count = 2

		} else if(userinput.value == 'combo3'){
			img1.src = "imgs/gears/h3.png";
			img2.src = "imgs/gears/b3.png";
			img3.src = "imgs/gears/l3.png";
			img4.src = "imgs/gears/f3.png";

			img1count = 3
			img2count = 3
			img3count = 3
			img4count = 3
			
		} else if(userinput.value == 'random'){
			img1count = Math.floor((Math.random() * 3) + 1)
			img2count = Math.floor((Math.random() * 3) + 1)
			img3count = Math.floor((Math.random() * 3) + 1)
			img4count = Math.floor((Math.random() * 3) + 1)

			img1.src = "imgs/gears/h"+img1count+".png"
			img2.src = "imgs/gears/b"+img2count+".png"
			img3.src = "imgs/gears/l"+img3count+".png"
			img4.src = "imgs/gears/f"+img4count+".png"
		}
	}
})