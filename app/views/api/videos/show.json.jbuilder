json.extract! @video, :id, :title, :description, :views, :thumbnail_url
json.extract! video.user, :username
json.video_url video.video

# {
    #     video.id {
#                 id: --
#                 title: --
#                 description --
#                 views -- 
#                 thumbnail_url --
#                 user -- 
#              }
# }