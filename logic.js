var currentScore = 0;
var targetScore = 0;
var wins = 0;
var losses = 0;

var crystal = {
    blue: {
        name: "Blue",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    },
    red: {
        name: "Red",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    }
};



var getRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};


var gameStart = function () {

    // Reset the Current Score
    currentScore = 0;

    // Establish a target score
    targetScore = getRandom(19, 120);

    crystal.blue.value = getRandom(1, 12);
    crystal.red.value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);


    $("#current-score").text(currentScore);
    $("#target-score").text(targetScore);
}

var winorloss = function () {
    if (currentScore > targetScore) {
        alert("Sorry, You got Swerved!");
        console.log("You got swerved!");

        losses++;

        $("#count-loss").text(lossCount);

        gameStart();

    } else if (currentScore === targetScore) {
        alert("YOU DA MAN YOU WON");
        console.log("YOU DA MAN YOU WON");

        // Increase win counter by 1 

        wins++;
    
        $("#count-win").text(wins);

        gameStart();
    }
};


var addValues = function (clickedCrystal) {
    // Change currentScore
    currentScore += clickedCrystal.value;
    // Change the HTML to reflect changes in currentScore
    $("#your-score").text(currentScore);
    // Call the checkWin Function
    checkWin();
    // Testing Console
    console.log("Your Score: " + currentScore);
};


// starts the game 

gameStart();
$("#blue").click(function () {
    addValues(crystal.blue);
});
$("#red").click(function () {
    addValues(crystal.red);
});
$("#green").click(function () {
    addValues(crystal.green);
});
$("#yellow").click(function () {
    addValues(crystal.yellow);
});