json.extract! @comment, :id, :body, :user_id, :video_id 
json.extract! @comment.user, :username
