class CreateProducts < ActiveRecord::Migration[7.1]
  def change
    create_table :products, id: :uuid do |t|
      t.string    :title, null: false, limit: 100
      t.string    :description, null: false, limit: 300
      t.string    :note, limit: 300
      t.integer   :price
      t.timestamps
    end
  end
end
