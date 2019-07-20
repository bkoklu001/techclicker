var moneyCurrent = 0.00;

//Computer Chips

var ccPrice = 0.25;
var ccSellAmount;
var mcPrice = 0.25;
var mcSellAmount;
var lcPrice = 0.30;
var lcSellAmount;

function sellTech(){
	ccSellAmount = cc * ccPrice;
	mcSellAmount = mc * mcPrice;
	lcSellAmount = lc * lcPrice;
	moneyCurrent = moneyCurrent + ccSellAmount + mcSellAmount + lcSellAmount;
	document.getElementById("moneyValueText").innerHTML = "$" + moneyCurrent.toFixed(2);
}

function ccReset(){
	cc = 0;
	document.getElementById("ccCounter").innerHTML = "Computer Chips = " + cc;
}

function mcReset(){
	mc = 0;
	document.getElementById("mcCounter").innerHTML = "Memory Chips = " + mc;
}

function lcReset(){
	lc = 0;
	document.getElementById("lcCounter").innerHTML = "Logic Chips = " + lc;
}