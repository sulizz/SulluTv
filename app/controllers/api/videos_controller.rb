class Api::VideosController < ApplicationController

    skip_before_action :verify_authenticity_token
    # before_action :require_logged_in, only: [:create, :update, :destroy]
    def index
        @videos = Video.all
        render :index
    end

    def show
        @video = Video.find(params[:id])
        if @video
            #increment views by 1 and save
            @video.views += 1
            @video.save
            render :show
        else
            render nil, status: 404
        end
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

        @video = Video.find(params[:id])

        if current_user.id == @video.user_id
            if @video.update(edit_params)
                render :show
            else
                render json: @video.errors.full_messages, status: 401
            end
        end
    end


    def destroy
        @video = Video.find(params[:id])

        if current_user.id == @video.user_id
            @video.destroy
            render :show 
        else 
            render json: @video.errors.full_messages, status: 401
        end

    end

    private

    def video_params 
        params.require(:video).permit(:title, :description, :video, :photo) 
    end
    # :video passed down from form
    #photo passed down from

    def edit_params 
        params.require(:video).permit(:title, :description, :photo)
    end

end
