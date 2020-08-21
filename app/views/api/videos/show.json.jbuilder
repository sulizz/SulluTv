json.extract! @video, :id, :title, :description, :views, :thumbnail_url,
json.extract! video.user, :username

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