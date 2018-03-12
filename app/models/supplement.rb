class Supplement < ApplicationRecord
  paginates_per 5

  validates_presence_of :name, :amount

end
