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
class Product < ApplicationRecord
end
