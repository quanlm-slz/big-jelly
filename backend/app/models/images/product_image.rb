# == Schema Information
#
# Table name: images
#
#  id         :uuid             not null, primary key
#  type       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
# Indexes
#
#  index_images_on_type  (type)
#
class Images::ProductImage < Image
  def prefix
    "products"
  end
end
