

$(document).ready(function(){
    $(".img-container img").on("click", function() {
      if($("#overlay").hasClass("enable")) {
        if($(this).attr("src") == $("#overlay-img").attr("src")) {
          $("#overlay").addClass("disable");
          $("#overlay").removeClass("enable");
        }
        else {
          var src = $(this).attr("src");
          $("#overlay-img").attr("src", src);
        }
      }
      else {
        $("#overlay").addClass("enable");
        $("#overlay").removeClass("disable")
        var src = $(this).attr("src");
        $("#overlay-img").attr("src", src);
      }
    });  

    $("#close-button").on("click", function() {
      $("#overlay").addClass("disable");
      $("#overlay").removeClass("enable");
    });
});

$(document).ready(function(){
  $("#next").on("click", function() {
    var src = $(this).attr("src");
    var index = 0;
    $(".img-container").children().each(function () {  
      if($(this).attr("src") == $("#overlay-img").attr("src")) {
        if (index+1 >= $(".img-container").children().length){
          index = -1;
        }
        src = $(".img-container").children().eq(index+1).attr("src");
      }
      index += 1;
    })

    $("#overlay-img").attr("src", src)
  });  
});

$(document).ready(function(){
  $("#prev").on("click", function() {
    var src = $(this).attr("src");
    var index = 0;
    $(".img-container").children().each(function () {
      if($(this).attr("src") == $("#overlay-img").attr("src")) {
        src = $(".img-container").children().eq(index-1).attr("src");
      }
      index += 1;
    })

    $("#overlay-img").attr("src", src)
  });  
});

function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "") {
    x.className += "responsive";
  } else {
    x.className = "";
  }
}