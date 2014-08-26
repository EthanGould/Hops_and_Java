class Beer < ActiveRecord::Base
  after_initialize :defaults
  def defaults
    self.season = 'Available to enjoy year round'
    self.organic = false
  end

  def self.get_beers
    beers_url = 'http://api.brewerydb.com/v2/beers?key=819b17a216351db6794aaf097f40c86a&abv=5'
    beers_response = HTTParty.get(beers_url)
    beers_response['data'].each do |beer|
      beer_brewery_url = "http://api.brewerydb.com/v2/beer/#{beer['id']}/breweries?key=819b17a216351db6794aaf097f40c86a"
      beer_brewery_response = HTTParty.get(beer_brewery_url)
      beer_brewery_response.each do |brewery|
        beer = Beer.create!(beer_id: beer['id'], name: beer['name'], style: beer['style']['name'], description: beer['description'], organic: beer['isOrganic'], brewery: brewery['data'][0]['name'], brewery_id: brewery['data'][0]['id'])
      end
    end
  end
end
