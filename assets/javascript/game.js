//PSEUDOCODE
//=================================================
//randomize number for Target Sum between 19 and 120
//assign crystals a value between 1 and 12
//on click, register the value of the gem clicked
//add value of gym to 'your sum'
//if your sum equals target sum, user wins
//win++
//if your sum > target sum, user loses
//loss++
//reset game



//GLOBAL VARIABLES
//=================================================


//sums
var userSum = 0;
var targetSum = 0; 


//values of the crystals
//object is gem with value property
var gem = {
    gem1:
    {
        name: "Gem1",
        value: 0
    },
    gem2:
    {
        name: "Gem2",
        value: 0
    },
    gem3:
    {
        name: "Gem3",
        value: 0
    },
    gem4:
    {
        name: "Gem4",
        value: 0
    }
}

//wins and loss counter
var winCount = 0;
var lossCount = 0;


//FUNCTIONS
//=================================================

var StartGame = function() {
    //pick random targetSum number 19-120
    targetSum = Math.floor(Math.random() * 120 +1 + 19)
    //testing
    console.log("targetSum: " + targetSum)


    //assign random values to crystals 1-12
    gem1 = Math.floor(Math.random() * 12) + 1;
    gem2 = Math.floor(Math.random() * 12) + 1;
    gem3 = Math.floor(Math.random() * 12) + 1;
    gem4 = Math.floor(Math.random() * 12) + 1;
    //testing
    console.log("gem1: " + gem1)
    console.log("gem2: " + gem2)
    console.log("gem3: " + gem3)
    console.log("gem4: " + gem4)

    //reset userSum to 0
    var userSum = 0;


    //log to HTML
    $( "#target-sum-text" ).html(targetSum);

    console.log(targetSum)

}
//CALL FUNCTIONS
//=================================================

$("#gem1").click(function() {
    //testing
    //alert("gem1")
});

$("#gem2").click(function() {
    //testing
    //alert("gem2")
});

$("#gem3").click(function() {
    //testing
    //alert("gem3")
});

$("#gem4").click(function() {
    //testing
    //alert("gem4")
});

StartGame();

