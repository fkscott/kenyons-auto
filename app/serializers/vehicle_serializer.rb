class VehicleSerializer
  include FastJsonapi::ObjectSerializer
  attributes :make, :model, :vin, :color, :mileage, :slug, :price, :image_url

  has_many :comments
end
