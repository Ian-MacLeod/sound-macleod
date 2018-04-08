class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    if @comment.save
      render "api/comments/show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if !@comment
      render json: "Comment does not exist".to_json, status: 404
    elsif current_user != @comment.user
      render json: "You don't own that comment".to_json, status: 422
    else
      @comment.destroy!
      render "api/comments/show"
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:track_id, :body)
  end
end
