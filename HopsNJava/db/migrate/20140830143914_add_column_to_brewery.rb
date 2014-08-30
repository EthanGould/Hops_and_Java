class AddColumnToBrewery < ActiveRecord::Migration
  def change
    add_column :breweries, :established, :string
    add_column :breweries, :website, :text
  end
end
