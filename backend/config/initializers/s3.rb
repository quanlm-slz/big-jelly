client = Aws::S3::Client.new(
  region: "ap-southeast-1",
  access_key_id: Rails.application.credentials.dig(:aws, :access_key_id),
  secret_access_key: Rails.application.credentials.dig(:aws, :secret_access_key)
)

PRESIGNER = Aws::S3::Presigner.new(client:)
