class ChangeColumnName < ActiveRecord::Migration
  def change
    change_table :beers do |t|
      t.string :api_brewery_id
    end
  end
end
