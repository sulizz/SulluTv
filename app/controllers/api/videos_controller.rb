class Api::VideosController < ApplicationController

    skip_before_action :verify_authenticity_token

    def index
        @videos = Video.all
        render :index
    end

    def show
    end

    def create†
        @video = Video.new(video_params)

        if @video.save
            render json: :create
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
        params.require(:video).permit(:title, :description, :views, :user_id) 
    end
    # :video passed down from form

end
