class CreatePlasticItems < ActiveRecord::Migration[5.2]
  def change
    create_table :plastic_items do |t|
      t.string :name
      t.numeric :weight_gram
      t.boolean :recyclable
      t.string :description
      t.string :plastic_type
      t.string :default_calc_mode
      t.belongs_to :waste_group, index: true
      t.timestamps
    end
  end
end
