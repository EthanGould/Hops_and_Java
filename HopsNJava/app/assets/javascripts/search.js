$(document).ready(function(){

  $('.search-input').focusin(function(event) {
    event.preventDefault;
    // console.log($(this))
    filterResuts($(this));
  });
});

// var pageItems = $('.list-of-beers').children();

var filterResuts = function(input) {
  var originalItems = $('.list-of-beers').children();
  var matchedElements = []
  input.keyup(function(event) {
    userInput = $(this).val();
    console.log(userInput);
    for (var i = 0; i < originalItems.length; i++) { //each beer element
      var beer = originalItems[i].innerText;
      if (userInput.length && beer.indexOf(userInput) >= 0) {
        matchedElements =[];
        matchedElements.push(originalItems[i]);
        console.log(matchedElements.length);
      } else {
        console.log("mismatch");
      }
    }
  });
};

var renderResults = function(array) {
  for (var i = 0; i < array.length; i++) {
    $('.list-of-beers').append(array[i]);
  }
}
