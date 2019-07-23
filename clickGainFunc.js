//Click Functions
var cc = 0;
var ccClickValue = 1;

document.getElementById("ccCounter").innerHTML = "Computer Chips = " + 0;

function ccClickFunc(){
	cc = cc + ccClickValue;
	document.getElementById("ccCounter").innerHTML = "Computer Chips = " + cc;
}

var mc = 0;
var mcClickValue = 1;

document.getElementById("mcCounter").innerHTML = "Memory Chips = " + 0;

function mcClickFunc(){
	mc = mc + mcClickValue;
	document.getElementById("mcCounter").innerHTML = "Memory Chips = " + mc;
}

var lc = 0;
var lcClickValue = 1;

document.getElementById("lcCounter").innerHTML = "Logic Chips = " + 0;

function lcClickFunc(){
	lc = lc + lcClickValue;
	document.getElementById("lcCounter").innerHTML = "Logic Chips = " + lc;
}