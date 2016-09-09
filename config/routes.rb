Rails.application.routes.draw do
 namespace :api, defaults: {format: :json} do
   resources :projects
   resources :users, only: [:create, :show, :update]
   resource :session, only: [:create, :destroy, :show]
   resource :backer, only: [:create]
   resources :search, only: [:index, :show]
 end
root to: 'static_page#root'
end
