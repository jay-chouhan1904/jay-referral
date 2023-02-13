Rails.application.routes.draw do  
  devise_for :users, controllers: { registrations: 'registrations', sessions: 'sessions' }
  root 'home#index'
  get 'verify_current_user' => 'current_user#verify_current_user', format: :json
  post 'send_referral' => 'home#send_referral', format: :json
  get '*path', to: 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
