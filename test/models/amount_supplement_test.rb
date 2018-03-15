require "test_helper"

describe AmountSupplement do
  let(:amount_supplement) { AmountSupplement.new }

  it "must be valid" do
    value(amount_supplement).must_be :valid?
  end
end
