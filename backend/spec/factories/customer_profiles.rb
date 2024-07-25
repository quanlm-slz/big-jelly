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
FactoryBot.define do
  factory :customer_profile do
    association :user, :customer
    firstname { Faker::Name.first_name }
    lastname { Faker::Name.last_name }
    gender { %i[male female].sample }
    birthday { Faker::Date.birthday }
  end
end
