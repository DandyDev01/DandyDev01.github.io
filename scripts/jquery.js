

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

function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "") {
    x.className += "responsive";
  } else {
    x.className = "";
  }
}