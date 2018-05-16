    $(document).ready(function() {
        $(".Skillscontent").hide();
        $(".main-content").show();
          $(".currentprojects").hide();

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

        });


    });