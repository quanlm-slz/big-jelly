# frozen_string_literal: true

class Customers::RegistrationsController < Devise::RegistrationsController
  def create
    super { |customer| raise ActiveRecord::RecordInvalid, customer unless customer.persisted? }
  end

  def respond_with(customer, **_options)
    sign_out
    respond_with_success(customer, options: { status: 201 })
  end
end
