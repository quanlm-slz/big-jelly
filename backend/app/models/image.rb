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
class Image < ApplicationRecord
  validates :type, presence: true

  attr_reader :upload_url

  after_create :generate_upload_url, if: :id_previously_changed?

  def key
    "#{prefix}/#{id}"
  end

  def generate_upload_url
    @upload_url = PRESIGNER.presigned_request(:put_object, bucket: ENV.fetch("AWS_BUCKET", nil), key:)
  end
end
