class CreateBrands < ActiveRecord::Migration[5.1]
  def change
    create_table :brands do |t|
      t.string :name
      t.string :short_name
      t.timestamps
    end
    Brand.create!(name: 'Standard Process', short_name: 'SP')
    add_reference :supplements, :brand, index: true
  end
end
