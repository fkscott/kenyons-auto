Rails.application.routes.draw do
  get 'users/new'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'pages#index'

  get '/api/v1/vehicles/featured/', to: 'api/v1/vehicles#featured', via: :all

  namespace :api do
    namespace :v1 do
      resources :vehicles, param: :slug
      resources :comments, only: [:create, :destroy] 
    end
  end

  get '*path', to: 'pages#index', via: :all
end
