@videos.each do |video|
    json.set! video.id do 
        json.extract! video, :id, :title, :description, :views, :thumbnail_url 
        json.extract! video.user, :username
    end
end

# {
#     video.id {
#                 id: --
#                 title: --
#                 description --
#                 views -- 
#                 thumbnail_url --
#                 user -- {
#                         }
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