


// deleteRow - Removes the current row of the element
function deleteRow () {
  removeFromStorage(this.parentNode.firstChild.data)
  this.parentNode.remove()
};

// createDOMListElement - Add given element to the DOM and show it as
//      a list to the users
// @param word - Element to add to the list
// Task 2.1 Step 1
function createDOMListElement(country, population) {
  //Create delete button element
  let deleteButton = document.createElement("i");
  //add fontawesome icon
  deleteButton.className = "fas fa-times red delete"
  //Add EventListener to the button (listens for a click)
  deleteButton.addEventListener("click", deleteRow)
  var itemNode = document.createElement("li")
  itemNode.className = "listElements"
  var countryName = document.createTextNode(country)

  var countryPopulation = document.createElement("span")
  countryPopulation.className = "population"
  countryPopulation.appendChild(document.createTextNode(population))

  itemNode.appendChild(countryName)
  itemNode.appendChild(document.createTextNode("  -  " ))
  itemNode.appendChild(countryPopulation)
  itemNode.appendChild(document.createTextNode("      " ))
  itemNode.appendChild(deleteButton)

  document.getElementById("inputList").appendChild(itemNode)
};

//      Clear input field
//  2.1 Step 1
function clearInputField() {
  $("#inputCountry").val("")
};

// EventListener
// Listens for click of Add button
$("#addInput").click( function () {
  let countryName = $("#inputCountry").val()
  getPopulation(countryName).then( function(data){

    if(! storageContains(countryName) ){
      createDOMListElement(countryName, data.total_population[0].population)
      addToStorage(countryName, data)
    }
  }).fail(function () {
    alert("Could not find "+countryName+ ". Enter a valid country!");
  });

  clearInputField()
   //test
   // console.log('clickAdd().localStorage.countries :')
   // console.log(localStorage.countries)
});

// storageContains - checks if local storage
//      contains the given element
// Task 2.1 Step 3
function storageContains(countryName){
  var countries =  JSON.parse(localStorage.getItem("countries"));
   // console.log('/storageContains().localStorage : ');
   // console.log(JSON.stringify(countries));
  return (countries && (countryName in countries)) ? true : false;
}

function clearStorage(){
  localStorage.clear();
}




function addToStorage (countryName , data) {


  var countries = ( JSON.parse(localStorage.getItem("countries")) || {} );

  if(! countries[countryName] ) {
    countries[countryName] = data;
    localStorage.setItem("countries", JSON.stringify(countries));
  }
}



// TODO
// removeFromStorage - removes element from localStorage
// Task 2.1 Step 3
function removeFromStorage (countryName){

  var countries = JSON.parse(localStorage.getItem("countries"));

  if(countries[countryName]){
    delete countries[countryName]
    localStorage.setItem("countries", JSON.stringify(countries))
  }

}



// showStorageToScreen - Adds localStorage list to
// the DOM by applyting the createDOMListElement to
// all elements in localStorage.countries
// Task 2.1 Step 3
// Update Task 3.1 adds population to element when loading from storage
function showStorageToScreen(){
  var countries = JSON.parse(localStorage.getItem("countries"));

  for (country in countries){
    createDOMListElement(country, countries[country].total_population[0].population)
  }
}

// listFunction - For each element of the given array
//     a function that is given is applied.
// @param arrayInput - Array
// @param myFunction - A function to apply to array elements
// Task 2.1 Step 3
function listFunction (arrayInput, myFunction) {
  arrayInput.forEach(myFunction)
};

// checkWord - Checks if the element starts with the given word
// @param element - The element to check to
// @param searchWord - The word to check
//Task 2.2 Step 2A
function checkWord(element, searchWord){
  return element.startsWith(searchWord)
}

// checkList - Check the given array with the given
//          search word for a match. Return all matches.
// @param list - Array to search
// @param searchWord - Search word
//Task 2.2 Step 2B
function checkList(list, searchWord) {
  var matchList = [];
  var i;
  for(i=0; i < list.length; i++){
    //Capitalize both words to ignore case
    if(checkWord(list[i].toUpperCase() ,searchWord.toUpperCase())){
      matchList.push(list[i]);
    }
  }
  return matchList;
}


//EventListener
// Listen for change in searchbox
//Task 2.2 Step3
$("#searchbox").on("keyup", function(){
//  let searchList = getStorageList();
 let searchWord = $("#searchbox").val()
//  let filteredList = checkList(searchList , searchWord);

  $("#inputList li").filter( function(){
    $(this).toggle( checkWord( $(this).text().toUpperCase() ,searchWord.toUpperCase()))
  })

})

function getPopulation(countryName){
  return $.getJSON(`http://54.72.28.201/1.0/population/${countryName}/today-and-tomorrow`);
};


function estimatePopulationSecond(today,tomorrow){

  return Math.ceil(((tomorrow - today)/(24*60*60))+ currentTime) ;
}

function calcPop(element) {
    let today = element.total_population[0].population;
    let tomorrow = element.total_population[1].population;
    let secsInDay = (24*60*60);
    let rate = (tomorrow - today)/ secsInDay;
    return  Math.ceil(today + (rate * currentTime()) );
}


function currentTime(){
    var d = new Date()
    var now = (d.getHours() * 3600 ) + (d.getMinutes() * 60) + d.getSeconds();
    return now;
}

function currentPop(countryName){
  var countries = JSON.parse(localStorage.getItem("countries"));
  return calcPop(countries[countryName]);
}


setInterval(function(){
    $(".population").each(function(index){

        // console.log(this.parentNode.firstChild.data)
        $(this).text(currentPop(this.parentNode.firstChild.data))

    })
}, 1000);



//localStorage.clear()

//test 2.2.2b
//var xList = ["India", "Norway", "Denmark", "Sweden", "Indonesia"];
//console.log( checkList(xList, "Ind"))

// test 2.2.2a
//let x = "Fortran"
//let y = "Java"
//console.log(checkWord(x,y))

//test Add country list to localStorage and DOM list
//var countries = ["Norway", "Denmark", "Sweden"];
//console.log("The following countries are added to the list by default for testing:")
//console.log(countries)
//listFunction(countries, addToStorage)
showStorageToScreen()

//test
//console.log( localStorage.countries)
//localStorage.removeItem("countries")
