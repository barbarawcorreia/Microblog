class WelcomeController < ApplicationController
    protect_from_forgery except: :like

    def index
    end

    def myposts
        @posts = Post.all

        respond_to do |format|
          format.html
          format.json { render json: @posts }
        end

    end
    # contar a qt de likes aqui dentro.

    def like
        @post = Post.find(params[:id])

        @post.increment!(:like)

        respond_to do |format|
            format.html
            # format.json {render json: {:success => true} }
            format.json {render json: @post.increment!(:like,by = 1)}
        end

    end


    def dislike
        @post = Post.find(params[:id])

        @post.increment!(:dislike)

        respond_to do |format|
            format.html
            format.json {render json: @post.increment!(:dislike,by = 1)}
        end
    end
end
