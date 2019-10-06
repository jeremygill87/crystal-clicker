$(document).ready(function(){
    var targetScore = Math.floor(Math.random() * 120 +30);
    console.log(targetScore);
    $("#random-number").text(targetScore);
    
    var redCrystal = Math.floor(Math.random() * 12);
        console.log("redCrystal: " + redCrystal);
        
    var blueCrystal = Math.floor(Math.random() * 12);
        console.log("blueCrystal: " + blueCrystal);

    var greenCrystal = Math.floor(Math.random() * 12);
        console.log("greenCrystal: " + greenCrystal);

    var purpleCrystal = Math.floor(Math.random() * 12);
        console.log("purpleCrystal: " + purpleCrystal);

    var wins = 0;
    var losses = 0;
    var newScore = 0;

        
            

    $("#red-crystal").on("click", function() {
        newScore = newScore + redCrystal;
        console.log("New Score: " + newScore);
        console.log("TargetScore: " + targetScore);
        $("#score-tracker").text(newScore);
        if (newScore === targetScore) {
            alert("A winner is you!");
            wins++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset();
        }
        else if (newScore > targetScore) {
            alert("You're a loser");
            losses++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset ();
        }
    })

    $("#blue-crystal").on("click", function () {
        newScore = newScore + blueCrystal;
        console.log("New Score: " + newScore);
        $("#score-tracker").text(newScore);
        if (newScore === targetScore) {
            alert("A winner is you!");
            wins++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset();
        }
        else if (newScore > targetScore) {
            alert("You're a loser");
            losses++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset ();
        }
    })

    $("#green-crystal").on("click", function () {
        newScore = newScore + greenCrystal;
        console.log("New Score: " + newScore);
        $("#score-tracker").text(newScore);
        if (newScore === targetScore) {
            alert("A winner is you!");
            wins++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset();
        }
        else if (newScore > targetScore) {
            alert("You're a loser");
            losses++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset ();
        }
    })

    $("#purple-crystal").on("click", function () {
        newScore = newScore + purpleCrystal;
        console.log("New Score: " + newScore);
        $("#score-tracker").text(newScore);
        if (newScore === targetScore) {
            alert("A winner is you!");
            wins++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset();
        }
        else if (newScore > targetScore) {
            alert("You're a loser");
            losses++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset ();
        }
    })
    

    function reset() {
        targetScore = Math.floor(Math.random() * 120);
            $("#random-number").text(targetScore);

            newScore = 0;

        redCrystal = Math.floor(Math.random() * 12);

        blueCrystal = Math.floor(Math.random() * 12);

        greenCrystal = Math.floor(Math.random() * 12);

        purpleCrystal = Math.floor(Math.random() * 12);

        if (newScore === targetScore) {
            alert("A winner is you!");
            wins++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset();
        }
        else if (newScore > targetScore) {
            alert("You're a loser");
            losses++;
            $("#win-loss-record").text("Wins: " + wins + " Losses: " + losses);
            reset ();
        }
        }
    })
    
    