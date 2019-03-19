$(document).ready(function() {
    var txt1;

    var Phrases = ["Rainbows!", "More rainbows!", "Inserting shady Russian code...", "Report Teemo pls", "Puting pineapple on pizza", "Subscribing to PewDiePie", "Unsubscribing to T-Series", "Bitch Lasanga!"]
    var top_text = Math.floor((Math.random() * 8));
    document.getElementById("top_text").innerHTML = Phrases[top_text];


    $(".notification_text").hide();
    $(".Echoes").click(function() {
        var url = "https://www.aioneotp.com/";
        window.open(url, '_blank');

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
        $(".notification_div").append(txt1); // Append new elements
        txt1 = "<button class='notification_text' id='notifcation'>Copied Maro#0001 </button>"; // Create text with HTML
        $(".notification_text").delay(3500).remove();

    });

    clipboard.on('error', function(e) {
        console.log(e);
        $(".notification_div").append(txt1); // Append new elements
        txt1 = "<button class='notification_text' id='notifcation'>Copying Failed </button>"; // Create text with HTML
        $(".notification_text").delay(3500).slideUp();

    });

    clipboard2.on('success', function(e) {
        console.log(e);
        $(".notification_div").append(txt1); // Append new elements
        txt1 = "<button class='notification_text' id='notifcation'> Copied moakamusketeer@gmail.com</button>"; // Create text with HTML
        $(".notification_text").delay(3500).slideUp();

    });

    clipboard2.on('error', function(e) {
        console.log(e);
        $(".notification_div").append(txt1); // Append new elements
        txt1 = "<button class='notification_text' id='notifcation'>Copying Failed </button>"; // Create text with HTML
        $(".notification_text").delay(3500).slideUp();

    });
});