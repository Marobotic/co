$(document).ready(function() {
    $(".button").click(function(event) {
        $(".text").text("YOU'RE TOO WEAK!");
        $(this).slideUp(300).delay(3000).fadeIn(400);
        console.log("pressed");

        function reset() {
            $(".text").text("YOU MUST CRAFT SOME MAGIC TO PASS, PEASANT!");
            $(".button").text("CRAFT AGAIN!");
            console.log("reset function!");
        }
        setTimeout(reset, 3000)
    });


});