    $(document).ready(function() {
        $(".Skillscontent").hide();
        $(".main-content").hide();
        $(".currentprojects").show();
        $("#back_button").hide();
        $(".android").hide();
        $(".web").hide();

    });

    $(document).ready(function() {
        $("#Discord").click(function(event) {
            $(".main-content").show();
            $(".Skillscontent").hide();
            $(".currentprojects").hide();

        });


    });

    $(document).ready(function() {
        $("#Skills").click(function(event) {
            $(".Skillscontent").show();
            $(".main-content").hide();
            $(".currentprojects").hide();

        });


    });


    $(document).ready(function() {
        $("#Projects").click(function(event) {
            $(".main-content").hide();
            $(".Skillscontent").hide();
            $(".currentprojects").show();
            $("#back_button").hide();
            $("#Platform").text('Choose your Platform');
            $(".platform").show();
            $(".android").hide();
            $(".web").hide();

        });


    });

    $(document).ready(function() {
        $(".button_Web").click(function(event) {
            $(".platform").hide();
            $("#back_button").show();
            $(".android").hide();
            $(".web").show();

        });


    });

    $(document).ready(function() {
        $(".button_Android").click(function(event) {
            $(".platform").hide();
            $("#back_button").show();
            $(".android").show();
            $(".web").hide();

        });


    });

    $(document).ready(function() {
        $(".w_TicTacToe").click(function(event) {
            $("#Platform").text('Coming soon');
            $("#back_button").show();

        });


    });


    $(document).ready(function() {
        $(".w_Hangman").click(function(event) {
            $("#Platform").text('Coming soon');
            $("#back_button").show();

        });


    });


    $(document).ready(function() {
        $(".Marobotic").click(function(event) {
            $("#Platform").text("You're already here mister");


        });


    });

    $(document).ready(function() {
        $("#back_button").click(function(event) {
            $("#Platform").text('Choose your Platform');
            $(".platform").show();
            $("#back_button").hide();
            $(".android").hide();
            $(".web").hide();

        });


    });



    $(document).ready(function() {
        $(".a_Spectrum").click(function(event) {

            $('a[href^="https://google.com"]').attr('target', '_blank')
        });


    });


    $(document).ready(function() {
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
    });

    $(document).ready(function() {
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
    });

    $(document).ready(function() {
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
    });