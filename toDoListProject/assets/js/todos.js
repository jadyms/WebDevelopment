// cross over the done todo
$("li").click(function(){
	//add/remove completed class to clicked element
	$(this).toggleClass("completed")
		
});

// Click on x to delete todo
$("span").click(function(e){
	//remove the li that contains the span
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	//avoid bubbling up 
	e.stopPropagation();
});

// New todo
$("input[type='text']").keypress(function(e){
	//enter = 13
	if(e.which===13){
		// grab text from input
		var todoText = $(this).val();
		$(this).val("");

		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+ todoText + "</li")



		}


	
});