json.array!(@breweries) do |brewery|
  json.extract! brewery, :id
  json.website = brewery.website;
  json.name = brewery.name;
  json.description = brewery.description;
  json.pic = brewery.pic;
  json.ext_brewery_id = brewery.ext_brewery_id;
  json.establish_date = brewery.established;
end
