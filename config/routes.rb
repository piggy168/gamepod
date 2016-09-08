Rails.application.routes.draw do
 namespace :api, defaults: {format: :json} do
   resources :projects
   resources :users, only: [:create, :show]
   resource :session, only: [:create, :destroy, :show]
   resource :backer, only: [:create]
   resources :search, only: [:index]
 end
root to: 'static_page#root'
end
