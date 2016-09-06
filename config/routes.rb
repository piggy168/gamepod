Rails.application.routes.draw do
 namespace :api, defaults: {format: :json} do
   resources :projects, only: [:index, :create, :show, :update, :delete, :edit]
   resource :user, only: [:create]
   resource :session, only: [:create, :destroy, :show]
   resource :backer, only: [:create]
 end
root to: 'static_page#root'
end
