class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|

      t.string :title, null:false
      t.string :description, null:false
      t.string :video_url, null:false
      t.string :thumbnail_url
      t.integer :views, null:false 
      t.integer :user_id, null:false
      t.timestamps
    end

    add_index :videos, :user_id
  end
end
