# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Customers::Sessions', type: :request do
  let(:customer) { create(:user, :customer) }
  let(:password) { 'password' }

  describe 'POST /customers/sign_in' do
    let(:params) do
      {
        customer: {
          email: customer.email,
          password:
        }
      }
    end
    let(:request) { post('/customers/sign_in', params:) }

    context 'when the correct password response' do
      before { request }

      it_behaves_like 'successful_response'
      it {
        expect(respond_body.dig('data', 'token')).not_to be_nil
      }
    end

    context 'when the inccorect password response' do
      let(:password) { 'incorrect password' }

      before { request }

      it { expect(response).to have_http_status(:unauthorized) }
      it { expect(respond_body.keys).to include('status', 'code', 'message') }
    end
  end

  describe 'DELETE /customers/sign_out' do
    let(:request) { delete('/customers/sign_out', headers: auth_header) }

    context 'when customer signed out request after signed in' do
      include_context('when customer signed in')

      it { expect { request }.to change(JwtDenylist, :count).by(1) }
    end

    context 'when customer signed out response after signed in' do
      include_context('when customer signed in')

      before { request }

      it_behaves_like 'successful_response'
    end
  end
end
