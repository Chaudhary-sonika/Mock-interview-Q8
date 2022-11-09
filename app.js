var outputDiv = document.querySelector("#output");
var fetchAPI = document.querySelector("#fetch-api");
var url = "https://quick-access-api.desaihetav.repl.co/";
 function getData() {
    fetch (url)
    .then(response => response.json())
    .then(data => { 
        // console.log(data);
        outputDiv.innerText = data.message
    })
 }

 fetchAPI.addEventListener("click", getData);
 
// Question:  Display result of this API's response :("----------")  
//  on the Screen