# frozen_string_literal: true

# == Schema Information
#
# Table name: customer_profiles
#
#  id         :uuid             not null, primary key
#  birthday   :date             not null
#  firstname  :string           not null
#  gender     :integer          not null
#  lastname   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :uuid
#
# Indexes
#
#  index_customer_profiles_on_gender   (gender)
#  index_customer_profiles_on_user_id  (user_id)
#
class CustomerProfile < ApplicationRecord
  belongs_to :user, class_name: 'Users::Customer', dependent: :destroy

  validates :birthday, presence: true
  validates :firstname, presence: true
  validates :lastname, presence: true
  validates :gender, presence: true

  enum gender: {
    female: 0,
    male: 1
  }
end
