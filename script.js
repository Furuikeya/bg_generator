var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("random");

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ " , " 
	+ color2.value 
	+ ")";
	console.log(color1.value);
	console.log(color2.value);
	css.textContent = "background: " + body.style.background + ";";
}

function goGo() {
	return Math.floor(Math.random() * 256) + 1; // returns a random integer from 1 to 256	
}

function randomGradient() {
	body.style.background =  "linear-gradient(to right, " + rgbToHex() + ", " + rgbToHex() + ")";
	css.textContent = "background: " + body.style.background + ";";
	random.style.background = rgbToHex();
	random.style.borderColor = rgbToHex();
}


var rgbToHex = function() {
  r = goGo().toString(16);
  g = goGo().toString(16);
  b = goGo().toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

css.textContent = "background: linear-gradient(to right, rgb(184, 184, 184), rgb(20, 20, 20));";

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomGradient);
