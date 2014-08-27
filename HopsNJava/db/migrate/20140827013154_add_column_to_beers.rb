class AddColumnToBeers < ActiveRecord::Migration
  def change
    add_column :beers, :pic, :text
  end
end
