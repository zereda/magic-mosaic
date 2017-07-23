function createMagicBox(){
var box = document.createElement("div");
box.className = "magicbox";
document.body.appendChild(box);

}
for (var i = 0; i<6000; i+=1){
createMagicBox();
}


var magicBoxes = document.querySelectorAll(".magicbox");


function doMagic(event){
	var box = event.target;
	var red = Math.floor(Math.random()* 255);
	var green = Math.floor(Math.random()* 255);
	var blue = Math.floor(Math.random()* 255);
	box.style.backgroundColor = "rgb(" +[red,green,blue].join(", ")+")";


}
for (var i = 0 ; i < magicBoxes.length; i += 1){
magicBoxes[i].addEventListener("mouseenter", doMagic);

}

