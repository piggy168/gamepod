class CreateProjects < ActiveRecord::Migration
  def change
    create_table :projects do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :photo_url, null: false
      t.integer :creater_id, null: false
      t.date :end_date, null: false
      t.integer :goal, null: false
      t.string :category, null: false

      t.timestamps null: false
    end
    add_index :projects, :creater_id
  end
end
