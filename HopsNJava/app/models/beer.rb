class Beer < ActiveRecord::Base
  after_initialize :defaults
  def defaults
    self.season = 'available year round'
    self.organic = false
    # self.brewery = 'Brewery info is unavailable'
  end

  def self.get_random_beer
    rand_beer_url = 'http://api.brewerydb.com/v2/beer/random?key=819b17a216351db6794aaf097f40c86a'
    rand_beer_response = HTTParty.get(rand_beer_url)
    beer = rand_beer_response['data']
    rand_beer_brewery_url = "http://api.brewerydb.com/v2/beer/#{beer['id']}/breweries?key=819b17a216351db6794aaf097f40c86a"
    rand_beer_brewery_response = HTTParty.get(rand_beer_brewery_url)
    monkey = Beer.new(beer_id: beer['id'], name: beer['name'], style: beer['style']['category']['name'], description: beer['description'], brewery: rand_beer_brewery_response['data'][0]['name'], brewery_id: rand_beer_brewery_response['data'][0]['id'])
  end

  def self.get_beers
    beers_url = 'http://api.brewerydb.com/v2/beers?key=819b17a216351db6794aaf097f40c86a&abv=5'
    beers_response = HTTParty.get(beers_url)
    binding.pry
  end
end
