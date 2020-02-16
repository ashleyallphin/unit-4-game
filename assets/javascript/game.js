//PSEUDOCODE
//=================================================
//randomize number for Target Sum between 19 and 120
//assign crystals a value between 1 and 12
//on click, register the value of the gem clicked
//add value of gem to 'your sum'
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
//object is gem with name and value property
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


//sounds
var soundCollect = new Audio ("assets/sounds/gem_collect.mp3");
var soundWin = new Audio ("assets/sounds/gem_win.mp3");
var soundLose = new Audio ("assets/sounds/gem_lose.mp3");

//FUNCTIONS
//=================================================
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min +1)) + min;
}


var StartGame = function() {
    //pick random targetSum number 19-120
    targetSum = Math.floor(Math.random() * 120 + 19);
    //testing
    console.log("targetSum: " + targetSum);

    //reset userSum to 0
    var userSum = 0;

    //log to HTML
    $( "#target-sum-text" ).html(targetSum);

    //pick random numbers for the crystals
    gem.gem1.value = getRandom(1, 12);
    gem.gem2.value = getRandom(1, 12);
    gem.gem3.value = getRandom(1, 12);
    gem.gem4.value = getRandom(1, 12);

    
    //testing
    console.log("gem1: " + gem.gem1.value);
    console.log("gem2: " + gem.gem2.value);
    console.log("gem3: " + gem.gem3.value);
    console.log("gem4: " + gem.gem4.value);

}

//add the clicks together
var addValues = function (gem) {

    userSum = userSum + gem.value;

    //put into HTML
    $( "#your-sum-text" ).html(userSum);

    //call checkWin function
    checkWin()

    //testing
    console.log("userSum= " + userSum)

}

//check if user wins
var checkWin = function() {

    if(userSum > targetSum) {
        
        //alert the user that they lost
        alert ("Sorry!  You lost.");
        
        //play soundLose
        soundLose.play();
        
        //add a loss
        lossCount++;
        console.log(lossCount);

        //add losses to HTML
        $("#losses-text").html(lossCount);
    }
    else if (userSum === targetSum) {
        
        //alert the user that they won
        alert ("Congratulations!  You won.");
        
        //play sound win
        soundWin.play();
        
        //add a win
        winCount++;
        console.log(winCount);


        //add wins to HTML
        $("#wins-text").html(winCount);

    }
}


//CALL FUNCTIONS
//=================================================

//starts the game for the first time
StartGame();

//click functions for the gems

$("#gem1").click(function(){
    //alert("you clicked on: gem1")
    soundCollect.play();
    addValues(gem.gem1)
})

$("#gem2").click(function(){
    //alert("you clicked on: gem2")
    soundCollect.play();
    addValues(gem.gem2)

})

$("#gem3").click(function(){
    //alert("you clicked on: gem3")
    soundCollect.play();
    addValues(gem.gem3)
})

$("#gem4").click(function(){
    //alert("you clicked on: gem4")
    soundCollect.play();
    addValues(gem.gem4)
})

