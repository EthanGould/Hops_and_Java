var App = App || {};

App.getRandomBeer = function() {

  $.get('http://localhost:3000/random_beer.json', function(beer) {

    console.log(beer);
    var name = beer.name;
    var style = beer.style;
    var season = beer.season;
    var brewery = beer.brewery;
    var brewery_id = beer.brewery_id;
    if(beer.description){
      var description = beer.description;
    } else {
      var description = 'No description available'
    };
    if(beer.organic === true){
      var organic = 'This beer is organic';
    } else {
      var organic = 'This beer is not organic';
    };
    // Put beer details on random_beer view
    $('.random-beer__name').html(name);
    $('.random-beer__description').html(description);
    $('.random-beer__style').html(style);
    $('.random-beer__brewery').html(brewery);
    $('.random-beer__organic').html(organic);
    $('.random-beer__season').html(season);

    $('.random-beer__brewery').attr('href', '/brewery/' + brewery_id)
  });
  $.get()
};

App.buildBeerPage = function(){
  var name,
      brewery,
      description,
      style,
      image,
      beerId

  id = localStorage.beerId;
  $.get('http://api.brewerydb.com/v2/beer/'+id+'?key=819b17a216351db6794aaf097f40c86a', function(response){
    console.log(response);

    name = response.data.name;
    brewery = localStorage.breweryName;
    style = response.data.style.name;
    description = response.data.description;

    $('.beer__name').html(name);
    $('.beer__style').html(style);
    $('.beer__brewery').html(brewery);
    $('.beer__description').html(description)
  });
};

$(document).ready(function(){
  $(".click-me").click(App.getRandomBeer);
  // var urlParams = window.location.href.split('/');
  // localStorage.beerId = urlParams[urlParams.length -1];
  // App.buildBeerPage();
});
