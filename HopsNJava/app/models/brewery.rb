class Brewery < ActiveRecord::Base

  def self.get_breweries
    breweries_url = "http://api.brewerydb.com/v2/breweries?key=819b17a216351db6794aaf097f40c86a&p=2"
    breweries_response = HTTParty.get(breweries_url)
    breweries_response['data'].each do |brewery|
      Brewery.create!(name: brewery['name'], description: brewery['description'],
        pic: brewery.try(:[],'images').try(:[], 'icon'),
        ext_brewery_id: brewery['id'],
        established: brewery['established'],
        website: brewery['website'])
    end
  end
end
