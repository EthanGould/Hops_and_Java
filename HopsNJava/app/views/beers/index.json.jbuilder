json.array!(@beers) do |beer|
  json.extract! beer, :id
  json.url beer_url(beer, format: :json)
end
