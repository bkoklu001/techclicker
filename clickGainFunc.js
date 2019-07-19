var cc = 0
var ccClickValue = 1

document.getElementById("ccCounter").innerHTML = "Computer Chips = " + 0;

function ccClickFunc(){
	cc = cc + ccClickValue;
	document.getElementById("ccCounter").innerHTML = "Computer Chips = " + cc;
}