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

RSpec.describe Image, type: :model do
  let(:image) { build(:image) }

  describe 'validation' do
    it { expect(image).to be_invalid }
    it { expect(image).to validate_presence_of(:type) }
  end
end
