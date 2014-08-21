class AddColumnsToBrewery < ActiveRecord::Migration
  def change
    add_column :breweries, :name, :text
    add_column :breweries, :brewery_api_id, :text
  end
end
