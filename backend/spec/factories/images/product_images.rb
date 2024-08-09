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
FactoryBot.define do
  factory :images_product_image, class: 'Images::ProductImage' do
    product    
  end
end
