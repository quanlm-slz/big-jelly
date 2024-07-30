# frozen_string_literal: true

module ErrorHelper
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :respond_invalid_record
  end

  def respond_invalid_record(error)
    errors = error.record.errors.to_hash(full_messages: true)
    error_messages = errors.transform_values(&:first)
    response_error(error_messages, code: 422)
  end

  private

  def response_error(message, **options)
    code = options.fetch(:code, 500)
    render json: {
      status: 'error',
      code:,
      message:
    }, status: code
  end
end
