## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - ProjectOverview (for featured projects)
 - Category
  * Projects
 - Header
  * Search

**CategoryContainer**
 - ProjectsOverview

**ProjectContainer**
 - ProjectHeader
 - ProjectDetail
 - Reward

**RewardContainer**
 - RewardDetail


**SearchResultsContainer**
 - Search
 - NoteIndex

**UserContainer**
 - UserInfo
 - Projects

**NewProjectContainer**
 - NewProjectBasic
 - NewProjectDetail
 - NewReward

**NewProjectBasic**
 - NewProjectBasic

**NewProjectDetail**
 - NewProjectDetail

**NewReward**
 - NewReward

**ProjectSearch**
 + AutoSearch
 * AutoSearchResults


## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/" | "HomeContainer" |
| "/projects/:projectId" | "ProjectContainer" |
| "/projects/:category" | "CategoryContainer"|
| "/home/search-results" | "SearchResultsContainer"
| "/new-project" | "NewNoteContainer" |
| "/search" | "ProjectSearch" |
