class Amount < ApplicationRecord
  has_many :amounts_supplement
  has_many :supplements, through: :amounts_supplement
end
