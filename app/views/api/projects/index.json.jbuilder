json.boardgames do
   json.array! @boardgames do |boardgame|
      json.(boardgame,:id, :title, :description, :photo_url,
       :end_date, :goal, :category, :funded, :short)
      json.owner boardgame.owner.username
  end
end


  json.videogames do
  json.array! @videogames do |videogame|
      json.(videogame,:id, :title, :description, :photo_url,
       :end_date, :goal, :category, :funded, :short)
      json.owner videogame.owner.username
  end
end

json.mobilegames do
  json.array! @mobilegames do |mobilegame|
      json.(mobilegame,:id, :title, :description, :photo_url,
       :end_date, :goal, :category, :funded, :short)
      json.owner mobilegame.owner.username
  end
end
