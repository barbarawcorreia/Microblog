class CommentsController < ApplicationController

  def create
    @post = Post.find(params[:id])
    @comment = @post.comment.create(comment_params)
    @comment.save!
    redirect to welcome_index_path
  end

  def destroy
    @post = Post.find(params[:id])
    @comment = @post.comment.find(params[:id])
    @comment.destroy
    redirect_to welcome_index_path
  end

  private

  def comment_params
    params.require(:comment).permit(:commenter, :body)
  end
end

