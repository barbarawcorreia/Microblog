class WelcomeController < ApplicationController
    def index
    end

    def myjson
        @posts = Post.all

        respond_to do |format|
          format.html
          format.json { render json: @posts }
        end

      end
# contar a qt de likes aqui dentro.
end
