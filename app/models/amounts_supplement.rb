class AmountsSupplement < ApplicationRecord
  belongs_to :supplement
  belongs_to :amount
end
