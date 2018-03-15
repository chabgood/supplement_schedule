class Supplement < ApplicationRecord
  belongs_to :brand
  has_many :amounts_supplement
  has_many :amounts, through: :amounts_supplement

  paginates_per 5
  validates_presence_of :name, :amount

end
