# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :customers, class_name: Users::Customer.name, failure_app: FailureApp, skip: :all

  as :customer do
    get '/customers/me', to: 'customers/users#me'
    post '/customers/sign_in', to: 'customers/sessions#create'
    post '/customers/sign_up', to: 'customers/registrations#create'
    delete '/customers/sign_out', to: 'customers/sessions#destroy'
  end

  get 'up' => 'rails/health#show', as: :rails_health_check
end
