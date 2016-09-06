json.array! @projects do |project|

    json.(project,:id, :title, :description, :photo_url,
     :end_date, :goal, :category, :funded, :short)

    json.owner project.owner.username

end
