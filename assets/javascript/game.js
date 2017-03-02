$(document).ready(function() {

var winNumber = 0;

var targetNumber = targetNumberGen();

var numWins = 0;
var numLosses = 0;
var crystals;

function randomNumCrystals() {

  return  {
    blue: {
      points: Math.floor ((Math.random() * 12) + 1),
      imageUrl: "assets/images/blue_crystal.jpg"
    },
    orange: {
      points: Math.floor ((Math.random() * 12) + 1),
      imageUrl: "assets/images/orange_crystal.png" 
    },
    green: {
      points: Math.floor ((Math.random() * 12) + 1),
      imageUrl: "assets/images/green_crystal.png"
    }
    red: {
      points: Math.floor ((Math.random() * 12) + 1),
      imageUrl: "assets/images/red_crystal.png"
    }
   };
}

function targetNumberGen() {
	return Math.floor((Math.random() * 102) + 19);
}

function setGame() {
	winNumber = 0;
	crystals = randomNumCrystals();
	targetNumber = targetNumberGen();
	$("#random").text(targetNumber);
}

function updateDom(didUserWin) {
	$("win-loss").empty();

	if (didUserWin === true) {
		$("#win-loss").append($("<p>").text("You won!!"));
		setGame();
		renderWinNumber();
	}
}

 else if (didUserWin === false) {
      $("#win-loss").append($("<p>").text("You lost!!"));
      setGame();
      renderMatchingNumber();
    }

    var wSpan = $("<span>").text(wins);
    var lSpan = $("<span>").text(losses);

    var pWins = $("<p>").text("Wins: ");
    var pLosses = $("<p>").text("Losses: ");

    pWins.append(wSpan);
    pLosses.append(lSpan);

    $("#win-loss").append(pWins);
    $("#win-loss").append(pLosses);
  }

  function renderCrystals() {
    for (var key in crystals) {
      var crystalDiv = $("<div class='crystals-button' data-name='" + key + "'>");
      var crystalImg = $("<img alt='image' class='crystal-img'>").attr("src", crystals[key].imageUrl);
      crystalDiv.append(crystalImg);
      $("#crystal-area").append(crystalDiv);
    }
  }

  function updateMatchingNumber(crystal) {
    yourMatchingNumber += crystals[crystal.attr("data-name")].points;
  }

  function renderMatchingNumber() {
    var scoreNumDiv = $("<div id='score-number'>").text(yourMatchingNumber);
    $("#score-area").html();
    $("#score-area").html(scoreNumDiv);
  }

  setGame();
  updateDom();
  renderCrystals();
  renderMatchingNumber();

  $(".crystals-button").on("click", function(event) {
    // Update our "current guess" number and re-render it.
    updateMatchingNumber($(this));
    renderMatchingNumber();

    // Check to see if we have won or lost.
    // If our current guess number equals the target number..
    if (yourMatchingNumber === randomNum) {
      // Increment wins, restart the game, and update the page.
      wins++;
      setGame();
      updateDom(true);
    }
    // If our guess number exceeded our target number...
    else if (yourMatchingNumber > randomNum) {
      // Increment losses, restart the game, and update the page.
      losses++;
      setGame();
      updateDom(false);
    }
  });

});












//$("#winNumber").html(targetNumber);

//var blueCrystalVal = Math.floor ((Math.random() * 12) + 1);
//var orangeCrystalVal = Math.floor ((Math.random() * 12) + 1);
//var greenCrystalVal = Math.floor ((Math.random() * 12) + 1);
//var redCrystalVal = Math.floor ((Math.random() * 12) + 1);
//total = 0;
//$("#Score").html(counter);


//function startGame () {
//	var targetNumber = Math.floor((Math.random() * 102) +19);

//$("#winNumber").html(targetNumber);

//var blueCrystalVal = Math.floor ((Math.random() * 12) + 1);
//var orangeCrystalVal = Math.floor ((Math.random() * 12) + 1);
//var greenCrystalVal = Math.floor ((Math.random() * 12) + 1);
//var redCrystalVal = Math.floor ((Math.random() * 12) + 1);
//total = 0;
//$("#Score").html(counter);

//};

//$("#blueCrystal").on("click", function() {
//	$("#blueCrystal").att("value", blueCrystalVal);
//	total += blueCrystalVal;
//    $("#Score").html(total);
//}

//$("#orangeCrystal").on("click", function() {
//	$("#orangeCrystal").att("value", orangeCrystalVal);
//	total += orangeCrystalVal;
//    $("#Score").html(total);
//}

//$("#greenCrystal").on("click", function() {
//	$("#greenCrystal").att("value", greenCrystalVal);
//	total += greenCrystalVal;
//    $("#Score").html(total);
//}

//$("#redCrystal").on("click", function() {
//	$("#redCrystal").att("value", redCrystalVal);
//	total += redCrystalVal;
//    $("#Score").html(total);
//}


//if (counter < targetNumber) {
//	$("#Score").html(counter);
//	console.log(counter);
//}

//else if (counter > targetNumber) {
//	$("#Score").html(counter);
//	alert("You Lose");
//	numLosses++;
//	$("#numLosses").html(Losses);
//	startGame();
//}

//else {
//	$("#Score").html(counter);
//	alert("You Win");
//	numWins++;
//	$("#numWins").html(Wins);
//	startGame();
//}

//});
