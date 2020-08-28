class Like < ApplicationRecord
    
    validates :liker_id, :video_id, presence: true
    validates :video_id, uniqueness: {scope: :liker_id}

    belongs_to :user,
         foreign_key: :liker_id,
         class_name: :User

    belongs_to :video,
        foreign_key: :video_id,
        class_name: :Video

end
