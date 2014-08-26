namespace :beers do
  desc "populates databse with a bunch of beers"
  task get_beers: :environment do
    Beer.get_beers
  end

end
