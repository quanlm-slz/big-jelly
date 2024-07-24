# frozen_string_literal: true

def respond_body
  JSON.parse(response.body)
end
