# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Customers::Registrations', type: :request do
  describe 'POST /customers/sign_up' do
    let(:params) do
      {
        customer: {
          email: 'test@example.com',
          password: 'password',
          profile_attributes: attributes_for(:customer_profile)
        }
      }
    end
    let(:request) { post('/customers/sign_up', params:) }

    context 'when valid input request' do
      it do
        expect { request }
          .to change(Users::Customer, :count).by(1)
          .and change(CustomerProfile, :count).by(1)
      end
    end

    context 'when valid input response' do
      before { request }

      it_behaves_like 'successful_response'
    end

    context 'when invalid input request' do
      let(:params) do
        {
          customer: {
            email: 'test@example.com',
            password: 'password'
          }
        }
      end

      it do
        expect { request }
          .to change(Users::Customer, :count).by(0)
          .and change(CustomerProfile, :count).by(0)
      end
    end

    context 'when invalid input response' do
      let(:params) do
        {
          customer: {
            email: 'test@example.com',
            password: 'password'
          }
        }
      end

      before { request }

      it { expect(response).to have_http_status(422) }
      it { expect(respond_body.keys).to include('status', 'code', 'message') }
    end
  end
end
