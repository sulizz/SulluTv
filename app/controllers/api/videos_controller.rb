class Api::VideosController < ApplicationController

    skip_before_action :verify_authenticity_token
    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
    end

    def create
        @video = Video.new(video_params)
        
        @video.user_id = current_user.id;
        @video.views = 1;
        if @video.save

            render json: :show
        else 
            render json: @video.errors.full_messages, status: 401
        end
    end

    def update

        
        @video = Video.find(video_params[:id])

        if @video.update(video_params)
            render :show
        else
            render json: @video.errors.full_messages, status: 401
        end
    end



    def destroy
        @video = Video.find(params[:id])
        @video.destroy
        render :show 
    end

    private

    def video_params 
        params.require(:video).permit(:title, :description, :video, :photo) 
    end
    # :video passed down from form
    #photo passed down from

end
