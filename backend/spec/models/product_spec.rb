# == Schema Information
#
# Table name: products
#
#  id          :uuid             not null, primary key
#  description :string(300)      not null
#  note        :string(300)
#  price       :integer
#  title       :string(100)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'rails_helper'

RSpec.describe Product, type: :model do
  let(:product) { build(:product) }

  describe "validation" do
    it { expect(product).to be_valid }
  end
end
