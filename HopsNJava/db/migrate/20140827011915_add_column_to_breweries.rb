class AddColumnToBreweries < ActiveRecord::Migration
  def change
    change_table :breweries do |t|
      t.remove :brewery_api_id
      t.text :description
      t.text :pic
      t.string :ext_brewery_id
    end
  end
end
