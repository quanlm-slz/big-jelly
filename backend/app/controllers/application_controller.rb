# frozen_string_literal: true

class ApplicationController < ActionController::API
  include ResponseHelper
  include ErrorHelper

  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    return unless resource_class == Users::Customer

    devise_parameter_sanitizer.permit(
      :sign_up,
      keys: [profile_attributes: %i[firstname lastname birthday gender]]
    )
  end
end
