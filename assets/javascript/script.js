$(document).ready(function() {

    $(".server_info").show();
    $(".sidebar").hide();

    $(".server_info_title").click(function() {
        $(".sidebar").show();
        $(".server_info").hide();

    });


    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

    // Hiding unneeded elements until a class is selected
    $(".Unselect").css("width", "0px");
    $(".loader").hide();
    $(".gladiator_content").hide();

    // Gladiator class is selected
    $(".Gladiator").click(function() {
        $(".loader").show();

        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");

        $(".select_text").text("You selected Gladiator...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".gladiator_guide").show();

        $(".Gladiator").css("filter", "brightness(100%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Gladiator Starter Guide!");
            $(".Gladiator").css("filter", "brightness(100%)");
            $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".gladiator_guide").animate({ height: "1940" });
            $(".gladiator_guide").animate({ padding: "20px" });
            $(".gladiator_content").fadeIn(3000);

        }, delayInMilliseconds);


    });
    //Templar class is selected
    $(".Templar").click(function() {
        $(".loader").show();
        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");
        $(".select_text").text("You selected Templar...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".gladiator_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(100%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500;

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Templar Starter Guide!");
            $(".Gladiator").css("width", "0px");
            // $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".templar_guide").animate({ height: "1938px" });
            $(".templar_guide").animate({ padding: "20px" });
            $(".templar_content").fadeIn(3000);

        }, delayInMilliseconds);

    });

    //Assassin class is selected
    $(".Assassin").click(function() {
        $(".loader").show();
        $(".Assassin").css("pointer-events", "none");
        $(".select_text").text("You selected Assassin...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".gladiator_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(100%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Assassin Starter Guide!");
            $(".Gladiator").css("width", "0px");
            $(".Templar").css("width", "0px");
            // $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".assassin_guide").animate({ height: "1970px" });
            $(".assassin_guide").animate({ padding: "20px" });
            $(".assassin_content").fadeIn(3000);

        }, delayInMilliseconds);

    });

    //Ranger class is selected
    $(".Ranger").click(function() {
        $(".loader").show();
        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");
        $(".select_text").text("You selected Ranger...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".gladiator_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(100%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Ranger Starter Guide!");
            $(".Gladiator").css("width", "0px");
            $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            // $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".ranger_guide").animate({ height: "1940px" });
            $(".ranger_guide").animate({ padding: "20px" });
            $(".ranger_content").fadeIn(3000);

        }, delayInMilliseconds);

    });

    //Sorcerer class is selected
    $(".Sorcerer").click(function() {
        $(".loader").show();
        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");
        $(".select_text").text("You selected Sorcerer...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".sorcerer_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(100%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Sorcerer Starter Guide!");
            $(".Gladiator").css("width", "0px");
            $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            // $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".sorcerer_guide").animate({ height: "1000px" });
            $(".sorcerer_guide").animate({ padding: "20px" });
            $(".sorcerer_content").fadeIn(3000);

        }, delayInMilliseconds);

    });

    //Spiritmaster class is selected
    $(".Spiritmaster").click(function() {
        $(".loader").show();
        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");
        $(".select_text").text("You selected Spiritmaster...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".sorcerer_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(100%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Spiritmaster Starter Guide!");
            $(".Gladiator").css("width", "0px");
            $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            // $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".spiritmaster_guide").animate({ height: "1945px" });
            $(".spiritmaster_guide").animate({ padding: "20px" });
            $(".spiritmaster_content").fadeIn(3000);

        }, delayInMilliseconds);

    });

    $(".Spiritmaster_button").click(function() {
        $(".spiritmaster_guide").animate({ height: "5200px" });
        $(".Spiritmaster_button").hide();

    });

    $(".Cleric_button").click(function() {
        $(".cleric_guide").animate({ height: "4200px" });
        $(".Cleric_button").hide();

    });


    $(".Templar_button").click(function() {
        $(".templar_guide").animate({ height: "4500px" });
        $(".Templar_button").hide();

    });

    $(".Gladiator_button").click(function() {
        $(".gladiator_guide").animate({ height: "5000px" });
        $(".Gladiator_button").hide();

    });

      $(".Ranger_button").click(function() {
        $(".ranger_guide").animate({ height: "5000px" });
        $(".Ranger_button").hide();

    });



    $(".Assassin_button").click(function() {
        $(".assassin_guide").animate({ height: "6500px" });
        $(".Assassin_button").hide();

    });





    //Cleric class is selected
    $(".Cleric").click(function() {
        $(".loader").show();
        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");
        $(".select_text").text("You selected Cleric...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".sorcerer_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(100%)");
        $(".Chanter").css("filter", "brightness(0%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Cleric Starter Guide!");
            $(".Gladiator").css("width", "0px");
            $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            // $(".Cleric").css("width", "0px");
            $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".cleric_guide").animate({ height: "1945px" });
            $(".cleric_guide").animate({ padding: "20px" });
            $(".cleric_content").fadeIn(3000);

        }, delayInMilliseconds);

    });
    //Chanter class is selected
    $(".Chanter").click(function() {
        $(".loader").show();
        $(".Gladiator").css("pointer-events", "none");
        $(".Templar").css("pointer-events", "none");
        $(".Assassin").css("pointer-events", "none");
        $(".Ranger").css("pointer-events", "none");
        $(".Sorcerer").css("pointer-events", "none");
        $(".Spiritmaster").css("pointer-events", "none");
        $(".Cleric").css("pointer-events", "none");
        $(".Chanter").css("pointer-events", "none");
        $(".select_text").text("You selected Chanter...");
        $(".register_select").animate({ height: "0px" });
        $(".register_select").animate({ padding: "0px" });
        $(".sorcerer_guide").show();

        $(".Gladiator").css("filter", "brightness(0%)");
        $(".Templar").css("filter", "brightness(0%)");
        $(".Assassin").css("filter", "brightness(0%)");
        $(".Ranger").css("filter", "brightness(0%)");
        $(".Sorcerer").css("filter", "brightness(0%)");
        $(".Spiritmaster").css("filter", "brightness(0%)");
        $(".Cleric").css("filter", "brightness(0%)");
        $(".Chanter").css("filter", "brightness(100%)");


        var delayInMilliseconds = 1500; //1 second

        setTimeout(function() {
            $(".loader").hide();
            $(".select_text").text("Chanter Starter Guide!");
            $(".Gladiator").css("width", "0px");
            $(".Templar").css("width", "0px");
            $(".Assassin").css("width", "0px");
            $(".Ranger").css("width", "0px");
            $(".Sorcerer").css("width", "0px");
            $(".Spiritmaster").css("width", "0px");
            $(".Cleric").css("width", "0px");
            // $(".Chanter").css("width", "0px");
            $(".Unselect").css("width", "63px");

            $(".chanter_guide").animate({ height: "1945px" });

            $(".chanter_guide").animate({ padding: "20px" });
            $(".chanter_content").fadeIn(3000);

        }, delayInMilliseconds);

    });


    $(".chanter_button").click(function() {
        $(".chanter_guide").animate({ height: "6200px" });
        $(".chanter_button").hide();
    });








    // Restoring page to original state
    $(".Unselect").click(function() {
        $(".loader").hide();

        //Enables clicking on buttons again!
        $(".Gladiator").css("pointer-events", "auto");
        $(".Templar").css("pointer-events", "auto");
        $(".Assassin").css("pointer-events", "auto");
        $(".Ranger").css("pointer-events", "auto");
        $(".Sorcerer").css("pointer-events", "auto");
        $(".Sorcerer").css("pointer-events", "auto");
        $(".Spiritmaster").css("pointer-events", "auto");
        $(".Cleric").css("pointer-events", "auto");
        $(".Chanter").css("pointer-events", "auto");

        //restores the register text on top
        $(".register_select").css("height", "auto");
        $(".register_select").animate({ padding: "20px" });


        //restores brightness of buttons
        $(".Gladiator").css("filter", "brightness(100%)");
        $(".Templar").css("filter", "brightness(100%)");
        $(".Assassin").css("filter", "brightness(100%)");
        $(".Ranger").css("filter", "brightness(100%)");
        $(".Sorcerer").css("filter", "brightness(100%)");
        $(".Spiritmaster").css("filter", "brightness(100%)");
        $(".Cleric").css("filter", "brightness(100%)");
        $(".Chanter").css("filter", "brightness(100%)");


        $(".select_text").text("Select your preferred class!");


        $(".Gladiator").css("width", "63px");
        $(".Templar").css("width", "63px");
        $(".Assassin").css("width", "63px");
        $(".Ranger").css("width", "63px");
        $(".Sorcerer").css("width", "63px");
        $(".Spiritmaster").css("width", "63px");
        $(".Cleric").css("width", "63px");
        $(".Chanter").css("width", "63px");
        $(".Unselect").css("width", "0px");

        $(".gladiator_guide").animate({ height: "0px" });
        $(".gladiator_guide").animate({ padding: "0px" });

        $(".templar_guide").animate({ height: "0px" });
        $(".templar_guide").animate({ padding: "0px" });

        $(".assassin_guide").animate({ height: "0px" });
        $(".assassin_guide").animate({ padding: "0px" });

        $(".ranger_guide").animate({ height: "0px" });
        $(".ranger_guide").animate({ padding: "0px" });

        $(".sorcerer_guide").animate({ height: "0px" });
        $(".sorcerer_guide").animate({ padding: "0px" });

        $(".spiritmaster_guide").animate({ height: "0px" });
        $(".spiritmaster_guide").animate({ padding: "0px" });

        $(".cleric_guide").animate({ height: "0px" });
        $(".cleric_guide").animate({ padding: "0px" });

        $(".chanter_guide").animate({ height: "0px" });
        $(".chanter_guide").animate({ padding: "0px" });






        $(".gladiator_content").fadeOut(500);
        $(".templar_content").fadeOut(500);
        $(".assassin_content").fadeOut(500);
        $(".ranger_content").fadeOut(500);
        $(".sorcerer_content").fadeOut(500);
        $(".spiritmaster_content").fadeOut(500);
        $(".cleric_content").fadeOut(500);
        $(".chanter_content").fadeOut(500);

        //expand button restore on unselect
        $(".Spiritmaster_button").show();
        $(".chanter_button").show();
        $(".Cleric_button").show();
        $(".Templar_button").show();
        $(".Assassin_button").show();
        $(".Gladiator_button").show();
        $(".Ranger_button").show();


    });


    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

    $(".statistics_title").click(function() {

        $(".server_info").show();
        $(".sidebar").hide();

    });

});