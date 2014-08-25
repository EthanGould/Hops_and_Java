class AddColumnToBeer < ActiveRecord::Migration
  def change
    add_column :beers, :beer_id, :string
  end
end
