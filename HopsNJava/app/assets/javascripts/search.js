$(document).ready(function(){

  $('.search-input').keyup(function(event) {
    event.preventDefault;
    // console.log($(this))
    filterResuts($(this));
  });
});

var pageItems = $('.list-of-beers').children();

var filterResuts = function(input) {
  var query = input.val();
  var userInput = [];
  userInput += query;
  for (var i = 0; i < pageItems.length; i++) {
    console.log(pageItems[i].innerText);
  }
  console.log("yo");
}
