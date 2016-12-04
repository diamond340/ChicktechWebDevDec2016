function createFavorite() {
    var listOfFavorites = document.getElementsByClassName("favorite");
   
   // Get the first favorite
   var theFirstFavorite = listOfFavorites.item(0);
   
   // Clone the first favorite - this clone will be the new favorite
   var theNewFavorite = theFirstFavorite.cloneNode(true);
   
   // Insert our clone onto thepage
   document.getElementById("content").appendChild(theNewFavorite);
  
     var newFavoriteTitle = document.getElementById("creator-title").value;
    var newFavoriteDescription = document.getElementById("creator-description").value;
    var newFavoriteMedia = document.getElementById("creator-media").value;
     theNewFavorite.getElementsByClassName("title")[0].innerHTML = newFavoriteTitle;
    theNewFavorite.getElementsByClassName("description")[0].innerHTML = newFavoriteDescription;
    theNewFavorite.getElementsByClassName("media")[0].innerHTML = newFavoriteMedia;
  console.log(listOfFavorites);
}