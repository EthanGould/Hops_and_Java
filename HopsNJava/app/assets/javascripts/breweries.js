App = App || {};

App.getAllBreweryBeers = function(){
  var breweryId = localStorage.breweryId
  $.get('http://api.brewerydb.com/v2/brewery/'+breweryId+'/beers?key=819b17a216351db6794aaf097f40c86a', function(response){
    console.log(response)
    for (i = 0; i < response.data.length; i++) {
      var currentBeer = response.data[i]
      var $beer = $("<div class='someBeer'><a href='/beers/"+currentBeer.id+"' class='beer__list--item' id="+currentBeer.id+ "'>"+currentBeer.name+"</a></div>");
      $('.beer__list').append($beer);
    }
  });
}

$(document).ready(function(){
  $('.brewery__name').html(localStorage.breweryName)
  if (top.location.pathname === '/breweries/' + localStorage.breweryId){
    App.getAllBreweryBeers();
  };
});
