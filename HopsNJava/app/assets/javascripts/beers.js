var App = App || {};

App.getRandomBeer = function() {

  $.get('http://api.brewerydb.com/v2/beer/random/?key=819b17a216351db6794aaf097f40c86a', function(response) {
    /*optional stuff to do after success */
    // console.log(response)
    var name,
        description,
        type,
        image,
        beerId

    name = response.data.name;
    description = response.data.style.description;
    beerId = response.data.id

    $('.random-beer__name').html(name);
    $('.random-beer__description').html(description);

    // beer style/type
    if( response.data.style.name ){
      type = response.data.style.name;
      $('.random-beer__type').html(type);
    } else {
      $('.random-beer__type').html('Unavailable');
    };

    // beer image
    if (response.data.labels) {
      if( response.data.labels.medium ){
        image = response.data.labels.medium;
        $('.random-beer__image').attr('src', image);
      } else if (response.data.labels.icon){
        image = response.data.labels.icon;
        $('.random-beer__image').attr('src', image);
      } else if (response.data.labels.large){
        image = response.data.labels.large
        $('.random-beer__image').attr('src', image);
      } else {
        image = 'http://img1.wikia.nocookie.net/__cb20140409232122/simpsons/images/0/03/Duff_logo.gif'
        $('.random-beer__image').attr('src', image);
      };
    };
    $.get('http://api.brewerydb.com/v2/beer/'+beerId+'/breweries?key=819b17a216351db6794aaf097f40c86a', function(response) {
      console.log(response);
      var breweryName = response.data[0].name;
      var breweryId = response.data[0].id;
      var $breweryTitle = $('.random-beer__brewery');
      $breweryTitle.html(breweryName);
      $breweryTitle.attr('href', "/breweries/" + breweryId);
      localStorage.breweryName = breweryName;
      localStorage.breweryId = breweryId;
    });
  });
}

App.buildBeerPage = function(data){

  var beerName,
      beerDescription,
      beerType,
      beerImage,
      beerId

  beerId = data
  $.get('http://api.brewerydb.com/v2/beers/'+ beerId +'/?key=819b17a216351db6794aaf097f40c86a', function(response){
    console.log(response);
  });
}

$(document).ready(function(){
  $(".click-me").click(App.getRandomBeer);
  if (top.location.pathname === '/beers/' + localStorage.beerId){
    App.getAllBreweryBeers();
  };
});

