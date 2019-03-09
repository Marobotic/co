$(document).ready(function() {

    var Phrases = ["Rainbows!", "More rainbows!", "Inserting shady Russian code...", "Do you know da wae though?", "But can you do this?", "Come on guys, it's only $399!", "Spoiling Infinity wars...", "And the people whom died in infinity Wars are...", "SPIDERMAN IN SPACE? how cool is that!", "Initiating teamfights", "Report Teemo pls", "Please save Mercy T_T", "Puting pineapple on pizza"]
    var top_text = Math.floor((Math.random() * 13));
    console.log(top_text);
    document.getElementById("top_text").innerHTML = Phrases[top_text];


    $(".notification_text").hide();

    $("#Discord").click(function(event) {


    });


    $(".Echoes").click(function() {
        var url = "https://www.aioneotp.com/";
        window.open(url, '_blank');

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

    var clipboard2 = new ClipboardJS('#email', {
        text: function() {
            return 'moakamusketeer@gmail.com';
        }
    });
    var clipboard = new ClipboardJS('#username', {
        text: function() {
            return 'Maro#0001';
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

    clipboard2.on('success', function(e) {
        console.log(e);
        $(".notification_text").stop().slideDown().text('Copied  to clipboard').delay(2000).slideUp();

    });

    clipboard2.on('error', function(e) {
        console.log(e);
        $(".notification_text").stop().slideDown().text('Something is not right...').delay(2000).slideUp();

    });
});