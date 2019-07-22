var ccClicks = 0;

function ccUnlock(){
	ccClicks++
	if (ccClicks > 49){
		document.getElementById("memoryDiv").style.visibility = "visible";
	}
}

var mcClicks = 0;

function mcUnlock(){
	mcClicks++
	if (mcClicks > 49){
		document.getElementById("logicDiv").style.visibility = "visible";
	}
}