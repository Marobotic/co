$(document).ready(function() {
    $(".notification_text").hide();

    $(".contact_button").click(function(event) {

        document.getElementById('contact_div').scrollIntoView();

    });
    $(".bio_button").click(function(event) {

        document.getElementById('summary').scrollIntoView();
    });

    $(".projects").click(function(event) {

        document.getElementById('projects').scrollIntoView();
    });

    $(".skills").click(function(event) {

        document.getElementById('skills').scrollIntoView();
    });

    $(function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();
            if (scroll >= 97) {
                $(".side_bar").addClass('shrink');

            } else {
                $(".side_bar").removeClass("shrink");
            }
        });
    });

    $(".all").click(function(event) {
        $("#one").fadeIn();
        $("#two").fadeIn();
        $("#three").fadeIn();
        $("#four").fadeIn();
        $("#five").fadeIn();
        $("#six").fadeIn();
        $("#seven").fadeIn();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");

    });

    $(".java").click(function(event) {
        $("#one").fadeIn();
        $("#two").fadeIn();
        $("#three").fadeIn();
        $("#four").fadeIn();
        $("#five").fadeOut();
        $("#six").fadeOut();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");

    });
    $(".XML").click(function(event) {
        $("#one").fadeIn();
        $("#two").fadeIn();
        $("#three").fadeIn();
        $("#four").fadeIn();
        $("#five").fadeOut();
        $("#six").fadeOut();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");

    });
    $(".Photoshop").click(function(event) {
        $("#one").fadeIn();
        $("#two").fadeIn();
        $("#three").fadeIn();
        $("#four").fadeIn();
        $("#five").fadeIn();
        $("#six").fadeOut();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");
    });
    $(".Illustrator").click(function(event) {
        $("#one").fadeIn();
        $("#two").fadeIn();
        $("#three").fadeIn();
        $("#four").fadeIn();
        $("#five").fadeIn();
        $("#six").fadeIn();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");
    });
    $(".HTML").click(function(event) {
        $("#one").fadeOut();
        $("#two").fadeOut();
        $("#three").fadeOut();
        $("#four").fadeIn();
        $("#five").fadeIn();
        $("#six").fadeOut();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");

    });
    $(".JavaScript").click(function(event) {
        $("#one").fadeOut();
        $("#two").fadeOut();
        $("#three").fadeOut();
        $("#four").fadeIn();
        $("#five").fadeIn();
        $("#six").fadeOut();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");
    });
    $(".CSS").click(function(event) {
        $("#one").fadeOut();
        $("#two").fadeOut();
        $("#three").fadeOut();
        $("#four").fadeIn();
        $("#five").fadeIn();
        $("#six").fadeOut();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");

    });
    $(".Drawing").click(function(event) {
        $("#one").fadeOut();
        $("#two").fadeOut();
        $("#three").fadeOut();
        $("#four").fadeOut();
        $("#five").fadeOut();
        $("#six").fadeIn();
        $("#seven").fadeOut();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");

    });
    $(".Photography").click(function(event) {
        $("#one").fadeOut();
        $("#two").fadeOut();
        $("#three").fadeOut();
        $("#four").fadeOut();
        $("#five").fadeOut();
        $("#six").fadeOut();
        $("#seven").fadeIn();
        $(".icon_parent").css("border", "2px solid transparent");
        $(this).css("border", "2px solid rgba(var(--white), 1)");


    });

});




var txt1;

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();

    // pop_bottom_bubble_message("Copied to Clipboard");

    $(".notification_div").append(txt1); // Append new elements
    txt1 = "<button class='notification_text' id='notifcation'>Text copied to clipboard</button>"; // Create text with HTML
    $(".notification_text").delay(3500).slideUp();
}