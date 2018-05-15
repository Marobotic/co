    $(document).ready(function() {
        $(".Skillscontent").hide();
        $(".main-content").show();

    });

    $(document).ready(function() {
        $("#Discord").click(function(event) {
            $(".main-content").show();
            $(".Skillscontent").hide();

        });


    });

    $(document).ready(function() {
        $("#Skills").click(function(event) {
            $(".Skillscontent").show();
            $(".main-content").hide();

        });


    });


    $(document).ready(function() {
        $("#Projects").click(function(event) {
            $(".main-content").hide();
            $(".Skillscontent").hide();

        });


    });