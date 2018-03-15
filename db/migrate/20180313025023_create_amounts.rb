class CreateAmounts < ActiveRecord::Migration[5.1]
  def change
    create_table :amounts do |t|
      t.integer :number

      t.timestamps
    end
    remove_column :supplements, :amount
  end
end
