

var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";

mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  if(allChoice == "all"){
    collection.find().toArray(function(err, doc){
      console.log(doc);
    });
  } else {
    console.log("Aw, you don't want to see the restaurants?");
  }
});


// /  To see one restaurant
     mongo.connect(url, function(err, db){
   var collection = db.collection('restaurants');
  	var oneChoice = prompt("Type the name of the restaurant and press enter to display that restaurants' name: ");
    	collection.find({name: oneChoice }).toArray(function(err, doc){ 
  		console.log(doc);
  		});


  		});
     // To add another restaurant

 mongo.connect(url, function(err, db){
   var collection = db.collection('restaurants');
   var newName = prompt("Enter the name of the new restaurant. name: ");
   var newStreet = prompt("Enter the street of the new restaurant. street: ");
   var newZipCode = prompt("Enter the zipcode of the new restaurant. Zipcode: ");
   var newYelp = prompt("Enter the yelp url of the new restaurant. url: ");
   collection.insert(
      {name: newName,
       address: {street: newStreet, zipcode: newZipCode},
       yelp: newYelp}
    );
 });

// for editing
mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  var updateName = prompt('Enter the name of the restaurant you wish to update. Name: ');
  var updateTrait = prompt('Enter the name of the field you would like to update or add. Field:');
  console.log(updateTrait);
  var updateVal = prompt('Enter the information for the field mentioned above. Info: ');
  collection.update({name: updateName}, {$set: { updateTrait: updateVal} });
  console.log(updateTrait);
});

// for deleting

mongo.connect(url, function(err, db) {
  var collection = db.collection('restaurants');
  var deleteOne = prompt('Enter the name of the restaurant you wish to delete. Name: ');
    collection.remove({name: deleteOne });
    console.log(deleteOne);
});



