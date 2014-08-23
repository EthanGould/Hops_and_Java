var App = App || {};

App.getRandomBeer = function() {

  $.get('http://api.brewerydb.com/v2/beer/random/?key=819b17a216351db6794aaf097f40c86a', function(response) {
    /*optional stuff to do after success */
    console.log(response)
    var name,
        description,
        type,
        image

    name = response.data.name;
    description = response.data.style.description;

    $('.beer--name').html(name);
    $('.beer--description').html(description);

    // beer style/type
    if( response.data.style.name ){
      type = response.data.style.name;
      $('.beer--type').html(type);
    } else {
      $('.beer--type').html('Unavailable');
    };

    // beer image
    if (response.data.labels) {
      if( response.data.labels.medium ){
        image = response.data.labels.medium;
        $('.beer--image').attr('src', image);
      } else if (response.data.labels.icon){
        image = response.data.labels.icon;
        $('.beer--image').attr('src', image);
      } else if (response.data.labels.large){
        image = response.data.labels.large
        $('.beer--image').attr('src', image);
      } else {
        image = 'http://img1.wikia.nocookie.net/__cb20140409232122/simpsons/images/0/03/Duff_logo.gif'
        $('.beer--image').attr('src', image);
      };
    };

  });
}

$(document).ready(function(){
  $(".click-me").click(App.getRandomBeer)

});

