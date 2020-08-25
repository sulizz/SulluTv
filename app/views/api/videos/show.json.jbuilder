json.extract! @video, :id, :title, :description, :views,  :user_id, :created_at, :updated_at
json.extract! @video.user, :username
json.videoUrl url_for(@video.video)

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