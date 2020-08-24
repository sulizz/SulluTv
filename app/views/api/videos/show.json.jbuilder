json.extract! @video, :id, :title, :description, :views, :thumbnail_url
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