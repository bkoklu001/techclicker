var ccPrice = 2
var ccSellAmount

document.getElementById("moneyValueText").innerHTML = "$" + 0;

function ccSell(){
	ccSellAmount = cc * ccPrice
	document.getElementById("moneyValueText").innerHTML = "$" + ccSellAmount;
	document.getElementById("ccCounter").innerHTML = "Computer Chips = " + 0;
}