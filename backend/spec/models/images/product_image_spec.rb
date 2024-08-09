# == Schema Information
#
# Table name: images
#
#  id           :uuid             not null, primary key
#  type         :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  imageable_id :uuid
#
# Indexes
#
#  index_images_on_imageable_id  (imageable_id)
#  index_images_on_type          (type)
#
require 'rails_helper'

RSpec.describe Images::ProductImage, type: :model do
  let(:image) { build(:images_product_image) }

  describe "validation" do
    it { expect(image).to be_valid }
  end

  describe "association" do
    it { expect(image).to belong_to(:product) }
  end

  describe "after created" do
    let(:image) { create(:images_product_image) }

    it { expect(image.upload_url).not_to be_nil }
  end
end
