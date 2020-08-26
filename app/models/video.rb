class Video < ApplicationRecord
    validates :title, :description, :views, :user_id, presence:true


   belongs_to :user
   
   has_one_attached :video

   has_one_attached :photo

   has_many :likes
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Like

end
