class CreateImages < ActiveRecord::Migration[7.1]
  def change
    create_table :images, id: :uuid do |t|
      t.string :type, null: false

      t.timestamps
    end

    add_index :images, :type
  end
end
