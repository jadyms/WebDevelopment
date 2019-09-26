// Elements text content
var h1 = $("h1").text();
var ul = $("ul").text();

//Set new text
var newText = $("h1").text("This is the new H1");

//Change all the elements of a list with no for loop
var newLi = $("li").text("New item on the list");

//HTML elements
var innerHtml = $("ul").html();

// Testing trough alerts
//alert(h1);
//alert(ul);
alert(innerHtml);
