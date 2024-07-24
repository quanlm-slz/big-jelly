# frozen_string_literal: true

module ResponseHelper
  def respond_with_success(data, options: {})
    render json: {
      status: 'success',
      code: options.fetch(:code, 200),
      data: data ? ActiveModelSerializers::SerializableResource.new(data) : nil
    }, status: options.fetch(:code, 200)
  end
end
