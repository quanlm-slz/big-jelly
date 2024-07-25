# frozen_string_literal: true

class CreateCustomerProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :customer_profiles, id: :uuid do |t|
      t.references :user, type: :uuid
      t.string :firstname, null: false
      t.string :lastname, null: false
      t.date :birthday, null: false
      t.integer :gender, null: false
      t.timestamps
    end

    add_index :customer_profiles, :gender
  end
end
