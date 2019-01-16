$("body").mouseenter(function() {
    $("#picture2").hide();
    $("#picture3").hide();
    $("#picture4").hide();
});

$("button").click(function() { 
    $("#click1").text("Hover");
    $("button").hide();
    $("body").css("background-color","lightblue");
    $("#picture1").hide();
});

$("#click1").hover(function() {
    $("#click2").text("Double Click On Shawn");
    $("#click1").hide();
    $("#picture2").show();
    $("body").css("background-color","pink");
});

$("#picture2").dblclick(function() {
    $("#click3").text("Click The Header");
    $("#picture2").hide();
    $("#click2").hide();
    $("body").css("background-color","red");
});
$("#header").click(function() { 
    $("#picture4").show();
    $("#click3").fadeOut();
    $("body").css("background-color","purple");
    $("#click4").text("You're Almost Finished...Just hover");
});
$("#picture4").mouseleave(function() {
    $("#click4").hide();
    $("#picture4").hide();
    $("#picture3").show();
    $("#click5").text("Here's your treasure, You're getting a Grammy!!");
    $("body").css("background-color","lightpink");
});