Rails.application.routes.draw do
 namespace :api, defaults: {format: :json} do
   resources :projects, only: [:index, :create]
   resource :user, only: [:create]
   resource :session, only: [:create, :destroy, :show]
 end
root to: 'static_page#root'
end
