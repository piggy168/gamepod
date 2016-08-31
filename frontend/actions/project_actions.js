export const ProjectConstants = {
   RECEIVE_PROJECTS: "RECEIVE_PROJECTS",
   REQUEST_PROJECTS: "REQUEST_PROJECTS"
 };

export const requestProjects = () => (
  {type: ProjectConstants.REQUEST_PROJECTS
});

export const receiveProjects = (projects) => ({
  type: ProjectConstants.RECEIVE_PROJECTS,
  projects
});
