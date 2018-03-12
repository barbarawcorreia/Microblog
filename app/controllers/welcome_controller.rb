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

      # def getmyjson
      #   @tasks = Task.find(params[:id].to_i); # Lembrete: Criar model e migration para @tasks nome e signo.
      #   render :text => @tasks.to_json
      # end
end
