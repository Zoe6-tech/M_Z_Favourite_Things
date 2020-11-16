let errorCodes = {
    404: "Not Found! Oh noes! Check your URL",
    500: "Ya sorry can't help you... the server is just borked",
    403: "You shall not pass! Unless you have creds. Then sure go ahead.",
    503: "Service is unavailable! The servers are all having a coffee break."
}

 async function fetchData(datasource){
     let resource = await fetch(datasource).then(response=>{
         //await: wait bus in bus stop, waiting fetch call success or fail
         //check the error, if exist, return
            if (response.status !==200){//!== is not equal
                throw new error(`Danger Will Robinson! Here there be monsters! Error ${response.status}`);
            }
            //return error or data(success)
            return response;
     })
         //if we get success, then we can return back our resourec after we parse it into plain JS
         let dataset = await resource.json();
         return dataset[0];
         debugger;
        }
        

  //export { fetchData };
  
async function postData(sourceURL) {
    // use fetch or Axios to post to a database here

    return "You are using the postData API endpoint";
}


export { fetchData, postData };