Rails.application.routes.draw do

  get 'page/index' => 'posts#start'

  # Telas adm
  get 'posts/start' => 'posts#start'
  resources :posts
  get 'welcome/index' => 'welcome#index'
  get 'welcome/show' => 'welcome#show'

  get 'myposts' => 'welcome#myposts' # rota de exibição
  put 'myposts/:id/like' => 'welcome#like' # rota de exibição
  post 'myposts/:id/like' => 'welcome#like'  # rota de ação
  put 'myposts/:id/dislike' => 'welcome#dislike' # rota de acão
  post 'myposts/:id/dislike' => 'welcome#dislike'  # rota de ação

end
