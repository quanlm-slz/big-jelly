# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Customers::Registrations', type: :request do
  describe 'POST /customers/sign_up' do
    let(:params) do
      {
        customer: {
          email: 'test@example.com',
          password: 'password'
        }
      }
    end
    let(:request) { post('/customers/sign_up', params:) }

    context 'when valid input request' do
      it { expect { request }.to change(Users::Customer, :count).by(1) }
    end

    context 'when invalid input response' do
      before { request }

      it_behaves_like 'successful_response'
    end
  end
end
