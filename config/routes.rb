Rails.application.routes.draw do

  get 'page/index' => 'posts#start'

  # Telas adm
  get 'posts/start' => 'posts#start'
  resources :posts
  get 'welcome/index' => 'welcome#index'
  get 'welcome/show' => 'welcome#show'

  # get 'posts/index' => 'posts#index'
  # get 'microblog/start' => 'microblog#start'
  # get 'microblog/new' => 'microblog#new'
  # post 'microblog/create' => 'microblog#create'
  # resources :posts

  # get 'myjson' => 'posts#myjson'
  # get 'getmyjson' => 'posts#getmyjson'
  get 'myjson' => 'welcome#myjson'
  get 'posts/edit/:id' => 'posts#edit'
end
