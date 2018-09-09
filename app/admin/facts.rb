ActiveAdmin.register Fact do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :title, :category, :description


#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

form do |f|
  f.semantic_errors # shows errors on :base
  f.inputs do
    f.input :title
    f.input :category, :as => :select, :collection => ['plastic']
    f.input :description, as: :froala_editor
  end
  f.actions         # adds the 'Submit' and 'Cancel' buttons
end

end
