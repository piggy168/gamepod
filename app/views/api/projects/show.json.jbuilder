
json.(@project, :id, :title, :description, :photo_url, :creater_id, :end_date, :goal, :category, :funded, :short)
json.owner @project.owner.username
json.owner_photo_url @project.owner.photo_url
json.reward @project.rewards
json.backers @project.backers.group(:user_id).count.keys.count
