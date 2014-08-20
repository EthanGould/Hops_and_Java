class CreateBreweryApis < ActiveRecord::Migration
  def change
    create_table :brewery_apis do |t|

      t.timestamps
    end
  end
end
