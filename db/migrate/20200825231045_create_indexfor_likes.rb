class CreateIndexforLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :indexfor_likes do |t|
      add_index :likes, [:liker_id, :video_id], unique: true
    end
  end
end
