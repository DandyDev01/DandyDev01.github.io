// active and hide the image overlay
$(document).ready(function(){
    $(".img-container img").on("click", function() {
      // overlay is enabled
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
      // overlay is not enabled
      else {
        $("#overlay").addClass("enable");
        $("#overlay").removeClass("disable")
        var src = $(this).attr("src");
        $("#overlay-img").attr("src", src);
      }

      // reset active image
      var index = 0;
      $(".current_image_container").children().each(function () {
        $(".current_image_container").children().eq(index).removeClass("active-image");
        index += 1;
      });

      // set active image to clicked image
      var index = 0;
      $(".img-container").children().each(function () {  
        if($(this).attr("src") == $("#overlay-img").attr("src")) {
          // loop back to start
          if (index+1 >= $(".img-container").children().length){
            index = -1;
          }
    
          $(".current_image_container").children().eq(index).addClass("active-image");
        }
        index += 1;
      })
      
    });  

    // when image view close button clicked
    $("#close-button").on("click", function() {
      $("#overlay").addClass("disable");
      $("#overlay").removeClass("enable");

      // reset active image
      var index = 0;
      $(".current_image_container").children().each(function () {
        $(".current_image_container").children().eq(index).removeClass("active-image");
        index += 1;
      });
      $(".current_image_container").children().eq(0).addClass("active-image");
    });

    // when elements with dropdown class are clicked
    $(".dropdown").on("click", function() {
      $(".dropdown-content").css({
        "display": "block"
      });
    });
});

// when .img-container next button is pressed
$(document).ready(function(){
  $("#next").on("click", function() {
    next();
  });  
});

// when .img-container prev button is pressed
$(document).ready(function(){ 
  $("#prev").on("click", function() {
    prev();
  });  
});

// handle keyboard input
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

function dropDownFunction() {
  var menu = document.getElementById("menu");
  if (menu.className === "") {
    menu.className += "responsive";
  } else {
    menu.className = "";
  }
}

// goes to the next image in the .img-container or 
// loops back to the first
function next() {
  var src = $(this).attr("src");
  var index = 0;
  $(".img-container").children().each(function () {  
    if($(this).attr("src") == $("#overlay-img").attr("src")) {
      // loop back to start
      if (index+1 >= $(".img-container").children().length){
        index = -1;
      }

      $(".current_image_container").children().eq(index).removeClass("active-image");
      $(".current_image_container").children().eq(index+1).addClass("active-image");
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