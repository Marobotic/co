$(document).ready(function() {

    var Phrases = ["Rainbows!", "More rainbows!", "Inserting shady Russian code...", "Do you know da wae though?", "But can you do this?", "Come on guys, it's only $399!", "Spoiling Infinity wars...", "And the people whom died in infinity Wars are...", "SPIDERMAN IN SPACE? how cool is that!", "Initiating teamfights", "Report Teemo pls", "Please save Mercy T_T", "Puting pineapple on pizza"]
    var top_text = Math.floor((Math.random() * 13));
    console.log(top_text);
    document.getElementById("top_text").innerHTML = Phrases[top_text];
    
    $(".Skillscontent").hide();
    $(".main-content").hide();
    $(".currentprojects").show();
    $("#back_button").hide();
    $(".android").hide();
    $(".web").hide();
    $(".notification_text").hide();

    $("#Discord").click(function(event) {
        $(".main-content").show();
        $(".Skillscontent").hide();
        $(".currentprojects").hide();

    });

    $("#Skills").click(function(event) {
        $(".Skillscontent").show();
        $(".main-content").hide();
        $(".currentprojects").hide();
    });

    $("#Projects").click(function(event) {
        $(".main-content").hide();
        $(".Skillscontent").hide();
        $(".currentprojects").show();
        $("#back_button").hide();
        $("#Platform").text('Choose a platform');
        $(".platform").show();
        $(".android").hide();
        $(".web").hide();
    });

    $(".button_Web").click(function(event) {
        $(".platform").hide();
        $("#back_button").show();
        $(".android").hide();
        $(".web").show();
    });

    $(".button_Android").click(function(event) {
        $(".platform").hide();
        $("#back_button").show();
        $(".android").show();
        $(".web").hide();
    });

    $(".w_TicTacToe").click(function(event) {
        $(".notification_text").stop().slideDown().text('Coming soon!').delay(2000).slideUp();
        $("#back_button").show();

    });

    $(".w_Hangman").click(function(event) {
        $(".notification_text").stop().slideDown().text('Coming soon!').delay(2000).slideUp();
        $("#back_button").show();
    });

    $(".Marobotic").click(function(event) {
        $(".notification_text").stop().slideDown().text('You are already here mister!').delay(2000).slideUp();
    });

    $("#back_button").click(function(event) {
        $("#Platform").text('Choose a platform');
        $(".platform").show();
        $("#back_button").hide();
        $(".android").hide();
        $(".web").hide();
    });

    $(".a_Spectrum").click(function(event) {

        $('a[href^="https://google.com"]').attr('target', '_blank')
    });

    $('.a_Spectrum').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open("https://play.google.com/store/apps/details?id=com.robotics.spectrum");
            });
        }
    });

    $('.a_TicTacToe').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open("https://play.google.com/store/apps/details?id=roboticsgt0.tictactoe");
            });
        }
    });

    $('.a_Hangman').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open("https://play.google.com/store/apps/details?id=roboticsgt0.hangman");
            });
        }
    });

    var clipboard = new ClipboardJS('#username', {
        text: function() {
            return 'Maro#1980';
        }
    });

    clipboard.on('success', function(e) {
        console.log(e);
        $(".notification_text").stop().slideDown().text('Copied  to clipboard').delay(2000).slideUp();

    });

    clipboard.on('error', function(e) {
        console.log(e);
        $(".notification_text").stop().slideDown().text('Something is not right...').delay(2000).slideUp();

    });
});