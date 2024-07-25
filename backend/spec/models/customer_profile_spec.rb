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
require 'rails_helper'

RSpec.describe CustomerProfile, type: :model do
  let(:profile) { build(:customer_profile) }

  describe 'validation' do
    it { expect(profile).to be_valid }
    it { expect(profile).to validate_presence_of(:firstname) }
    it { expect(profile).to validate_presence_of(:lastname) }
    it { expect(profile).to validate_presence_of(:gender) }
    it { expect(profile).to validate_presence_of(:birthday) }
  end

  describe 'association' do
    it { expect(profile).to belong_to(:user) }
  end
end
