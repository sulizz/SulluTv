Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    root to: 'static_pages#root'
    
    namespace :api, defaults: {format: :json} do 
        resources :users, only: [:show, :create]
        resource :session, only: [:show, :create, :destroy]
        resources :videos, only: [:index, :create, :update, :show, :destroy] 
        
    end

end

#     Prefix Verb   URI Pattern               Controller#Action
# api_videos GET    /api/videos(.:format)     api/videos#index {:format=>:json}
#            POST   /api/videos(.:format)     api/videos#create {:format=>:json}
#  api_video GET    /api/videos/:id(.:format) api/videos#show {:format=>:json}
#            PATCH  /api/videos/:id(.:format) api/videos#update {:format=>:json}
#            PUT    /api/videos/:id(.:format) api/videos#update {:format=>:json}
#            DELETE /api/videos/:id(.:format) api/videos#destroy {:format=>:json}
