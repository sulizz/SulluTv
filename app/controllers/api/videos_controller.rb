class Api::VideosController < ApplicationController

    skip_before_action :verify_authenticity_token
    # before_action :require_logged_in, only: [:create, :update, :destroy]

    #todo optimize this

    def index
        # @likes = Like.all

        # @videos = Video.all.map do |video|
        #    video_likes = @likes.select {|like| like[:video_id] == video[:id]}
        #    #find all likes for current video. 
        #    #find if current video likes has user id and like.liked == true

        #     has_user_liked = !!video_likes.find do |like|
        #         like.liker_id = current_user.id && like.liked
        #     end

        #     video.liked_by_current_user = has_user_liked
        #     video.likes_count = video_likes.length
        #    video

        # end
        #get the like count for each video

        # render :index

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

 """
    likes
    [
        {
            video_id: 1,
            user_id: 56
        },
        {
            video_id: 2,
            user_id: 45
        },
        {
            video_id: 1,
            user_id: 46
        }
    ]
    """ 
    """
    video
    [
        {
            id: 1,
            title: '56'
        },
        {
            id: 2,
            title: '45'
        },
        {
            id: 1,
            title: '46'
        }
    ]
    """ 