class Comment < ApplicationRecord
    validates :body, :user_id, :video_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User 
        
    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

end
