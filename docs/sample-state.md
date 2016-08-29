```json
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createProject: {errors: ["body can't be blank"]}
  },
  current_project: {
    1: {
      title: "Sample State",
      description: "is useful to plan",
      photo_url: "www.google.com",
      creater_id: 1,
      category: "boardgame"
      end_date: "09-05"
      rewards: {
        1: {
          id: 1
          title: "moral support",
          description: "support me for a dollar",
          amount: 1,
          project_id: 1,
          limit: 5
        }
      }
    }
  },
  category: "boardgame",
  all_projects: [project object1, project object2, ...]
}
