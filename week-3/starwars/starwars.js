// declare any necessary variables

let queryType;
let itemID;

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'


const fetchData = () => {
     queryType = document.querySelector('#queryType').value;
     itemID = document.querySelector('#itemID').value;
     getFromSWAPI(queryType,itemID);
}


function getFromSWAPI(queryType,itemID) {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        updateInfo(data)  
    })
    .catch(function(err) {
        console.warn(err)
    })
};

const updateInfo = responseJSON => {
    const keys = Object.keys(responseJSON);
    document.querySelector("#dataLabel1").innerText = keys[0].replace(/_/g, ' ' );
    document.querySelector("#dataValue1").innerText = responseJSON[keys[0]];
    document.querySelector("#dataLabel2").innerText = keys[5].replace(/_/g, ' ');
    document.querySelector("#dataValue2").innerText = responseJSON[keys[5]];
}

// getFromSWAPI()
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

