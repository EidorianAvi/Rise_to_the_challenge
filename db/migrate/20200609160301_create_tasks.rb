class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.integer :length
      t.boolean :urgency
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
