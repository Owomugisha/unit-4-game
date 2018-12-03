$(document).ready(function () {
    // min and max included
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //setting var to zero

    var score;
    var wins = 0;
    var losses = 0;
    // 1. generate random number 19 and 120
    var randomNumber;
    //create a function that will be called to reset the game 
    function gameStart() {
        score = 0;
        randomNumber = randomIntFromInterval(19, 120);
        $(".randomNumber").text(randomNumber); // display randon number
        //2. each crystal should have a random hidden between 1-12
        //create 4 vars for the each crystal
        var whiteCrystal = randomIntFromInterval(1, 12);
        var greenCrystal = randomIntFromInterval(1, 12);
        var blueCrystal = randomIntFromInterval(1, 12);
        var orangeCrystal = randomIntFromInterval(1, 12);

        //adding attr to each crystal
        $("#diamond1").attr("crystalValue", whiteCrystal);
        $("#green").attr("crystalValue", greenCrystal);
        $("#blue").attr("crystalValue", blueCrystal);
        $("#orange").attr("crystalValue", orangeCrystal);
        $(".score").text(0);
    }

    
    gameStart();
    //create .on click on each crystal or add event listener 
    $(".crystal").click(function () {
        //grabbing crystal value and changing it to a number
        var crystaValue = parseInt($(this).attr("crystalValue"));
        //updating the score value of each clicked crystal
        score = score + crystaValue;
        //displaying the updated score
        $(".score").text(score);
        //if the value of score is equal to randomNumber increment win by 1
        if (score == randomNumber) { //updating the win value 
            wins++;
            $("#wins").text(wins);
            $("#winAndLoss").html('<p>You won ☺</p>'); //adding html unicode to the win
            gameStart();
            //if the value of score is greater than randomNumber increment losses by 1
        } else if (score > randomNumber) { //updating the losses value
            losses++;
            $("#losses").text(losses);
            $("#winAndLoss").html('<p>You lost &#9785;</p>'); //adding html unicode to the losses
            gameStart();
        }
        

    })

});
