# API Endpoints
## HTML API
### Root
 - `GET /` - loads React web api-endpoints

 ## JSON API

 ### Users
 - `POST /api/users`
 - `PATCH /api/users`

 ### Session
 - `POST /api/session`
 - `DELET /api/session`
 - `GET /api/session`

 ### Projects
 - `GET /api/projects`
  - Projects index/search
  - accepts `category` query param to list projects by category
 - `POST /api/projects`
 - `GET /api/projects/:id`
 - `PATCH /api/projects/:id`
 - `DELETE /api/projects:id`

 ### Rewards
 - `GET /api/rewards/`
 - `POST /api/rewards/`
 - `GET /api/rewards/:id`
 - `DELETE /api/rewards/:id`

 ### Backers
 - `POST /api/projects/:project_id/:Reward_id`
