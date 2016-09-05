export const fetchProjects = function(success){
    $.ajax({
      method: "GET",// ,
      url: "api/projects",//,
      success,
      error: () => console.log('error')
    });
  };

export const fetchDetail = function(success, id){

  $.ajax({
    method: "GET",// ,
    url: `api/projects/${id}`,//
    success,
    error: () => console.log('error')
  });
  };

export const saveProject = function(success, project){
  $.ajax({
    method: "POST",// ,
    url: `api/projects/`,//
    dataType: 'json',
    data: {project: project},
    success,
    error: () => console.log('error')
  });
  };
