json.array! @projects do |project|

    json.(project,:id, :title, :description, :photo_url,
     :end_date, :goal, :category, :funded)

    json.owner project.owner.username

end
