class AddColumnsToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :name, :text
    add_column :beers, :style, :text
    add_column :beers, :description, :text
    add_column :beers, :season, :text
    add_column :beers, :organic, :boolean
  end
end
