

$(document).ready(function() {
    $(".button").click(function(event) {


        $(".text").text("YOU'RE TOO WEAK!");
        console.log("pressed");


        $(this).slideUp(300).delay(3000).fadeIn(400);

  // place this within dom ready function
  function reset() {     
    $(".text").text("YOU MUST CRAFT SOME MAGIC TO PASS, PEASANT!");
    console.log("reset function!");
    $(".button").text("CRAFT AGAIN!");
 }

 // use setTimeout() to execute
 setTimeout(reset, 3000)
    });


});