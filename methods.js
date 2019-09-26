// // Elements text content
// var h1 = $("h1").text();
// var ul = $("ul").text();

// //Set new text
// var newText = $("h1").text("This is the new H1");

// //Change all the elements of a list with no for loop
// var newLi = $("li").text("New item on the list");

// //HTML elements
// var innerHtml = $("ul").html();

//Set image dimension
$("img").css("width", "200px");

//attr() to retrieve value from an attribute
var source = $("img").attr("src");

//Use attr() to set a new attribute (new img)
//$("img").attr("src", "https://static.onecms.io/wp-content/uploads/sites/38/2016/11/12223610/shutterstock_291431081.jpg");

//Use attr() to change input type from text to color or checkbox
//$("input").attr("type", "color");
//$("input").attr("type", "checkbox");


//Change only the first img
//$("img:first-of-type").attr("src","https://static.onecms.io/wp-content/uploads/sites/38/2016/11/12223610/shutterstock_291431081.jpg");

//Change only the last img with last()
//$("img").last().attr("src","https://static.onecms.io/wp-content/uploads/sites/38/2016/11/12223610/shutterstock_291431081.jpg");

//Change all img together
//$("img").attr("src","https://static.onecms.io/wp-content/uploads/sites/38/2016/11/12223610/shutterstock_291431081.jpg");

//Select values with val() and set it to a new value
$("input").val("Jady is my name");

//Check selected value from a dropdown menu
var dropDown = $("select").val();


// Testing trough alerts
//alert(h1);
//alert(ul);
//alert(innerHtml);
//alert(source);
alert(dropDown);