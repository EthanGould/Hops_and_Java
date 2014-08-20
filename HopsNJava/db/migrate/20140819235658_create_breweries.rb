class CreateBreweries < ActiveRecord::Migration
  def change
    create_table :breweries do |t|

      t.timestamps
    end
  end
end
