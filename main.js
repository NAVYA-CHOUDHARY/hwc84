// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
console.log("other key")
		Alpkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet key";
		console.log("alphabet key")
		Arrkey();
		document.getElementById("d1").innerHTML="You pressed Arrow key";
		console.log("arrow key")
		numkey();
		document.getElementById("d1").innerHTML="You pressed number key";
console.log("number key")
		spykey();
		document.getElementById("d1").innerHTML="You pressed special key";
console.log("special key")
	}
}
function alphabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();	
}
function specialkey()
{
	img_image="spykey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
