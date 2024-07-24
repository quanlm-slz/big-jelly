# frozen_string_literal: true

class FailureApp < Devise::FailureApp
  def respond
    self.status = 401
    self.content_type = 'application/json'
    self.response_body = {
      status: 'error',
      code: '401',
      message: i18n_message
    }.to_json
  end
end
