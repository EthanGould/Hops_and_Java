var App = App || {};

App.getRandomBeer = function() {

  $.get('http://api.brewerydb.com/v2/beer/random/?key=819b17a216351db6794aaf097f40c86a', function(response) {
    /*optional stuff to do after success */
    console.log(response)
    var name,
        description,
        type,
        image,
        beerId

    name = response.data.name;
    description = response.data.style.description;
    beerId = response.data.id

    $('.beer__name').html(name);
    $('.beer__description').html(description);

    // beer style/type
    if( response.data.style.name ){
      type = response.data.style.name;
      $('.beer__type').html(type);
    } else {
      $('.beer__type').html('Unavailable');
    };

    // beer image
    if (response.data.labels) {
      if( response.data.labels.medium ){
        image = response.data.labels.medium;
        $('.beer__image').attr('src', image);
      } else if (response.data.labels.icon){
        image = response.data.labels.icon;
        $('.beer__image').attr('src', image);
      } else if (response.data.labels.large){
        image = response.data.labels.large
        $('.beer__image').attr('src', image);
      } else {
        image = 'http://img1.wikia.nocookie.net/__cb20140409232122/simpsons/images/0/03/Duff_logo.gif'
        $('.beer__image').attr('src', image);
      };
    };
    $.get('http://api.brewerydb.com/v2/beer/'+beerId+'/breweries?key=819b17a216351db6794aaf097f40c86a', function(response) {
      console.log(response);
      var brewery = response.data[0].name;
      $('.beer__brewery').html(brewery);
    });
  });
}

App.getBreweryPage = function(){
  $.get('http://api.brewerydb.com/v2/beer/'+beerId+'/breweries?key=819b17a216351db6794aaf097f40c86a', function(response) {
    console.log(response);
    var brewery = response.data[0].name;
    $('.beer__brewery').html(brewery);
  });
};

$(document).ready(function(){
  $(".click-me").click(App.getRandomBeer);
  $(".beer__brewery").click(App.getBreweryPage);
});

