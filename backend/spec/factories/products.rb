# == Schema Information
#
# Table name: products
#
#  id          :uuid             not null, primary key
#  description :string(300)      not null
#  note        :string(300)
#  price       :integer
#  title       :string(100)      not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
FactoryBot.define do
  factory :product do
    title { Faker::Food.dish }
    description  { Faker::Food.description }
    note { Faker::Lorem.sentence }
    price { Faker::Number.number(digits: 5) }
  end
end
