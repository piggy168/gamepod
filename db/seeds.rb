
5.times do |i|
  Project.create(
      title: "project #{i}",
      description: "this is going to be a long description for testing",
      creater_id: i+1,
      end_date: "2016-10-#{i}",
      photo_url: "http://cdn.skim.gs/images/c_fill,dpr_1.0,h_391,w_695/classic-board-game-feature/how-classic-board-games-can-be-fun-and-educational",
      goal: 10,
      funded: i,
      category: "boardgame",
      short: "this is the short description"
    )
  end

  5.times do |i|
    Project.create(
        title: "project #{i+5}",
        description: "this is going to be a long description for testing",
        creater_id: i+1,
        end_date: "2016-10-#{i}",
        photo_url: "http://cdn.skim.gs/images/c_fill,dpr_1.0,h_391,w_695/classic-board-game-feature/how-classic-board-games-can-be-fun-and-educational",
        goal: 10,
        funded: i,
        category: "videogame",
        short: "this is the short description"
      )
    end

  10.times do |i|
    Project.create(
        title: "project #{i+30}",
        description: "this is going to be a long description for testing",
        creater_id: i+1,
        end_date: "2016-10-#{i}",
        photo_url: "http://cdn.skim.gs/images/c_fill,dpr_1.0,h_391,w_695/classic-board-game-feature/how-classic-board-games-can-be-fun-and-educational",
        goal: 10,
        funded: i,
        category: "mobilegame",
        short: "this is the short description"
      )
    end

  15.times do |i|
    User.create(
      username: "User #{i}",
      password_digest: "adfa",
      session_token: "#{i}",
      photo_url: "http://www.caretofun.net/wp-content/uploads/2015/07/beautiful-girl-profile-caretofun.net-5.jpg",
      bio:"Synopsis Aviator Amelia Earhart was born on July 24, 1897 in Atchison, Kansas. In 1923, Earhart, fondly known as became the 16th woman to be issued a pilot's license. She had several notable flights, becoming the first woman to fly across the Atlantic Ocean in 1928, as well as the first person to fly over both the Atlantic and Pacific. In 1937, she mysteriously disappeared while trying to circumnavigate the globe from the equator. Since then, several theories have formed regarding Earhart's last days, many of which have been connected to various artifacts that have been found on Pacific islands—including clothing, tools and, more recently, freckle cream. Earhart was legally declared dead in 1939.",
      money: 100
    )
  end

  15.times do |i|
    Reward.create(
      title: "Reward #{i}",
      description: "hello",
      amount: i,
      project_id: i/2+1,
      limit: i,
      sold: i/2
    )
  end

  30.times do |i|
    Backer.create(
      user_id: i/5+1,
      reward_id: (15-(i/2))
    )
  end
