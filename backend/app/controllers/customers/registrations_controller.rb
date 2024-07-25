# frozen_string_literal: true

class Customers::RegistrationsController < Devise::RegistrationsController
  def create
    ActiveRecord::Base.transaction do
      super do |customer|
        raise ActiveRecord::RecordInvalid, customer unless customer.persisted? && !customer.profile.nil?
      end
    end
  end

  def respond_with(customer, **_options)
    sign_out
    respond_with_success(customer, with_profile: true, code: 201)
  end
end
