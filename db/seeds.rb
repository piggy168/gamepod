
15.times do |i|
  Project.create(
      title: "project #{i}",
      description: "this is going to be a long description for testing",
      creater_id: i,
      end_date: "2016-8-31",
      photo_url: "http://cdn.skim.gs/images/c_fill,dpr_1.0,h_391,w_695/classic-board-game-feature/how-classic-board-games-can-be-fun-and-educational",
      goal: 10,
      funded: i,
      category: "board game"
    )
  end

  15.times do |i|
    User.create(
      username: "User #{i}",
      password_digest: "adfa",
      session_token: "#{i}",
    )
  end

  15.times do |i|
    Reward.create(
      title: "Reward #{i}",
      description: "hello",
      amount: i,
      project_id: i/2+1,
      limit: i
    )
  end

  30.times do |i|
    Backer.create(
      user_id: i/5+1,
      reward_id: 15-(i/2)
    )
  end
