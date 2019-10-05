// cross over the done todo
$("li").click(function(){
	// if color is gray
	if($(this).css("color") === "rgb(128, 128, 128)"){
		// turn it black
		$(this).css({
		color: "black",
		textDecoration: "none"
	});

		// if not gray
	}else{$(this).css({
		// turn it gray
		color: "gray",
		textDecoration: "line-through"
	});
}
	
});