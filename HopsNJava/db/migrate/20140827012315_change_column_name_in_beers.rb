class ChangeColumnNameInBeers < ActiveRecord::Migration
  def change
    change_table :beers do |t|
      t.rename :api_brewery_id, :ext_brewery_id
      t.rename :beer_id, :ext_beer_id
      t.remove :organic
      t.string :organic
      t.remove :brewery_id
    end
  end
end
