Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  get 'cheat_sheet', to: 'cheat_sheet#show'
  get '/', to: 'plastic_calculator#calculator'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
