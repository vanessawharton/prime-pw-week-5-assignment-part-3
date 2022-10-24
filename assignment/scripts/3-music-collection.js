console.log('***** Music Collection *****')

//Create a variable collection that starts as an empty array.

let collection = [];

//Add a function named addToCollection. This function should:
//Take in the album's title, artist, yearPublished as input parameters
//Create a new object having the above properties
//Add the new object to the end of the collection array
//Return the newly created object

function addToCollection(title, artist, yearPublished){
    const newAddition = title + " by " + artist + ", published in " + yearPublished;
    newAddition.title = title;
    newAddition.artist = artist;
    newAddition.yearPublished = yearPublished;
    collection.push(newAddition);
    return newAddition;
}

//Test the addToCollection function:
//Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years.
//Console.log each album as added using the returned value.
//After all are added, console.log the collection array.


addToCollection('In Rainbows', 'Radiohead', 2007);
console.log('First Album:', collection[collection.length -1]);
addToCollection('Everything Now', 'Arcade Fire', 2017);
console.log('Second Album:', collection[collection.length -1]);
addToCollection('My Cherie Amour', 'Stevie Wonder', 1969);
console.log('Third Album:', collection[collection.length -1]);
addToCollection('Bon Iver', 'Bon Iver', 2011);
console.log('Fourth Album:', collection[collection.length -1]);
addToCollection('Rumors', 'Fleetwood Mac', 1977);
console.log('Fifth Album:', collection[collection.length -1]);
addToCollection('Neon Bible', 'Arcade Fire', 2007);
console.log('Sixth Album:', collection[collection.length -1]);
addToCollection('Let It Bleed', 'Rolling Stones', 1969);
console.log('Seventh Album:', collection[collection.length -1]);
addToCollection('Led Zeppelin II', 'Led Zeppelin', 1969);
console.log('Eighth Album:', collection[collection.length -1]);
addToCollection('American Teen', 'Khalid', 2017);
console.log('Ninth Album:', collection[collection.length -1]);
addToCollection('Wasting Light', 'Foo Fighters', 2011);
console.log('Tenth Album:', collection[collection.length -1]);

console.log(collection);

//Add a function named showCollection. This function should:
//Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//Console.log the number of items in the array.
//Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

function showCollection(collectionArray){
    for (i=0; i<collectionArray.length; i++){
        console.log(`${collection});
    }
    console.log(collectionArray.length);
}

//Test the showCollection function.

showCollection(collection);

//Add a function named findByArtist. This function should:
//Take in artist (a string) parameter
//Create an array to hold any results, empty to start
//Loop through the collection and add any objects with a matching artist to the array.
//Return the array with the matching results. If no results are found, return an empty array.

//Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist
//you know is not in your collection. Check that for artists with multiple matches, all are found.