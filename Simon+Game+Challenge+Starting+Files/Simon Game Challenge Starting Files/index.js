var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0
var started = false

$(document).keypress(function(){
    if(!started){
    nextSequence()
    $("H1").text("level  " + level);
    started = true;
    // level++
    }
})

$(".btn").click(function(){
    // console.log(this);
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if (userClickedPattern.length === gamePattern.length){
        console.log(userClickedPattern);console.log(gamePattern);
        setTimeout(function(){
            nextSequence(),1000});
        }
    }else{
        console.log("wrong");
        $("body").addClass('game-over');
        setTimeout(function(){
            $("body").removeClass('game-over')
        }, 200 );
        $("H1").text("Game Over, Press Any Key to Restart");
        playSound("wrong")
        startOver();
        // started = false;
        // gamePattern = []
    };
};

function nextSequence(){

    userClickedPattern  = []
    level++ ; 
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    // console.log(randomNumber);

    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    // audio.play();
}

function playSound(name){
    var audio = new Audio('sounds/'+ name + '.mp3');
    audio.play();
};

function animatePress(currentColour) {
    $('#'+currentColour).addClass('pressed');
    setTimeout(function(){
        $("#" + currentColour).removeClass('pressed')
    }, 100 );
}

function startOver(){
    level = 0;
    started = false; 
    gamePattern = [];
}