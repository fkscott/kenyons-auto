class Vehicle < ApplicationRecord
    has_many :comments
    
    before_create :slugify

    def slugify
        self.slug = vin.parameterize
    end

end
