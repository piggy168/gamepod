export const ProjectConstants = {
   RECEIVE_PROJECTS: "RECEIVE_PROJECTS",
   REQUEST_PROJECTS: "REQUEST_PROJECTS",
   REQUEST_DETAIL: "REQUEST_DETAIL",
   RECEIVE_DETAIL: "RECEIVE_DETAIL",
   CREATE_PROJECT: "CREATE_PROJECT",
   BACK_PROJECT: "BACK_PROJECT",
   UPDATE_DETAIL: "UPDATE_DETAIL"
 };

export const requestProjects = () => (
  {type: ProjectConstants.REQUEST_PROJECTS
});

export const receiveProjects = (projects) => ({
  type: ProjectConstants.RECEIVE_PROJECTS,
  projects
});

export const requestDetail = (id) => ({
  type: ProjectConstants.REQUEST_DETAIL,
  id
});

export const receiveDetail = (detail) => ({
  type: ProjectConstants.RECEIVE_DETAIL,
  detail
});

export const updateDetail = (project) => ({
  type: ProjectConstants.UPDATE_DETAIL,
  project
});

export const createProject = (project) => ({
  type: ProjectConstants.CREATE_PROJECT,
  project
});

export const backProject = (userID, rewardID) => ({
  type: ProjectConstants.BACK_PROJECT,
  userID,
  rewardID
});
