class Api::LikesController < ApplicationController
    
    def create
        @like = Like.new

        @like.liker_id = current_user.id #setting the liker id to be current_user.id 
        @like.video_id = params[:id]  #  setting the video id to be the video which we got from params from ajax post request
        if @like.save               
            @video = Video.find_by(id: params[:id])    #if saves video id = like.video
            render 'api/videos/show'
        else

            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy 
        @like = Like.find_by(liker_id: current_user.id, video_id: params[:id])
        @like.destroy
        @video = @like.video
        render 'api/videos/show'
    end

    # private
    # def like_params
    #     # debugger
    #     params.require(:like).permit(:liked, :video_id)
    # end

end
