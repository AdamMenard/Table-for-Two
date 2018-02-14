class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :location
      t.string :img_url
      t.string :description
      t.string :name

      t.timestamps
    end
  end
end
