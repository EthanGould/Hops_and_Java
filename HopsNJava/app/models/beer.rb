class Beer < ActiveRecord::Base
  # belongs_to :brewery
  after_initialize :defaults

  def defaults
    # self.season = 'Available to enjoy year round'
    self.organic = false
  end

  def self.get_beers
    beers_url = 'http://api.brewerydb.com/v2/beers?key=819b17a216351db6794aaf097f40c86a'
    beers_response = HTTParty.get(beers_url)
    beers_response['data'].each do |beer|
      beer_brewery_url = "http://api.brewerydb.com/v2/beer/#{beer['id']}/breweries?key=819b17a216351db6794aaf097f40c86a"
      beer_brewery_response = HTTParty.get(beer_brewery_url)
      beer_brewery_response['data'].each do |brewery|
        Beer.create!(ext_beer_id: beer['id'],
          name: beer['name'],
          style: beer.try(:[], 'style').try(:[], 'name'),
          description: beer['description'],
          organic: beer['isOrganic'],
          season: beer['available'].try(:[], 'description'),
          pic: beer.try(:[], 'labels').try(:[], 'large'),
          brewery: brewery['name'],
          ext_brewery_id: brewery['id'])
      end
    end
  end
end
