Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, default: :json do
    resources :users, only: %i(create)
    resource :session, only: %i(create destroy)
  end
  root to: "static_pages#root"
end
