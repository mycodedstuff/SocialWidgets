
function followToggle(){
    if($("#social-container").css("width") == "0px"){
        if($("#follow").css("width") == "90px"){
            follow_width = "460px";
        }else if($("#follow").css("width") == "70px"){
            follow_width = "450px";
        }
        $("#social-container").animate({width: "380px"},{duration: 0, queue: false, easing: "linear"});
        $("#follow").animate({width: follow_width},{duration: 0, queue: false, easing: "linear"});
    }
    else{
        $("#follow").animate({width: "80px"},{duration: 0, queue: false, easing: "linear"}).attr("style","");
        $("#social-container").animate({width: "0px"},{duration: 0, queue: false, easing: "swing"});
    }
}

$(function(){
    $("#socialclosebtn").click(function(){followToggle();});
    $(".followtext").click(function(){followToggle();});
});