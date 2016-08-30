
15.times do |i|
  Project.create(
      title: "project #{i}",
      description: "this is going to be a long description for testing",
      creater_id: i,
      end_date: "2016-8-31",
      photo_url: "http://ualr.edu/itservices/files/2006/10/projectManagement.jpg",
      goal: 10,
      funded: i,
      category: "board game"
    )
  end
