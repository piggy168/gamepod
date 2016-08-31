export const fetchProjects = function(success){
    $.ajax({
      method: "GET",// ,
      url: "api/projects",//,
      success,
      error: () => console.log('error')
    });
  };
