class AddColumnsToBeer < ActiveRecord::Migration
  def change
    add_column :beers, :brewery, :text
    add_column :beers, :brewery_id, :text
  end
end
