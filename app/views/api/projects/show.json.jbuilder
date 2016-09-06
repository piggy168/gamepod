
json.(@project, :id, :title, :description, :photo_url, :end_date, :goal, :category, :funded, :short)
json.owner @project.owner.username
json.reward @project.rewards
json.backers @project.backers.group(:user_id).count.keys.count
