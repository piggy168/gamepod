export const ProjectConstants = {
   RECEIVE_PROJECTS: "RECEIVE_PROJECTS",
   REQUEST_PROJECTS: "REQUEST_PROJECTS",
   REQUEST_DETAIL: "REQUEST_DETAIL",
   RECEIVE_DETAIL: "RECEIVE_DETAIL"
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
