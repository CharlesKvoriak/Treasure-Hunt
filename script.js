$("body *").hide();
$(".centered").show();
$("#firstheader").show();

$("#firstheader").click(function(){
    $("#firstheader").slideUp();
    $("#firstp").slideDown();
});

$("#firstp").click(function(){
    $("#firstp").text("Alright, double click the image now");
    $("#bananaAndScroll").fadeIn();
});

$("#bananaAndScroll").dblclick(function(){
    $("#bananaAndScroll").attr("src", "https://www.bricks4kidz.com.au/perth-karrinyup/wp-content/uploads/sites/37/2018/05/Scroll-Down.gif");
    $("#firstp").hide();
    $("#hoverdiv,#hoverdiv *").show();
});

$("#hoverdiv").mouseover(function(){
    $(".centered *").hide();
    $("#chest, #treasurep").show();
});

$("#chest").click(function(){
    $("#chest").attr("src","https://www.colourbox.com/preview/25358362-treasure-chest.jpg");
});