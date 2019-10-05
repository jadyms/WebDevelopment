// //For each button clicked
// $("button").on("click", function(){
// 	// fade out the div tags in 1 sec
// 	// after the 1 sec, then print the message
// 	// *this just fade the element out
// 	$("div").fadeOut(1000, function(){
// 		console.log("Fade completed");
// 		// remove the element
// 		$(this).remove();

// 		// fadeIn() works the opposite way
// 		// fadeToggle() toggles (in if it is out and vice versa)

	// });
	
// });

//For each button clicked
 $("button").on("click", function(){
 	//Slide up
 	// For display: none; and slideDown
 	// 	$('div').slideUp();
 	$('div').slideToggle();
 });
