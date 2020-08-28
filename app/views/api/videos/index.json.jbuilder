@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title, :user_id, :description, :views, :created_at, :updated_at
        json.extract! video.user, :username
        json.uploader_id video.user.id
        json.videoUrl url_for(video.video)
        json.photoUrl url_for(video.photo)
        json.liked_by_current_user !!video.likes.find_by(liker_id: current_user ? current_user.id : 36)
    end
end

# {
#     video.id {
#                 id: --
#                 title: --
#                 description --
#                 views -- 
#                 thumbnail_url --
#                 user -- 
#                 video_url --
#                 json.photoUrl url_for(video.photo)
#              }
#     video.id {
#                 id: --
#                 title: --
#                 description --
#                 views -- 
#                 thumbnail_url --
#                 user -- 
#              }
# }

# json.extract! video, :likes_count, :liked_by_current_user