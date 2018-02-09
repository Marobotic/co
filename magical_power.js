$(document).ready(function() {
    $("#PUNCHES").hide();
    $("#home").hide();
    $("#games").hide();
    $("#CRAFT").hide().delay(500).fadeIn(400);
    $("#CRAFT").click(function(event) {
        $(".text").text("YOU'RE TOO WEAK!");
        $(this).slideUp(300);
        $('#PUNCHES').slideUp(300)
        console.log("pressed");

        function reset() {

            $(".text").text("YOU MUST CRAFT SOME MAGIC TO PASS, PEASANT!");
            $("#CRAFT").text("CRAFT AGAIN!");
            $('#CRAFT').fadeIn(400);
            $("#PUNCHES").delay(1000).fadeIn(400);
            console.log("reset function!");
        }
        setTimeout(reset, 3000)
    });


});


$(document).ready(function() {
    $("#PUNCHES").click(function(event) {
        $(this).slideUp(300);
        $('#CRAFT').slideUp(300)
        $(".text").text("YOU HAVE SHOWN TRUE STRENGTH!");
        // $('.text').delay(1500).fadeOut(1000).delay(1500).fadeIn(1000)

        function Menu() {
            $(".text").fadeOut(500);
            $('#home').fadeIn(300)
            $('#games').fadeIn(300)
        }
        setTimeout(Menu, 3000);

    });


});

// $(document).ready(function() {
//     $(".birthday").click(function(event) {
//         console.log("pressed");
//         window.location.href = "exclusives/exclusives.html"

//     });


// });

// $(document).ready(function() {
//     $(".MATHY").click(function(event) {
//         console.log("OOO");

//     });


// });


// $(document).ready(function() {
//     $(".ANAIS").click(function(event) {
//         console.log("Anais!");
//         window.location.href = "birthday/Anais/index.html"

//     });


// });