class Brewery < ActiveRecord::Base
  # has_many :beers

  def self.get_breweries
    breweries_url = "http://api.brewerydb.com/v2/breweries?key=819b17a216351db6794aaf097f40c86a"
    breweries_response = HTTParty.get(breweries_url)
    breweries_response['data'].each do |brewery|
      Brewery.create!(name: brewery['name'], description: brewery['description'],
        pic: brewery.try(:[],'images').try(:[], 'icon'),
        ext_brewery_id: brewery['id'],
        established: brewery['established'],
        website: brewery['website'])
    end
  end

  def self.make_association
    Brewery.all.each do |brewery|
      #finds beer based on ext_brewery_id then updates the brewery_id equalt to the current breweries id
      binding.pry
      Beer.where(ext_brewery_id: brewery.ext_brewery_id).update_all(brewery_id: brewery.id)
      binding.pry
    end
  end
end
