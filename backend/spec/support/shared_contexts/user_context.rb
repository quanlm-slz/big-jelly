# frozen_string_literal: true

require 'rails_helper'
require 'devise/jwt/test_helpers'

RSpec.shared_context 'when customer signed in' do
  let(:auth_header) do
    Devise::JWT::TestHelpers.auth_headers({}, customer)
  end
end
