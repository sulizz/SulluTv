@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title, :description, :views, :thumbnail_url 
        json.extract! video.user, :username
        json.uploader_id video.user.id
        json.videoUrl url_for(video.video)
        json.photoUrl url_for(video.photo)
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
#                 
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