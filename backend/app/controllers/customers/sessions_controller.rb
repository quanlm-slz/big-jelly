# frozen_string_literal: true

class Customers::SessionsController < Devise::SessionsController
  def respond_with(customer, **options)
    sign_out
    respond_with_success(customer,with_profile: true, **options)
  end

  def respond_to_on_destroy
    respond_with_success(nil)
  end
end
