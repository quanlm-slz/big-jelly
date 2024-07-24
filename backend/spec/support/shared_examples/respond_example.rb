# frozen_string_literal: true

require 'rails_helper'

RSpec.shared_examples 'successful_response' do
  it { expect(response).to have_http_status(:success) }
  it { expect(respond_body.keys).to include('status', 'code', 'data') }
end
