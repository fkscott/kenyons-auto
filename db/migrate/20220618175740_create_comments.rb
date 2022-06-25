class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.string :submitter
      t.string :body
      t.belongs_to :vehicle, null: false, foreign_key: true

      t.timestamps
    end
  end
end
