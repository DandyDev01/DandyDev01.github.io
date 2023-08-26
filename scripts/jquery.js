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

// when .img-container next button is pressed
$(document).ready(function(){
  $("#next").on("click", next());  
});

// when .img-container prev button is pressed
$(document).ready(function(){
  $("#prev").on("click", prev());  
});

function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "") {
    x.className += "responsive";
  } else {
    x.className = "";
  }
}

$(document).keydown(function (e) { 
  // esc key press
  if (e.keyCode == 27) {
    $("#overlay").addClass("disable");
    $("#overlay").removeClass("enable");
  }
  // right arrow
  else if (e.keyCode == 39){
    if($("#overlay").hasClass("enable")) {
      next();
    }
  }
  // left arrow
  else if (e.keyCode == 37){
    if($("#overlay").hasClass("enable")) {
      prev();
    }
  }
});

// goes to the next image in the .img-container or 
// loops back to the first
function next() {
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
}

// goes to the prev image in the .img-container or 
// loops back to the last
function prev() {
  var src = $(this).attr("src");
    var index = 0;
    $(".img-container").children().each(function () {
      if($(this).attr("src") == $("#overlay-img").attr("src")) {
        src = $(".img-container").children().eq(index-1).attr("src");
      }
      index += 1;
    })

    $("#overlay-img").attr("src", src)
}