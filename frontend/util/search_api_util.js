export const fetchSearch = function(success, search){
    $.ajax({
      method: "GET",// ,
      url: "api/search",//,
      success,
      data: {data: search},
      error: () => console.log('error')
    });
  };
