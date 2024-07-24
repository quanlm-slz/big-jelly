# frozen_string_literal: true

class Customers::UsersController < ApplicationController
  before_action :authenticate_customer!

  def me
    respond_with_success(current_customer)
  end
end
