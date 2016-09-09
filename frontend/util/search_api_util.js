export const fetchSearch = function(success, search){
    $.ajax({
      method: "GET",// ,
      url: "api/search",//,
      success,
      data: {data: search},
      error: () => console.log('error')
    });
  };

  export const fetchCategory = function(success, search){
      $.ajax({
        method: "GET",// ,
        url: `api/search/${search}`,//,
        success,
        error: () => console.log('error')
      });
    };
