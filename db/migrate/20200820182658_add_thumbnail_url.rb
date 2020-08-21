class AddThumbnailUrl < ActiveRecord::Migration[5.2]
  def change

    add_column :videos, :thumbnail_url, :string
  end
end
