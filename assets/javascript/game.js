$(document).ready(function() {

var targetNumber = Math.floor((Math.random() * 102) +19);

//var numberOptions = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var numLosses = 0;

var numWins = 0;

var blueCrystalVal = Math.floor ((Math.random() * 12) + 1);
var orangeCrystalVal = Math.floor ((Math.random() * 12) + 1);
var greenCrystalVal = Math.floor ((Math.random() * 12) + 1);
var redCrystalVal = Math.floor ((Math.random() * 12) + 1);

var counter = 0;

//var imageCrystal = $("<img>");

//imageCrystal.addClass("crystal-image");

//imageCrystal.attr(src= );

//imageCrystal.attr("data-crystalValue", numberOptions[i]);

//$("#crystals").append(imageCrystal);

//function startGame () {
//	targetNumber = numberOptions[Math.floor(Math.random() * numberOptions.length)];
//}


//$(".crystal-image").on("click", function()) {

//	var crystalValue = ($(this).attr("data-crystalValue"));
//	crystalValue = parseInt (crystalValue);

$("#winNumber").html(targetNumber);

var blueCrystalVal = Math.floor ((Math.random() * 12) + 1);
var orangeCrystalVal = Math.floor ((Math.random() * 12) + 1);
var greenCrystalVal = Math.floor ((Math.random() * 12) + 1);
var redCrystalVal = Math.floor ((Math.random() * 12) + 1);
total = 0;
$("#Score").html(counter);


function startGame () {
	var targetNumber = Math.floor((Math.random() * 102) +19);

$("#winNumber").html(targetNumber);

var blueCrystalVal = Math.floor ((Math.random() * 12) + 1);
var orangeCrystalVal = Math.floor ((Math.random() * 12) + 1);
var greenCrystalVal = Math.floor ((Math.random() * 12) + 1);
var redCrystalVal = Math.floor ((Math.random() * 12) + 1);
total = 0;
$("#Score").html(counter);

};

$("#blueCrystal").on("click", function() {
	$("#blueCrystal").att("value", blueCrystalVal);
	total += blueCrystalVal;
    $("#Score").html(total);
}

$("#orangeCrystal").on("click", function() {
	$("#orangeCrystal").att("value", orangeCrystalVal);
	total += orangeCrystalVal;
    $("#Score").html(total);
}

$("#greenCrystal").on("click", function() {
	$("#greenCrystal").att("value", greenCrystalVal);
	total += greenCrystalVal;
    $("#Score").html(total);
}

$("#redCrystal").on("click", function() {
	$("#redCrystal").att("value", redCrystalVal);
	total += redCrystalVal;
    $("#Score").html(total);
}

if (counter < targetNumber) {
	$("#Score").html(counter);
	console.log(counter);
}

else if (counter > targetNumber) {
	$("#Score").html(counter);
	alert("You Lose");
	numLosses++;
	$("#numLosses").html(Losses);
	startGame();
}

else {
	$("#Score").html(counter);
	alert("You Win");
	numWins++;
	$("#numWins").html(Wins);
	startGame();
}

});
