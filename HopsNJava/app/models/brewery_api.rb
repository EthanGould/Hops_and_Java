class BreweryApi

  def self.response
    base_url = "http://api.brewerydb.com/v2/"
    api_key = ENV["BREWERY_DB_KEY"]
    HTTParty.get("#{base_url}?key=#{api_key}" )
  end
end

