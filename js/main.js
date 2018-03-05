/**
*
* Part 1:
*
*/

// 1. Go to style.css and add a class called fun. Style that class with your choice of background-color and text color.
// 2. Go to style.css and add a class called crazy. Style that class with your choice of text color.

// 3. When #box2 is clicked on
	// a) Add the fun class to the elements with the class .box
	// b) Add the crazy class to the h1
	// c) Slide toggle #box3

$("#box2").on("click",function(){
  $(".box").addClass("fun");
  $("h1").addClass("crazy");
  $("#box3").slideToggle(400);
});

// 4. When any .box is clicked
	// a) Change the text in the header's h1 tag to read "jQuery Ninja"

$(".box").on("click",function(){
  $("h1").text("JQuery Ninja");
});

// 5. When the #box1 is clicked:
	// Update the src attribute for the image with the class .moto to "images/moto.jpg"
	// Hint: look up the attr method if you get stuck!
$("#box1").on("click",function(){
$("img").attr("src","images/moto.jpg");
});

/**
*
* Part 2:
*
*/

// 6. Hide the item with the id #dropdownMenu
$("#dropdownMenu").hide();

// 7. When the element with the id #dropdownButton is clicked,
	// a) slide toggle #dropdownMenu
$("#dropdownButton").on("click",function(){
  $("#dropdownMenu").slideToggle(100);
});

/**
*
* Part 3:
*
*/

// 8. Hide the item with the id #answer2
$("#answer2").hide();

// 9. When #question2 is clicked:
	// a) Slide down #answer2
  $("#question2").on("click",function(){
    $("#answer2").slideDown(100);
  });
	// b) Slide up #answer1
  $("#question2").on("click",function(){
    $("#answer1").slideUp(100);
  });

	// c) Remove the active class from all list items
$("li").removeClass("active");

	// d) Add the active class to #question2
$("#question2").addClass("active");

// 10. When #question1 is clicked:
$("#question1").on("click",function(){
	// a) Slide down #answer1
  $("#answer1").slideDown(100);
	// b) Slide up #answer2
  $("#answer2").slideUp(100);
	// c) Remove the active class from all list items
  $("li").removeClass("active");
  // d) Add the active class to #question1
  $("#question1").addClass("active");
});

/**
*
* Part 4:
*
*/

// For this last one, the steps aren't broken down for you line-by-line. See if you can figure these out!


// 1. When the button "Show Only Yellow" is clicked, only show circles with the class .yellow
$("#showYellowCircles").on("click",function(){
  $(".blue").hide(5);
  $(".yellow").show(5);
});
$("#showBlueCircles").on("click",function(){
  $(".yellow").hide(5);
  $(".blue").show(5);
});

// 2. When the button "Show Only Blue" is clicked, only show circles with the class .blue
