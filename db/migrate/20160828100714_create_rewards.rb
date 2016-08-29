class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.string :title,  null: false
      t.string :description,  null: false
      t.integer :amount, null: false
      t.integer :project_id, null: false
      t.integer :limit

      t.timestamps null: false
    end
    add_index :rewards, :project_id
  end
end
