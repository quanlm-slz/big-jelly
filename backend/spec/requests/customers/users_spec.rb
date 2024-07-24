# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Customers::Users', type: :request do
  let(:customer) { create(:user, :customer) }

  describe 'GET /me' do
    let(:request) { get('/customers/me', headers: auth_header) }

    context 'when get customer information after customer signed_in response' do
      include_context 'when customer signed in'

      before { request }

      it_behaves_like('successful_response')
    end

    context 'when get customer information withou customer signed_in response' do
      let(:auth_header) { {} }

      before { request }

      it { expect(response).to have_http_status(401) }
      it { expect(respond_body.keys).to include('status', 'code', 'message') }
    end
  end
end
