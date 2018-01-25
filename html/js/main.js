function say(text) {
     RobotUtils.onServices(function(ALTextToSpeech) {
         ALTextToSpeech.say(text);
     }, function (e) {
         console.log(e);
     });
}

function say_map() {
    say("Chargement de " + $(".selected").text());
}

$(document).ready(function() {
    say_map();
    const image = document.getElementById("image");

    image.onload = function() {
        $("#loader").hide();
        say("Voilà");
    }

    if ($("#image").prop("complete")) {
        $("#loader").hide();
        say("Voilà");

    }
    $(".floor").click(function () {
        if ($(this).hasClass("selected"))
        {
            return;
        }
        $(".selected").each(function() {
            $(this).removeClass("selected");
        });
        $(this).addClass("selected");
        $("#loader").show();
        say_map();
        var floor = $(this).text();
        floor = floor.toLowerCase().replace(/ /g, "_");

        image.src ="images/maps/" + floor +  ".svg";
    });
    $("#back").click(function () {
        RobotUtils.onServices(function(CPEAppLauncher) {
            CPEAppLauncher.home();
        }, function (e) {
            console.log(e);
        });
    });
});

