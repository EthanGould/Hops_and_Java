Rails.application.routes.draw do
  resources :beers
  get '/random_beer', to: 'beers#random_beer'
  get '/home', to: 'homes#index'
  resources :breweries
end
