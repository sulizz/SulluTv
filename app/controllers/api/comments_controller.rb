class Api::CommentsController < ApplicationController

    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id

        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update 
        @comment = Comment.find(params[:id])

        if current_user.id == @comment.user_id
            if @comment.update(edit_params)
                render :show
            else 
                render json: @comment.errors.full_messages, status: 422
            end
        end
    end

    def destroy

        @comment = Comment.find(params[:id])
        if @comment.user_id == current_user.id
            @comment.destroy
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:body, :user_id, :video_id)
    end

    def edit_params 
        params.require(:comment).permit(:body)
    end

end
