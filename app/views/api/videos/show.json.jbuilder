json.extract! @video, :id, :title, :description, :views,  :user_id, :created_at, :updated_at
json.extract! @video.user, :username
json.videoUrl url_for(@video.video)
json.photoUrl url_for(@video.photo)

json.likes @video.likes.count
json.liked_by_current_user !!@video.likes.find_by(liker_id: current_user.id)
json.test 'test'


json.comments do
    @video.comments.each do |comment|
        json.set! comment.id do
            json.extract! comment, :id, :body, :user_id, :video_id
        end
    end
end



# {
    #     video.id {
#                 id: --
#                 title: --
#                 description --
#                 views -- 
#                 thumbnail_url --
#                 user --  n
#              }
# }