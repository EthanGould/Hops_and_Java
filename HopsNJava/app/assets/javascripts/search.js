$(document).ready(function(){

  $('.search-input').focusin(function(event) {
    event.preventDefault;
    // console.log($(this))
    filterResuts($(this));
  });
});

// var pageItems = $('.list-of-beers').children();

var filterResuts = function(input) {
  input.keyup(function(event) {
    var pageItems = $('.list-of-beers').children();
    input = $(this).val();
    console.log($(this).val());
    for (var i = 0; i < pageItems.length; i++) { //each beer element
      var beer = pageItems[i].innerText;
      if (beer.indexOf(input) >= 0) {
        console.log(pageItems[i]);
        pageItems.remove(pageItems[i]);
      }
    }
    console.log(pageItems[i]);
  });
};
