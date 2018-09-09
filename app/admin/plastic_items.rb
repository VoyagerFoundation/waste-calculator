ActiveAdmin.register PlasticItem do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :name, :description, :weight_gram, :plastic_type, :recyclable, :waste_group_id, :default_calc_mode

form do |f|
  f.semantic_errors # shows errors on :base
  f.object.recyclable = true
  f.object.plastic_type = 'PET'
  f.object.default_calc_mode = 'weekly'

  f.inputs do
    f.input :name
    f.input :description
    f.input :weight_gram, label: 'Weight (g)'
    f.input :plastic_type, :as => :radio, :collection => ['PET','HDPE','PVC','LDPE']
    f.input :recyclable, label: 'Recyclable'
    f.input :default_calc_mode, :as => :radio, :collection => ['weekly', 'monthly']
    f.input :waste_group_id, :label => 'Group', :as => :radio, :collection => WasteGroup.all
  end
  f.actions         # adds the 'Submit' and 'Cancel' buttons
end

end
