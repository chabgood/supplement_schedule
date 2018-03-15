require "test_helper"

describe Brand do
  let(:brand) { Brand.new }

  it "must be valid" do
    value(brand).must_be :valid?
  end
end
