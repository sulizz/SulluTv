class Video < ApplicationRecord
    validates :title, :description, :views, :user_id, presence:true


   belongs_to :user
   has_one_attached :video
   has_one_attached :photo


end
