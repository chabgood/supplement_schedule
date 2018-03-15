require "test_helper"

describe Amount do
  let(:amount) { Amount.new }

  it "must be valid" do
    value(amount).must_be :valid?
  end
end
