class CreateAmountsSupplements < ActiveRecord::Migration[5.1]
  def change
    create_table :amounts_supplements do |t|
      t.integer :amount_id, :null => false
      t.integer :supplement_id, :null => false

      t.timestamps
    end

    add_index :amounts_supplements, [:amount_id, :supplement_id]
  end
end
