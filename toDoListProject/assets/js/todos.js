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