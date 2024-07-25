# frozen_string_literal: true

module ErrorHelper
  extend ActiveSupport::Concern

  included do
    rescue_from ActiveRecord::RecordInvalid, with: :respond_invalid_record
  end

  def respond_invalid_record(error)
    response_error(error.record.errors.full_messages, code: 422)
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
