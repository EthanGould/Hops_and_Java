json.array!(@beers) do |beer|
  json.extract! beer, :id
  json.name beer.name
  json.style beer.style
  json.season beer.season
  json.brewery beer.brewery
  json.organic beer.organic
  json.pic beer.pic
  json.ext_beer_id beer.ext_beer_id
  json.ext_brewery_id beer.ext_brewery_id
  json.bewery beer.description
  json.url beer_url(beer, format: :json)
end
