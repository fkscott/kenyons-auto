class CreateVehicles < ActiveRecord::Migration[7.0]
  def change
    create_table :vehicles do |t|
      t.string :make
      t.string :model
      t.string :vin
      t.string :color
      t.integer :mileage
      t.integer :likes
      t.integer :price
      t.string :slug
      t.string :image_url

      t.timestamps
    end
  end
end
